import express from "express";
import mongoose from "mongoose";
// import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import cors from "cors";

dotenv.config();

const app = express();

app.use(cors({
  origin: "http://localhost:5173",  // Your frontend address
  credentials: true,                // Allow cookies/sessions if used
}));
// will implement later for whitelisting ip address
// app.use(cors());

app.use(express.json());
console.log(process.env.MONGO_URI);
// DB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.error("❌ MongoDB Error:", err));

// Default route
app.get("/", (req, res) => {
  res.send("Backend is running...");
});

// ✅ Register auth routes
app.use("/api/auth", authRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
