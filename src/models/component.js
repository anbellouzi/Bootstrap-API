const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ComponentSchema = new Schema({
  createdAt: { type: Date },
  updatedAt: { type: Date },
  name: { type: String, required: true },
  html: { type: String, required: true },
});

ComponentSchema.pre("save", function(next) {
  // SET createdAt AND updatedAt
  const now = new Date();
  this.updatedAt = now;

  if (!this.createdAt) {
    this.createdAt = now;
  }

  next();
});

module.exports = mongoose.model("Component", ComponentSchema);
