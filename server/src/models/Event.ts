import mongoose, { Document, Schema } from "mongoose";

export interface IEvent extends Document {
  title: string;
  description: string;
  date: Date;
  location: string;
  creator: mongoose.Types.ObjectId;
  category: string;
  coverImage?: string;
  price: number;
  maxAttendees: number;
  attendees: mongoose.Types.ObjectId[];
  createdAt: Date;
  updatedAt: Date;
}

const EventSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Date, required: true },
    location: { type: String, required: true },
    creator: { type: Schema.Types.ObjectId, ref: "User", required: true },
    category: { type: String, required: true },
    coverImage: { type: String },
    price: { type: Number, default: 0 },
    maxAttendees: { type: Number, required: true },
    attendees: [{ type: Schema.Types.ObjectId, ref: "User" }],
  },
  { timestamps: true }
);

export default mongoose.models.Event || mongoose.model<IEvent>("Event", EventSchema);
