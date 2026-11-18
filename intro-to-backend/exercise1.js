import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello from exercise 1!");
});

app.get("/currentYear", (req, res) => {
  const year = new Date().getFullYear();
  res.json({ currentYear: year });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
