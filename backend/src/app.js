

const express = require("express");
const cors = require("cors");

const app = express();
const aiRoutes = require("./routes/ai.routes");

// CORS middleware – allow frontend at 5173 to connect
app.use(cors({
  origin: "https://ai-code-reviewer-frontend-ewbg.onrender.com", // explicitly allow your frontend's origin
  methods: ["GET", "POST"],
  credentials: true
}));

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello");
});

app.use("/ai", aiRoutes);

module.exports = app;
