import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import bookingRoutes from "./routes/bookingRoutes.js";

dotenv.config();
const app = express();
app.use(express.json());

connectDB();

app.get("/", (req, res) => {
  res.send("🎟 Synergia Event Booking API - MongoDB Version");
});

app.use("/api/bookings", bookingRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
