import mongoose from "mongoose";
const ClientSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String },
  phone: { type: String },
});
const Client = mongoose.model("clients", ClientSchema);
export default Client;
