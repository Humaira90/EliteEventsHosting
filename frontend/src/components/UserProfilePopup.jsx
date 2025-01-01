import React, { useState, useEffect } from "react";
import { getAuth, updateProfile, updatePassword } from "firebase/auth";

const UserProfilePopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Don't render anything if the popup is closed

  const auth = getAuth();
  const user = auth.currentUser;

  const [profile, setProfile] = useState({
    displayName: "",
    email: "",
    photoURL: "",
  });
  const [newName, setNewName] = useState("");
  const [newPhoto, setNewPhoto] = useState(null);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [previewPhoto, setPreviewPhoto] = useState(null);
  const [uploading, setUploading] = useState(false);

  // Fetch user profile details
  useEffect(() => {
    if (user) {
      setProfile({
        displayName: user.displayName || "Your Name",
        email: user.email,
        photoURL: user.photoURL || "https://via.placeholder.com/150",
      });
    }
  }, [user]);

  // Update user profile
  const handleProfileUpdate = async () => {
    if (!newName && !newPhoto && !newPassword) return;

    try {
      setUploading(true);
      let photoURL = profile.photoURL;

      // Simulate photo upload (replace with Firebase Storage logic if needed)
      if (newPhoto) {
        photoURL = URL.createObjectURL(newPhoto);
      }

      if (newName || newPhoto) {
        await updateProfile(user, {
          displayName: newName || profile.displayName,
          photoURL,
        });
        setProfile({ ...profile, displayName: newName || profile.displayName, photoURL });
      }

      if (newPassword) {
        if (newPassword !== confirmPassword) {
          alert("Passwords do not match!");
          return;
        }
        await updatePassword(user, newPassword);
        alert("Password updated successfully!");
      }

      // Reset inputs
      setNewName("");
      setNewPhoto(null);
      setNewPassword("");
      setConfirmPassword("");
      setPreviewPhoto(null);
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("An error occurred while updating your profile.");
    } finally {
      setUploading(false);
    }
  };

  // Preview new photo
  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setNewPhoto(file);
    if (file) {
      setPreviewPhoto(URL.createObjectURL(file));
    }
  };

  // Reset form
  const handleReset = () => {
    setNewName("");
    setNewPhoto(null);
    setNewPassword("");
    setConfirmPassword("");
    setPreviewPhoto(null);
  };

  // Remove profile picture
  const handleRemovePhoto = () => {
    setProfile({ ...profile, photoURL: "https://via.placeholder.com/150" });
    setNewPhoto(null);
    setPreviewPhoto(null);
  };

  return (
    <>
      {/* Overlay */}
      <div className="overlay" onClick={onClose}></div>

      {/* Popup Form */}
      <div className="user-profile-popup">
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            background: "none",
            border: "none",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          ✖
        </button>
        <h2>Edit Profile</h2>

        {/* Profile Display */}
        <div className="profile-card">
          <img
            src={previewPhoto || profile.photoURL}
            alt="Profile"
            className="profile-picture"
          />
          <h3>{profile.displayName}</h3>
          <p>{profile.email}</p>
          <button type="button" onClick={handleRemovePhoto}>
            Remove Profile Picture
          </button>
        </div>

        {/* Profile Update Form */}
        <form className="profile-form">
          {/* Update Name */}
          <input
            type="text"
            placeholder="Update Name"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />

          {/* Update Photo */}
          <input type="file" onChange={handlePhotoChange} accept="image/*" />
          {previewPhoto && <p>Preview updated profile picture below:</p>}

          {/* Update Password */}
          <input
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm New Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          {/* Action Buttons */}
          <div className="action-buttons">
            <button type="button" onClick={handleProfileUpdate} disabled={uploading}>
              {uploading ? "Updating..." : "Update Profile"}
            </button>
            <button type="button" onClick={handleReset}>
              Reset Changes
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default UserProfilePopup;
