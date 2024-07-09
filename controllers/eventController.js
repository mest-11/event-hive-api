import { EventModel } from "../models/eventModel.js";


// get all events
export const getAllEvents = async (req, res, next) => {
    try {
        const allUsers = await EventModel.find();
        res.json(allUsers);
    } catch (error) {
        next(error);
    }
}

// get single event by id
export const getSingleEvent = async (req, res, next) => {
    try {
        const singleEvent = await EventModel.findById(req.params.id);
        res.json(singleEvent);
    } catch (error) {
        next(error);
    }
}

// add an event 
export const addAnEvent = async (req, res, next) => {
    try {
        const addEvent = await EventModel.create({
            ...req.body,
            eventBanner: req.file.filename
        });
        res.json(addEvent);
    } catch (error) {
        next(error);
    }
}

export const updateEvent = async (req, res, next) => {
    try {
        const eventUpdate = await EventModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(eventUpdate);
    } catch (error) {
        next(error);
    }
}

export const deleteEvent = async (req, res, next) => {
    try {
        const eventDelete = await EventModel.findByIdAndDelete(req.params.id, req.body, { new: true });
        res.json(eventDelete);
    } catch (error) {
        next(error);
    }
}
