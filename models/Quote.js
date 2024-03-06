import mongoose from "mongoose";

const Schema = mongoose.Schema

let CharacterSchema = new Schema({
  "author": { type: String },
  "content": { type: String },
  "tag": { type: String },
  "length": { type: Number },
})

export default mongoose.model("characters", CharacterSchema)

