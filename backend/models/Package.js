import mongoose from "mongoose";

const packageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  features: { type: [String], required: true },

});

export const Package = mongoose.model("Package", packageSchema);
