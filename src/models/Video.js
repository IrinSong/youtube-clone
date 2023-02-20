import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    minLength: 20,
    maxLength: 80,
  },
  description: { type: String, required: true, trim: true, maxLength: 140 },
  createAt: { type: Date, default: Date.now, required: true },
  hashtags: [{ type: String, trim: true }],
  metadata: {
    views: { type: Number, default: 0, required: true },
    rating: { type: Number, default: 0, required: true },
  },
});

const Video = mongoose.model("Video", videoSchema);
export default Video;
