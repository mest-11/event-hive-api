import { Router } from "express";
import { addAnEvent, deleteEvent, getAllEvents, getSingleEvent, updateEvent } from "../controllers/eventController.js";
import { upload } from "../middleware/upload.js";

const eventRouter = Router();

// add an event
eventRouter.post("/events", upload.single("eventBanner"), addAnEvent);

// get all events
eventRouter.get("/events", getAllEvents);

// get events by id
eventRouter.get("/events/:id", getSingleEvent);

// update events by id
eventRouter.patch("/events/:id", updateEvent);

// delete an event
eventRouter.delete("/events/:id", deleteEvent);

export default eventRouter;
