import { model, Schema, Types } from "mongoose";

const eventSchema = new Schema({
    eventName: { type: String },
    eventDescription: { type: Types.ObjectId }, // required: true
    collegeID: { type: Types.ObjectId, ref: "College" }, // required
    eventLocation: { type: String },
    eventDate: { type: String },
    eventTags: [{ type: String }],
    eventType: [{ type: String, enum: ["online", "offline"] }],
    eventBanner: { type: String, required: true },
    eventCreatedBy: { type: Types.ObjectId, ref: "user" }
}, {
    timestamps: true
});

export const EventModel = model("event", eventSchema);