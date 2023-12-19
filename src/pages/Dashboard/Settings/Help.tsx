import React, { useState } from "react";
import { Link } from "react-router-dom";

const Help = () => {
  const [showFAQs, setShowFAQs] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showTermsPrivacy, setShowTermsPrivacy] = useState(false);

  const toggleFAQs = () => {
    setShowFAQs(!showFAQs);
    setShowContact(false); 
    setShowTermsPrivacy(false);
  };

  const toggleContact = () => {
    setShowContact(!showContact);
    setShowFAQs(false); // Close other sections when Contact is clicked
    setShowTermsPrivacy(false);
  };

  const toggleTermsPrivacy = () => {
    setShowTermsPrivacy(!showTermsPrivacy);
    setShowFAQs(false); // Close other sections when Terms & Privacy is clicked
    setShowContact(false);
  };

  return (
    <div className="accordion-body">
      <ul className="list-group list-group-flush">
        <li className="list-group-item py-3 px-0 pt-0">
          <h5 className="font-size-13 mb-0">
            <Link to="#" className="text-body d-block" onClick={toggleFAQs}>
              FAQs
            </Link>
          </h5>
          {showFAQs && (
            <div className="faq-content">
              {/* Display your FAQs content here */}
              <p>This is where your FAQs content goes.</p>
            </div>
          )}
        </li>
        <li className="list-group-item py-3 px-0">
          <h5 className="font-size-13 mb-0">
            <Link to="#" className="text-body d-block" onClick={toggleContact}>
              Contact
            </Link>
          </h5>
          {showContact && (
            <div className="contact-content">
              <p>dotrongtinh@gmail.com</p>
            </div>
          )}
        </li>
        <li className="list-group-item py-3 px-0 pb-0">
          <h5 className="font-size-13 mb-0">
            <Link
              to="#"
              className="text-body d-block"
              onClick={toggleTermsPrivacy}
            >
              Terms & Privacy policy
            </Link>
          </h5>
          {showTermsPrivacy && (
            <div className="terms-privacy-content">
              {/* Display your Terms & Privacy content here */}
              <p>This is where your Terms & Privacy content goes.</p>
            </div>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Help;
