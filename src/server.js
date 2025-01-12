import express from "express";
import mongoose from "./db/mongoose.js";
import authRoutes from "./routes/auth.js";

const app = express();

app.use(express.json());
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
