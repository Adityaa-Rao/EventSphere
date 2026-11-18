"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rsvpEvent = exports.createEvent = exports.getEventById = exports.getEvents = void 0;
const Event_1 = __importDefault(require("../../models/Event"));
const getEvents = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { category, search } = req.query;
        const query = {};
        if (category && category !== "all") {
            query.category = category;
        }
        if (search) {
            query.$or = [
                { title: { $regex: String(search), $options: "i" } },
                { description: { $regex: String(search), $options: "i" } },
                { location: { $regex: String(search), $options: "i" } },
            ];
        }
        const events = yield Event_1.default.find(query).populate("creator", "name email").sort({ date: 1 });
        res.json(events);
    }
    catch (error) {
        res.status(500).json({ message: "Error fetching events", error: error.message });
    }
});
exports.getEvents = getEvents;
const getEventById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const event = yield Event_1.default.findById(req.params.id).populate("creator", "name email");
        if (!event) {
            res.status(404).json({ message: "Event not found" });
            return;
        }
        res.json(event);
    }
    catch (error) {
        res.status(500).json({ message: "Error fetching event", error: error.message });
    }
});
exports.getEventById = getEventById;
const createEvent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, description, date, location, category, coverImage, price, maxAttendees, creatorId } = req.body;
        if (!title || !description || !date || !location) {
            res.status(400).json({ message: "Missing required fields" });
            return;
        }
        const newEvent = yield Event_1.default.create({
            title,
            description,
            date: new Date(date),
            location,
            category: category || "general",
            coverImage: coverImage || "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
            price: Number(price) || 0,
            maxAttendees: Number(maxAttendees) || 100,
            creator: creatorId,
            attendees: [],
        });
        res.status(201).json(newEvent);
    }
    catch (error) {
        res.status(500).json({ message: "Error creating event", error: error.message });
    }
});
exports.createEvent = createEvent;
const rsvpEvent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { eventId, userId } = req.body;
        const event = yield Event_1.default.findById(eventId);
        if (!event) {
            res.status(404).json({ message: "Event not found" });
            return;
        }
        if (userId && !event.attendees.includes(userId)) {
            event.attendees.push(userId);
            yield event.save();
        }
        res.json({ message: "RSVP successful", attendeesCount: event.attendees.length });
    }
    catch (error) {
        res.status(500).json({ message: "Error registering RSVP", error: error.message });
    }
});
exports.rsvpEvent = rsvpEvent;
