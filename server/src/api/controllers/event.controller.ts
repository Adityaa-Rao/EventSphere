import { Request, Response } from "express";
import Event from "../../models/Event";

export const getEvents = async (req: Request, res: Response): Promise<void> => {
  try {
    const { category, search } = req.query;
    const query: Record<string, unknown> = {};

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

    const events = await Event.find(query).populate("creator", "name email").sort({ date: 1 });
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: "Error fetching events", error: (error as Error).message });
  }
};

export const getEventById = async (req: Request, res: Response): Promise<void> => {
  try {
    const event = await Event.findById(req.params.id).populate("creator", "name email");
    if (!event) {
      res.status(404).json({ message: "Event not found" });
      return;
    }
    res.json(event);
  } catch (error) {
    res.status(500).json({ message: "Error fetching event", error: (error as Error).message });
  }
};

export const createEvent = async (req: Request, res: Response): Promise<void> => {
  try {
    const { title, description, date, location, category, coverImage, price, maxAttendees, creatorId } = req.body;

    if (!title || !description || !date || !location) {
      res.status(400).json({ message: "Missing required fields" });
      return;
    }

    const newEvent = await Event.create({
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
  } catch (error) {
    res.status(500).json({ message: "Error creating event", error: (error as Error).message });
  }
};

export const rsvpEvent = async (req: Request, res: Response): Promise<void> => {
  try {
    const { eventId, userId } = req.body;
    const event = await Event.findById(eventId);

    if (!event) {
      res.status(404).json({ message: "Event not found" });
      return;
    }

    if (userId && !event.attendees.includes(userId)) {
      event.attendees.push(userId);
      await event.save();
    }

    res.json({ message: "RSVP successful", attendeesCount: event.attendees.length });
  } catch (error) {
    res.status(500).json({ message: "Error registering RSVP", error: (error as Error).message });
  }
};
