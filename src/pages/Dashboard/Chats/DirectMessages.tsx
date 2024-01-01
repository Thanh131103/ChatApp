import React, { useState, useEffect } from "react";
import {
  UncontrolledTooltip,
  Modal,
  ModalHeader,
  ModalBody,
  Button,
  Input,
  Alert,
} from "reactstrap";

// interface
import { UserTypes } from "../../../data/chat";

// component
import ChatUser from "./ChatUser";

// WalletIcon component with prop type
interface WalletIconProps {
  onClick: () => void;
}

const WalletIcon: React.FC<WalletIconProps> = ({ onClick }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      onClick={onClick}
      style={{ cursor: "pointer" }}
    >
      <rect x="2" y="7" width="20" height="15" rx="2" ry="2" />
      <path d="M16 3.5a4 4 0 0 1 0 8" />
      <path d="M13 6a1 1 0 0 1 2 0" />
    </svg>
  );
};

interface DirectMessagesProps {
  users: Array<UserTypes>;
  openAddContact: () => void;
  selectedChat: string | number;
  onSelectChat: (id: number | string) => void;
}

enum WalletView {
  Main,
  Recharge,
  Transfer,
  History,
}

enum RechargeMethod {
  None,
  Bank,
  Momo,
}

const DirectMessages = ({
  users,
  openAddContact,
  selectedChat,
  onSelectChat,
}: DirectMessagesProps) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [showBalanceInput, setShowBalanceInput] = useState(false);
  const [showTransferInput, setShowTransferInput] = useState(false);
  const [balance, setBalance] = useState(500000); // Default balance
  const [rechargeAmount, setRechargeAmount] = useState(0); // Amount to recharge
  const [transferAmount, setTransferAmount] = useState(0); // Amount to transfer
  const [notEnoughBalance, setNotEnoughBalance] = useState(false);
  const [transferFailed, setTransferFailed] = useState(false);
  const [walletView, setWalletView] = useState(WalletView.Main);
  const [showHistory, setShowHistory] = useState(false);
  const [rechargeHistory, setRechargeHistory] = useState<number[]>([]);
  const [transferHistory, setTransferHistory] = useState<number[]>([]);
  const [rechargeMethod, setRechargeMethod] = useState(RechargeMethod.None);

  // Example: Fetch transaction history when the component mounts
  useEffect(() => {
    setRechargeHistory([]);
    setTransferHistory([]);
  }, []);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
    setShowBalanceInput(false);
    setShowTransferInput(false);
    setNotEnoughBalance(false);
    setTransferFailed(false);
    setShowHistory(false);
    setWalletView(WalletView.Main);
  };

  const handleSetBalance = () => {
    setRechargeMethod(RechargeMethod.None);
    setShowBalanceInput(true);
    setWalletView(WalletView.Recharge);
  };

  const handleRechargeMethodSelection = (method: RechargeMethod) => {
    setRechargeMethod(method);
  };

  const handleApplyBalance = () => {
    const newBalance = balance + rechargeAmount;
    setRechargeHistory((prevHistory) => [...prevHistory, newBalance]);
    setBalance(newBalance);
    setShowBalanceInput(false);
    setWalletView(WalletView.Main);
  };

  const handleApplyTransfer = () => {
    if (transferAmount > balance) {
      setNotEnoughBalance(true);
      return;
    }

    const newBalance = balance - transferAmount;
    setTransferHistory((prevHistory) => [...prevHistory, newBalance]);
    setBalance(newBalance);
    setShowTransferInput(false);
    setNotEnoughBalance(false);
    setTransferFailed(false);
    setWalletView(WalletView.Main);
  };

  const handleBackToMain = () => {
    setRechargeMethod(RechargeMethod.None);
    setWalletView(WalletView.Main);
    setTransferFailed(false);
    setShowHistory(false);
  };

  return (
    <>
      <div className="d-flex align-items-center px-4 mt-5 mb-2">
        <div className="flex-grow-1">
          <h4 className="mb-0 font-size-11 text-muted text-uppercase">
            Direct Messages
          </h4>
        </div>
        <div className="flex-shrink-0">
          <div id="new-message" title="New Message">
            <WalletIcon onClick={toggleModal} />
          </div>
          <UncontrolledTooltip target="new-message" placement="bottom">
            LWallet
          </UncontrolledTooltip>
        </div>
      </div>

      <Modal isOpen={modalOpen} toggle={toggleModal} className="custom-modal">
        <ModalHeader toggle={toggleModal}>
          {walletView === WalletView.Main && "Leaf Wallet"}
          {walletView === WalletView.Recharge && "Recharge Balance"}
          {walletView === WalletView.Transfer && "Transfer Balance"}
          {walletView === WalletView.History && "Transaction History"}
        </ModalHeader>
        <ModalBody>
          {showBalanceInput ? (
            <div className="mb-3">
              <label htmlFor="balanceInput" className="form-label">
                Recharge:
              </label>
              <Input
                type="number"
                id="balanceInput"
                value={rechargeAmount}
                onChange={(e) => setRechargeAmount(Number(e.target.value))}
              />
              <Button color="primary" onClick={handleApplyBalance}>
                Apply Balance
              </Button>
            </div>
          ) : showTransferInput ? (
            <div className="mb-3">
              <label htmlFor="transferInput" className="form-label">
                Transfer Amount:
              </label>
              <Input
                type="number"
                id="transferInput"
                value={transferAmount}
                onChange={(e) => setTransferAmount(Number(e.target.value))}
              />
              <Button color="success" onClick={handleApplyTransfer}>
                Apply Transfer
              </Button>
              {notEnoughBalance && (
                <Alert color="danger" className="mt-2">
                  Not enough balance to transfer.
                </Alert>
              )}
              {transferFailed && (
                <Alert color="danger" className="mt-2">
                  Transfer failed. Please try again.
                </Alert>
              )}
            </div>
          ) : showHistory ? (
            <div>
              <h5>Recharge History:</h5>
              {rechargeHistory.map((amount, index) => (
                <p key={index}>Recharged: {amount} VND</p>
              ))}
              <h5>Transfer History:</h5>
              {transferHistory.map((amount, index) => (
                <p key={index}>Transferred: {amount} VND</p>
              ))}
              <Button color="secondary" onClick={handleBackToMain}>
                Back
              </Button>
            </div>
          ) : rechargeMethod === RechargeMethod.None ? (
            <div>
              <Button
                color="primary"
                onClick={() => handleRechargeMethodSelection(RechargeMethod.Bank)}
              >
                Recharge via Bank
              </Button>
              <Button
                color="primary"
                className="ms-2"
                onClick={() => handleRechargeMethodSelection(RechargeMethod.Momo)}
              >
                Recharge via Momo
              </Button>
            </div>
          ) : rechargeMethod === RechargeMethod.Bank ? (
            <div>
              {/* Bank recharge content goes here */}
              <Button color="primary" onClick={handleSetBalance}>
                Back
              </Button>
            </div>
          ) : rechargeMethod === RechargeMethod.Momo ? (
            <div>
              {/* Momo recharge content goes here */}
              <Button color="primary" onClick={handleSetBalance}>
                Back
              </Button>
            </div>
          ) : null}

          <Button color="secondary" onClick={toggleModal}>
            Close
          </Button>
        </ModalBody>
      </Modal>

      <div className="chat-message-list">
        <ul className="list-unstyled chat-list chat-user-list">
          {(users || []).map((user: UserTypes, key: number) => (
            <ChatUser
              user={user}
              key={key}
              selectedChat={selectedChat}
              onSelectChat={onSelectChat}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default DirectMessages;
