const express = require("express");
const router = express.Router();
const Room = require("../models/room"); // Make sure to import 'Room' correctly


// Updated route path to match the frontend
router.get("/getAllRooms", async (req, res) => {
   try {
     const rooms = await Room.find({});
     res.send(rooms);
   } catch (error) {
     res.status(400).json({ message: error });
   }
 });


 router.post('/getroombyid', async (req, res) => {
  const { roomid } = req.body; // Assuming you send roomid in the request body
  try {
    const room = await Room.findById(roomid); // Assuming you're using Mongoose
    if (!room) {
      return res.status(404).json({ message: 'Room not found' });
    }
    res.json(room);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

router.post("/addRoom", async (req, res) => {
  try {
    const newRoom = new Room(req.body);
    await newRoom.save();
    res.status(201).json({ message: "Room added successfully!", room: newRoom });
  } catch (error) {
    console.error("Error adding room:", error);
    res.status(400).json({ message: "Failed to add room", error });
  }
});
// Server-side route definition
router.delete('/rooms/:id', async (req, res) => {
  console.log('Received DELETE request for room ID:', req.params.id);
  try {
    const roomId = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(roomId)) {
      return res.status(400).json({ message: 'Invalid room ID format' });
    }

    const deletedRoom = await Room.findByIdAndDelete(roomId);
    if (!deletedRoom) {
      return res.status(404).json({ message: 'Room not found' });
    }

    res.status(200).json({ message: 'Room deleted successfully', data: deletedRoom });
  } catch (error) {
    console.error('Error deleting room:', error);
    res.status(500).json({ message: 'Server error', error });
  }
});

router.put('/rooms/:id', async (req, res) => {
  try {
    const roomId = req.params.id;
    const updatedRoom = await Room.findByIdAndUpdate(roomId, req.body, { new: true });

    if (!updatedRoom) {
      return res.status(404).json({ message: 'Room not found' });
    }

    res.status(200).json({ message: 'Room updated successfully', data: updatedRoom });
  } catch (error) {
    console.error('Error updating room:', error);
    res.status(500).json({ message: 'Server error', error });
  }
});





module.exports = router;


module.exports = router;
