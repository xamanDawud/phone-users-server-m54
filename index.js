const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());

let users = [
  { id: 1, name: "Zaman", email: "zaman@gmail.com" },
  { id: 2, name: "Kaman", email: "kaman@gmail.com" },
  { id: 3, name: "Daman", email: "daman@gmail.com" },
];

app.get("/", (req, res) => {
  res.send("Data is coooooming soooon");
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.post("/users", (req, res) => {
  console.log("client data hitting");
  let newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);
  res.send(newUser);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
