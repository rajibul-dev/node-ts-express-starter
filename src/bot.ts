import express = require("express");
import dotenv = require("dotenv");
dotenv.config();

const app = express();

app.get("/", (_, res) => {
  res.send("✅ Server is healthy!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🌐 Server running on port ${PORT}`);
});
