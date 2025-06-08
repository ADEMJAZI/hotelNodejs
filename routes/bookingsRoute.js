const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking");

router.post("/", async (req, res) => {
  console.log("Request Body:", req.body);

  const { room, roomid, userid, fromdate, todate, totalamount, totaldays, paymentId, trysectionid } = req.body;
  const newBooking = new Booking({
    room,
    roomid,
    userid,
    fromdate,
    todate,
    totalamount,
    totaldays,
    paymentId,
    trysectionid,
    states: "booked",
  });

  try {
    await newBooking.save();
    res.status(200).send({ success: true });
} catch (error) {
    console.error("Error creating booking:", error);
    res.status(400).send({ success: false, message: error.message });
}
});
router.get("/getallbookings", async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.status(200).send(bookings);
  } catch (error) {
    console.error("Error fetching all bookings:", error);
    res.status(400).json({ error: "Failed to fetch bookings", details: error.message });
  }
});





module.exports = router;
