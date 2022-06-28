import mongoose from "mongoose";
const ProjectSchema = new mongoose.Schema({
  name: { type: String },
  status: { type: String, enum: ["Not Started", "In Progress", "Completed"] },
  description: { type: String },
  id: { type: String },
  clientId: { type: mongoose.Schema.Types.ObjectId, ref: "clients" },
});

const Project = mongoose.model("projects", ProjectSchema);
export default Project;
