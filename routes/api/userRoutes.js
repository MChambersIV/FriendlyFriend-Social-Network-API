const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  postUser,
  updateUser,
  deleteUser,
  postUserFriend,
  deleteUserFriend,
  
} = require('../../controllers/userController');

// /api/users/
router.route('/').get(getUsers).post(postUser);

// /api/users/:userId
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

// /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId').post(postUserFriend).delete(deleteUserFriend);

module.exports = router;
