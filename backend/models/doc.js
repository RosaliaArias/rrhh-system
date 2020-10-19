const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  url: { type: String, required: true },
  fullName: { type: String, required: true },
  nic: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  skills: [String],
  languages: [String],
  certifications: [String],
  experience: [String],
  jobs: [Number],
});

module.exports = mongoose.model("Doc", postSchema);
