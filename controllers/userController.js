const { User, Thought } = require('../models');


module.exports = {

  getUsers(req, res) {
    User.find({ new: true })
    .then((users) => res.json(users))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },

  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .select('-__v')
      .populate('thoughts')
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with this ID' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },

  postUser(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },

  deleteUser(req, res) {
    User.findOneAndRemove({ _id: req.params.userId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user in db' })
          : Thought.findOneAndUpdate(
            { username: req.params.userId },
            { $pull: { username: req.params.userId } },
            { new: true }
            )
      )
      .then((thought) =>
        !thought
          ? res.status(404).json({
              message: 'User deleted, no thoughts to delete.',
            })
          : res.json({ message: 'User and thoughts successfully deleted.' })
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  updateUser(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $set: { username: req.body.username } },
      { runValidators: true, new: true }
    )
      .then((user) =>
        !user
          ? res
              .status(404).json({ message: 'No user found.' })
          : res.json(user)
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  postUserFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $push: { friends: req.params.friendId } },
      { runValidators: true, new: true }
      )
      .then((user) =>
        !user
          ? res
              .status(404).json({ message: 'No user found' })
          : res.json(user)
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  
  deleteUserFriend(req, res) {
    User.findOneAndUpdate(
      {_id: req.params.userId },
      { $pull: { friends: req.params.friendId } },
      { new: true }
    )
    .then(() => res.json({ message: 'Friend removed.' }))
    .catch((err) => res.status(500).json(err));
  },
};
