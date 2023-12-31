const express = require("express");
const mongoose = require("mongoose");
const route = require("./Router/route");
const cors = require("cors");

const app = express();
const PORT = 3000;

// CORS configuration
// app.use(
//   cors({
//     origin: "http://localhost:3000", // Replace with your frontend's URL
//     methods: "GET,HEAD,PUT,PATCH,POST,DELETE", // Add the HTTP methods you need
//   })
// );
app.use(cors(
  {
    origin:['https://make-a-ton-cittc-bo5q.vercel.app'],
    methods:["POST","GET","PUT","DELETE"],
    credentials:true
  }
))
// Parse JSON request bodies
app.use(express.json());

app.get('/',(req,res)=>{
  res.send("hello")
})

// Mount your routes
app.use("/api2/food", route);
app.use("/api", require("./Router/create_user.js"));

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