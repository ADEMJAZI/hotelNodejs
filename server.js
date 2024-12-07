const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
const dbConfig = require('./db');
const roomRoute = require('./routes/RoutesRomme');
const usersRoute = require('./routes/usersRoute');
const bookingsRouts = require('./routes/bookingsRoute')
const bookingsRoutes = require('./routes/bookingsRoute');
// Middleware
app.use(cors()); // Handle CORS
app.use(express.json());

// Routes
app.use('/api/rooms', roomRoute);
app.use('/api/users', usersRoute);
app.use('/api/bookings', bookingsRouts);
app.use('/api/getallbookings', bookingsRoutes);
app.use('/api', roomRoute);


// Server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
