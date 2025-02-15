const express = require("express");
const app = express();
app.use(express.json());

const { swaggerUi, swaggerSpec } = require("./swagger");

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const mockEvents = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    name: `Event ${i + 1}`,
    date: `2025-06-${i + 1}`
}));

// In-memory RSVP storage
const rsvpList = [];

/**
 * @swagger
 * /api/rsvp:
 *   post:
 *     summary: RSVP for an event
 *     description: Allows users to RSVP for an event
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - eventId
 *               - userId
 *               - userName
 *             properties:
 *               eventId:
 *                 type: integer
 *               userId:
 *                 type: integer
 *               userName:
 *                 type: string
 *     responses:
 *       201:
 *         description: RSVP successful
 *       400:
 *         description: Invalid request
 */
app.post("/api/rsvp", (req, res) => {
    const { eventId, userId, userName } = req.body;

    if (!eventId || !userId || !userName) {
        return res.status(400).json({ error: "eventId, userId, and userName are required" });
    }

    const eventExists = mockEvents.some(event => event.id === eventId);
    if (!eventExists) {
        return res.status(404).json({ error: "Event not found" });
    }

    // Check if user has already RSVPed for the event
    const alreadyRSVPed = rsvpList.some(rsvp => rsvp.eventId === eventId && rsvp.userId === userId);
    if (alreadyRSVPed) {
        return res.status(400).json({ error: "User has already RSVPed for this event" });
    }

    // Add RSVP
    rsvpList.push({ eventId, userId, userName });
    res.status(201).json({ message: "RSVP successful", rsvp: { eventId, userId, userName } });
});

/**
 * @swagger
 * /api/rsvp/{eventId}:
 *   get:
 *     summary: Get RSVPs for an event
 *     description: Fetch all users who have RSVPed for a specific event
 *     parameters:
 *       - in: path
 *         name: eventId
 *         required: true
 *         description: The event ID
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: List of RSVPs
 *       404:
 *         description: No RSVPs found for this event
 */
app.get("/api/rsvp/:eventId", (req, res) => {
    const eventId = parseInt(req.params.eventId);
    const rsvps = rsvpList.filter(rsvp => rsvp.eventId === eventId);

    if (rsvps.length === 0) {
        return res.status(404).json({ error: "No RSVPs found for this event" });
    }

    res.json({ eventId, rsvps });
});

/**
 * @swagger
 * /api/rsvp/{eventId}/{userId}:
 *   delete:
 *     summary: Cancel an RSVP
 *     description: Allows a user to cancel their RSVP for an event
 *     parameters:
 *       - in: path
 *         name: eventId
 *         required: true
 *         description: The event ID
 *         schema:
 *           type: integer
 *       - in: path
 *         name: userId
 *         required: true
 *         description: The user ID
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: RSVP cancelled successfully
 *       404:
 *         description: RSVP not found
 */
app.delete("/api/rsvp/:eventId/:userId", (req, res) => {
    const eventId = parseInt(req.params.eventId);
    const userId = parseInt(req.params.userId);

    const index = rsvpList.findIndex(rsvp => rsvp.eventId === eventId && rsvp.userId === userId);
    if (index === -1) {
        return res.status(404).json({ error: "RSVP not found" });
    }

    rsvpList.splice(index, 1);
    res.json({ message: "RSVP cancelled successfully" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

console.log("Swagger docs available at http://localhost:5000/api-docs");
