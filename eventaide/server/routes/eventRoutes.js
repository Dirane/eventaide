const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid"); // Import UUID for unique IDs

// Temporary in-memory storage
let events = [];

/**
 * @swagger
 * tags:
 *   name: Events
 *   description: API for managing events
 */

/**
 * @swagger
 * /events:
 *   post:
 *     summary: Create a new event
 *     tags: [Events]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: "Tech Conference"
 *               description:
 *                 type: string
 *                 example: "A conference about technology"
 *               date:
 *                 type: string
 *                 format: date
 *                 example: "2025-02-10"
 *               location:
 *                 type: string
 *                 example: "New York"
 *     responses:
 *       201:
 *         description: Event created successfully
 *       400:
 *         description: Bad request
 */
router.post("/", (req, res) => {
  const { title, description, date, location } = req.body;
  if (!title || !description || !date || !location) {
    return res.status(400).json({ error: "All fields are required" });
  }
  
  const newEvent = {
    id: uuidv4(), // Generate unique ID
    title,
    description,
    date,
    location,
  };

  events.push(newEvent);
  res.status(201).json(newEvent);
});

/**
 * @swagger
 * /events:
 *   get:
 *     summary: Get all events
 *     tags: [Events]
 *     responses:
 *       200:
 *         description: List of all events
 */
router.get("/", (req, res) => {
  res.status(200).json(events);
});

/**
 * @swagger
 * /events/{id}:
 *   get:
 *     summary: Get an event by ID
 *     tags: [Events]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Event details
 *       404:
 *         description: Event not found
 */
router.get("/:id", (req, res) => {
  const event = events.find((e) => e.id === req.params.id);
  if (!event) return res.status(404).json({ error: "Event not found" });

  res.status(200).json(event);
});

/**
 * @swagger
 * /events/{id}:
 *   put:
 *     summary: Update an event by ID
 *     tags: [Events]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: "Updated Tech Conference"
 *               description:
 *                 type: string
 *                 example: "Updated conference details"
 *               date:
 *                 type: string
 *                 format: date
 *                 example: "2025-03-15"
 *               location:
 *                 type: string
 *                 example: "San Francisco"
 *     responses:
 *       200:
 *         description: Event updated successfully
 *       404:
 *         description: Event not found
 */
router.put("/:id", (req, res) => {
  const event = events.find((e) => e.id === req.params.id);
  if (!event) return res.status(404).json({ error: "Event not found" });

  // Update event details
  Object.assign(event, req.body);
  res.status(200).json(event);
});

/**
 * @swagger
 * /events/{id}:
 *   delete:
 *     summary: Delete an event by ID
 *     tags: [Events]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Event deleted successfully
 *       404:
 *         description: Event not found
 */
router.delete("/:id", (req, res) => {
  const index = events.findIndex((e) => e.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: "Event not found" });

  events.splice(index, 1);
  res.status(200).json({ message: "Event deleted successfully" });
});

module.exports = router;
