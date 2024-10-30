import { Model, ObjectId, Schema, model } from "mongoose";

// interface
interface UserDocument {
  name: string;
  email: string;
  password: string;
  verified: boolean;
  avatar?: { url: string; publicId: string };
  tokens: string[];
  favorites: ObjectId[];
  followers: ObjectId[];
  followings: ObjectId[];
}

const userSchema = new Schema<UserDocument>(
  {
    name: String,
    email: String,
    password: String,
    verified: {
      type: Boolean,
      default: false,
    },
    avatar: { url: String, publicId: String },
    tokens: [
      {
        type: String,
      },
    ],
    favorites: [
      {
        type: Schema.Types.ObjectId,
        ref: "Audio",
      },
    ],
    followers: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    followings: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const User = model("User", userSchema) as Model<UserDocument>;

export default User;
