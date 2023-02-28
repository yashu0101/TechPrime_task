const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const projectSchema = new mongoose.Schema({
  projectid: Number,
  projectname: String,
  reason: String,
  type: String,
  division: String,
  category: String,
  priority: String,
  department: String,
  startdate: Date,
  enddate: Date,
  location: String,
  status: String,
  createdAt: { type: Date, default: Date.now },
});

projectSchema.plugin(AutoIncrement, { inc_field: "projectid" });
module.exports = mongoose.model("Project", projectSchema);
