import React, { useState } from "react";
import { Button } from "reactstrap";
import { BasicDetailsTypes } from "../../../data/settings";

interface PersonalInfoProps {
  basicDetails: BasicDetailsTypes;
}

const PersonalInfo = ({ basicDetails }: PersonalInfoProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedDetails, setEditedDetails] = useState<BasicDetailsTypes>(
    basicDetails
  );

  // const fullName = editedDetails
  //   ? `${editedDetails.firstName} ${editedDetails.lastName}`
  //   : "-";

  const handleEdit = () => {
    setIsEditing(true);
    setEditedDetails(basicDetails); // Initialize editedDetails with current details
  };

  const handleSave = () => {
    // Implement your save logic here
    // You can update the details in your state or send them to the server
    console.log("Saving edited details:", editedDetails);
    setIsEditing(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  return (
    <div className="accordion-body">
      <div className="float-end">
        {!isEditing && (
          <Button
            color="none"
            type="button"
            className="btn btn-soft-primary btn-sm"
            onClick={handleEdit}
          >
            <i className="bx bxs-pencil align-middle"></i>
          </Button>
        )}
      </div>

      <div>
        <p className="text-muted mb-1">First Name</p>
        {isEditing ? (
          <input
            type="text"
            name="firstName"
            value={editedDetails.firstName}
            onChange={handleChange}
          />
        ) : (
          <h5 className="font-size-14">{editedDetails.firstName || "-"}</h5>
        )}
      </div>

      <div className="mt-4">
        <p className="text-muted mb-1">Last Name</p>
        {isEditing ? (
          <input
            type="text"
            name="lastName"
            value={editedDetails.lastName}
            onChange={handleChange}
          />
        ) : (
          <h5 className="font-size-14">{editedDetails.lastName || "-"}</h5>
        )}
      </div>

      <div className="mt-4">
        <p className="text-muted mb-1">Email</p>
        {isEditing ? (
          <input
            type="text"
            name="email"
            value={editedDetails.email}
            onChange={handleChange}
          />
        ) : (
          <h5 className="font-size-14">
            {editedDetails.email || "-"}
          </h5>
        )}
      </div>

      <div className="mt-4">
        <p className="text-muted mb-1">Location</p>
        {isEditing ? (
          <input
            type="text"
            name="location"
            value={editedDetails.location}
            onChange={handleChange}
          />
        ) : (
          <h5 className="font-size-14 mb-0">
            {editedDetails.location || "-"}
          </h5>
        )}
      </div>

      {isEditing && (
        <div className="mt-4">
          <Button color="primary" onClick={handleSave}>
            Save
          </Button>
        </div>
      )}
    </div>
  );
};

export default PersonalInfo;
