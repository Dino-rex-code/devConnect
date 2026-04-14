const express = require("express");

const app = express();

app.get("/user", (req, res) => {
  res.send({ name: "John", age: 30 });
});

app.post("/updateuser", (req, res) => {
  res.send("User created successfully!");
});

// Basically, "use" matches all HTTP methods (GET, POST, etc.) and all paths.
// So, it will match any request that comes to the server, regardless of the method or path.
// In this case, it will respond with "Hello new test URL routing!!" for any request that starts with "/test".
app.use("/test", (req, res) => {
  res.send("Hello new test URL routing!!");
});

app.use("/base", (req, res) => {
  res.send("This is added as one more URL routing!!");
});

// // Request handler
// app.use((req, res) => {
//   res.send("Hello, World!");
// });

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
