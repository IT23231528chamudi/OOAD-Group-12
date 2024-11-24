import React from "react";

function UserProfile() {
  return (
    <div className="user-profile-container-custom">
      {/* Left Section: User Info */}
      <div className="user-profile-left-custom">
        <h1>Jane Doe</h1>
        <p className="user-title-custom">Software Engineer</p>
        <div className="user-contact-info-custom">
          <p>
            <strong>Phone:</strong> +1-234-567-890
          </p>
          <p>
            <strong>Email:</strong> jane.doe@example.com
          </p>
          <p>
            <strong>Location:</strong> New York, USA
          </p>
          <p className="user-social-links-custom">
            <a href="#">LinkedIn</a> • <a href="#">GitHub</a> •{" "}
            <a href="#">Twitter</a>
          </p>
        </div>
        <button className="view-profile-button-custom">View Full Profile ↓</button>
      </div>

      {/* Right Section: Profile Image */}
      <div className="user-profile-right-custom">
        <button className="download-resume-button-custom">Download Resume</button>
        <div className="profile-image-container-custom">
          <img
            src="https://via.placeholder.com/200"
            alt="Profile"
            className="profile-image-custom"
          />
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
