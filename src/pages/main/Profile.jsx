import React, { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContextProvider";

const Profile = () => {
  const { user, updateUserProfile } = useContext(AuthContext);
  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState(user?.displayName || "");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageUpload = async (img) => {
    const formData = new FormData();
    formData.append("image", img);
    const res = await fetch(
      `https://api.imgbb.com/1/upload?key=66c36ebac8cfebbc76676fb0650e9ac5`, // Replace with real key
      {
        method: "POST",
        body: formData,
      }
    );
    const data = await res.json();
    return data?.data?.url;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      let photoUrl = user?.photoURL;
      if (image) {
        photoUrl = await handleImageUpload(image);
      }
      await updateUserProfile(name, photoUrl).then(() =>
        alert("Profile updated successfully!")
      );
      setEditMode(false);
    } catch (err) {
      alert("Profile update failed.");
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e6f1f3] to-[#f9fbfc] py-10 px-4 flex items-center justify-center">
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* Left side */}
        <div className="bg-[#043341] text-white flex flex-col items-center justify-center p-10">
          <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <img
              src={user?.photoURL}
              alt="User"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-2xl font-semibold mt-6">{user?.displayName}</h2>
          <p className="text-gray-200 mt-1">{user?.email}</p>
          {!editMode && (
            <button
              onClick={() => setEditMode(true)}
              className="mt-6 px-5 py-2 bg-white text-[#043341] font-medium rounded-lg hover:bg-gray-200 transition"
            >
              Edit Profile
            </button>
          )}
        </div>

        {/* Right side */}
        <div className="p-10">
          {editMode ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <h3 className="text-2xl font-semibold text-[#043341]">
                Update Profile
              </h3>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#043341] focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Profile Photo
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setImage(e.target.files[0])}
                  className="w-full bg-[#043341] p-2 rounded-md text-sm text-gray-100"
                />
              </div>
              <div className="flex gap-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-[#043341] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#032830] transition"
                >
                  {loading ? "Saving..." : "Save Changes"}
                </button>
                <button
                  type="button"
                  onClick={() => setEditMode(false)}
                  className="bg-gray-300 text-[#043341] px-6 py-2 rounded-lg font-medium hover:bg-gray-400 transition"
                >
                  Cancel
                </button>
              </div>
            </form>
          ) : (
            <div className="text-gray-700 space-y-4">
              <h3 className="text-2xl font-semibold text-[#043341] mb-4">
                Profile Info
              </h3>
              <p>
                <span className="font-medium">Name:</span> {user?.displayName}
              </p>
              <p>
                <span className="font-medium">Email:</span> {user?.email}
              </p>
              <p className="text-sm text-gray-400 mt-6">
                Click "Edit Profile" to update your name or photo.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
