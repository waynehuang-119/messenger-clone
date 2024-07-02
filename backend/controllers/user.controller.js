import User from "../models/user.model.js";

export const getUsersForSidebar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;

    // Find all users including yourself
    // **const allUsers = await User.find();

    // Find all users except the logged in User, so the sidebar won't show yourself
    const filteredUsers = await User.find({
      _id: { $ne: loggedInUserId },
    }).select("-password");

    res.status(200).json(filteredUsers);
  } catch (error) {
    console.error("Error in getUsersForSidebar controller: ", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
