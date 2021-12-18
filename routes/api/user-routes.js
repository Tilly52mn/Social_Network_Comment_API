const router = require('express').Router();

const {
    getAllUser,
    getuserById,
    createUser,
    updateUser,
    deleteUser
  } = require('../../controllers/user-controller');

// Set up GET all and POST at /api/users
router
  .route('/')
  .get(getAllUser)
  .post(createUser);

// Set up GET one, PUT, and DELETE at /api/users/:id0
router
  .route('/:id')
  .get(getuserById)
  .put(updateUser)
  .delete(deleteUser);

module.exports = router;