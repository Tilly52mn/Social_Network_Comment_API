const { User } = require('../models');

const userController = {
  // get all users
  getAlluser(req, res) {
    user.find({})
      .populate({
        path: 'thoughts',
        select: '-__v'
      })
      .select('-__v')
      .sort({ _id: -1 })
      .then(dbuserData => res.json(dbuserData))
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  },

// get one user by id
getuserById({ params }, res) {
  user.findOne({ _id: params.id })
    .populate({
      path: 'thoughts',
      select: '-__v'
    })
    .select('-__v')
    .then(dbuserData => {
      if (!dbuserData) {
        res.status(404).json({ message: 'No user found with this id!' });
        return;
      }
      res.json(dbuserData);
    })
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
},

  // createuser
  createuser({ body }, res) {
    user.create(body)
      .then(dbuserData => res.json(dbuserData))
      .catch(err => res.status(400).json(err));
  },

// update user by id
updateuser({ params, body }, res) {
  user.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
    .then(dbuserData => {
      if (!dbuserData) {
        res.status(404).json({ message: 'No user found with this id!' });
        return;
      }
      res.json(dbuserData);
    })
    .catch(err => res.status(400).json(err));
},

  // delete user
  deleteuser({ params }, res) {
    user.findOneAndDelete({ _id: params.id })
      .then(dbuserData => {
        if (!dbuserData) {
          res.status(404).json({ message: 'No user found with this id!' });
          return;
        }
        res.json(dbuserData);
      })
      .catch(err => res.status(400).json(err));
  }

}

module.exports = userController;