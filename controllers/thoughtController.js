const { Thought, User } = require('../models');

module.exports = {

  getThoughts(req, res) {
    Thought.find()
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },

  getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .select('-__v')
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with that ID found' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },

  postThought(req, res) {
    Thought.create(req.body)
      .then((thought) => {
        return User.findOneAndUpdate(
          { _id: req.body.userId },
          { $push: { thoughts: thought._id } },
          { new: true }
        );
      })
      .then((user) =>
        !user
          ? res
              .status(404)
              .json({ message: 'Thought created but has no user association.' })
          : res.json('Thought Created with associated User.')
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  
  updateThought(req, res) {
      Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $set: { thoughtText: req.body.thoughtText } },
        { runValidators: true, new: true }
      )
        .then((thought) =>
          !thought
            ? res.status(404).json({ message: 'No thought with this id found' })
            : res.json(thought)
        )
        .catch((err) => res.status(500).json(err));
  },

  deleteThought(req, res) {
    Thought.findOneAndDelete({ _id: req.params.thoughtId })
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with that ID found' })
          : User.findOneAndUpdate(
            { thoughts: req.params.thoughtId },
            { $pull: { thoughts: req.params.thoughtId } },
            { new: true }
          )
      )
      .then(() => res.json({ message: 'Thought deleted!' }))
      .catch((err) => res.status(500).json(err));
  },
  postThoughtReaction(req, res) {
    Thought.findOneAndUpdate({ _id: req.params.thoughtId },
    { $set: 
      { reactions: 
        { reactionBody: req.body.reactionBody,
          username: req.body.username 
        } 
      }
    })
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
  deleteThoughtReaction(req, res) {
    Thought.findOneAndUpdate(
      {_id: req.params.thoughtId },
      { $pull: { reactions: { _id: req.params.reactionId } } },
      { new: true }
    )
    .then(() => res.json({ message: 'Reaction removed.' }))
    .catch((err) => res.status(500).json(err));
  },

};
