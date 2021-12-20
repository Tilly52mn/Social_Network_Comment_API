const router = require('express').Router();
const {
  addThought,
  removeThought,
  addReaction,
  removeReaction,
  getAllThoughts,
  updateThought,
  getThoughtById
} = require('../../controllers/thought-controller');

router.route('/')
.get(getAllThoughts)
.post(addThought);

// /api/thoughts/<thoughtId>
router
  .route('/:thoughtId')
  .put(updateThought)
  .get(getThoughtById)
  .delete(removeThought)

router.route("/:thoughtId/reactions")
.put(addReaction)

router.route('/:thoughtId/:reactionId').delete(removeReaction);

module.exports = router;