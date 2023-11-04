const express = require("express");
const mongoose = require("mongoose");
const route = require("./routes/route");
const cors = require("cors");

const app = express();
const PORT = 3500;

// CORS configuration
// app.use(
//   cors({
//     origin: "http://localhost:3000", // Replace with your frontend's URL
//     methods: "GET,HEAD,PUT,PATCH,POST,DELETE", // Add the HTTP methods you need
//   })
// );
app.use(cors())
// Parse JSON request bodies
app.use(express.json());

// Mount your routes
app.use("/api2", route);
app.use("/api", require("./routes/Create_user.js"));

// DB Connection
mongoose
  .connect("mongodb+srv://nishanthbhat18:meowmeow@cluster0.rgvqsc8.mongodb.net/CS_4B")
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => {
    console.error("DB Connection Error:", err);
  });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});