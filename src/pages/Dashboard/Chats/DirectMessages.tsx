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
  const [showHistory, setShowHistory] = useState(false); // State for transaction history visibility
  const [rechargeHistory, setRechargeHistory] = useState<number[]>([]);
  const [transferHistory, setTransferHistory] = useState<number[]>([]);

  // Example: Fetch transaction history when the component mounts
  useEffect(() => {
    // Simulate fetching recharge and transfer history
    // Set these to empty arrays initially
    setRechargeHistory([]);
    setTransferHistory([]);
  }, []); // The empty dependency array ensures this effect runs only once

  const toggleModal = () => {
    setModalOpen(!modalOpen);
    setShowBalanceInput(false);
    setShowTransferInput(false);
    setNotEnoughBalance(false);
    setTransferFailed(false);
    setShowHistory(false); // Reset the history state when closing the modal
    setWalletView(WalletView.Main);
  };

  const handleSetBalance = () => {
    setShowBalanceInput(true);
    setWalletView(WalletView.Recharge);
  };

  const handleApplyBalance = () => {
    const newBalance = balance + rechargeAmount;
    setRechargeHistory((prevHistory) => [...prevHistory, rechargeAmount]);
    setBalance(newBalance);
    setShowBalanceInput(false);
    setWalletView(WalletView.Main);
  };

  const handleTransfer = () => {
    setShowTransferInput(true);
    setWalletView(WalletView.Transfer);
  };

  const handleApplyTransfer = () => {
    if (transferAmount > balance) {
      setNotEnoughBalance(true);
      return;
    }

    const newBalance = balance - transferAmount;
    setTransferHistory((prevHistory) => [...prevHistory, transferAmount]);
    setBalance(newBalance);
    setShowTransferInput(false);
    setNotEnoughBalance(false);
    setTransferFailed(false);
    setWalletView(WalletView.Main);
  };

  const handleViewHistory = () => {
    setShowHistory(true);
    setWalletView(WalletView.History);
  };

  const handleBackToMain = () => {
    setWalletView(WalletView.Main);
    setTransferFailed(false);
    setShowHistory(false); // Reset the history state when going back to main
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
            {/* Use the WalletIcon component */}
            <WalletIcon onClick={toggleModal} />
          </div>
          <UncontrolledTooltip target="new-message" placement="bottom">
            LWallet
          </UncontrolledTooltip>
        </div>
      </div>

      {/* Modal for wallet */}
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
              {/* Back button to return to the main view */}
              <Button color="secondary" onClick={handleBackToMain}>
                Back
              </Button>
            </div>
          ) : (
            <>
              <p>Balance: {balance} VND</p>
              <Button color="primary" onClick={handleSetBalance}>
                Recharge
              </Button>
              <Button color="success" className="ms-2" onClick={handleTransfer}>
                Transfer
              </Button>
              <Button color="info" className="ms-2" onClick={handleViewHistory}>
                View History
              </Button>
            </>
          )}

          {/* Close button */}
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