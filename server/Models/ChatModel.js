import mongoose from "mongoose";

const ChatSCheme = mongoose.Schema(
  {
    members: {
      type: Array,
    },
  },
  { timestamps: true }
);

const ChatModel = mongoose.model("Chat", ChatSCheme);
export default ChatModel;
