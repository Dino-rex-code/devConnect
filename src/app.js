const express = require("express");

const app = express();

app.use("/test", (req, res) => {
  res.send("Hello new test URL routing!!");
});

// app.use("/base", (req, res) => {
//   res.send("This is added as one more URL routing!!");
// });

// // Request handler
// app.use((req, res) => {
//   res.send("Hello, World!");
// });

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
