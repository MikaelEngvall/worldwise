import mongoose from "../db/mongoose.js";
const { Schema } = mongoose;

const citySchema = new Schema({
  cityName: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  emoji: String,
  date: Date,
  notes: String,
  position: {
    lat: Number,
    lng: Number,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const City = mongoose.model("City", citySchema);
export default City;
