const { Schema, model } = require('mongoose');
const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
      },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) => dateFormat(createdAtVal)
    },
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User'
      }
    ],
    thoughts: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Thought'
        }
      ]
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
  }
);


  // create the Pizza model using the PizzaSchema
const User = model('User', UserSchema);

// get total count of comments and replies on retrieval
UserSchema.virtual('friendCount').get(function() {
  return this.friends.length;
});
// export the Pizza model
module.exports = User;