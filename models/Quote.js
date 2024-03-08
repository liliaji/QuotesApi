import mongoose from "mongoose";

const Schema = mongoose.Schema

let QuoteSchema = new Schema({
  "author": { type: String },
  "authorImage": { type: String},
  "content": { type: String },
  "tag": { type: String },
  "length": { type: Number },
})

export default mongoose.model("quotes", QuoteSchema)
