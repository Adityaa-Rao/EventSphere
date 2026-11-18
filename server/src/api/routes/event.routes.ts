import express from "express";
import { getEvents, getEventById, createEvent, rsvpEvent } from "../controllers/event.controller";

const router = express.Router();

router.get("/", getEvents);
router.get("/:id", getEventById);
router.post("/", createEvent);
router.post("/rsvp", rsvpEvent);

export default router;
