const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const appsRouter = require("./routes/apps");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  res.set("Cache-Control", "no-cache, no-store, must-revalidate");
  next();
});

app.use("/api", appsRouter);

if (process.env.NODE_ENV === "production") {
  const publicPath = path.join(__dirname, "..", "dist", "public");
  app.use(express.static(publicPath));
  app.get("*", (req, res) => {
    res.sendFile(path.join(publicPath, "index.html"));
  });
}

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
