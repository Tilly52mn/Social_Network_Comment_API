const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ReactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
          },
      reactionBody: {
        type: String,
        required: true,
        trim: true
      },
      writtenBy: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => dateFormat(createdAtVal)
      },
    },
    {
        toJSON: {
            virtuals: true,
          getters: true
        }
      }
  );

  const ThoughtSchema = new Schema(
    {
      username: {
        type: String,
        required: true,
      },
      thoughtText: {
        type: String,
        required: true,
        maxLenght:280,
        minLenght:1
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => dateFormat(createdAtVal)
      },
      // use reactionSchema to validate data for a reaction
      reactions: [ReactionSchema]
    },
    {
      toJSON: {
        virtuals: true,
        getters: true
      },
      id: false
    }
  );

  ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
  });

const Thought = model('thought', ThoughtSchema);

module.exports = Thought;