import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.json({
    msg: "in get method ./",
  });
});

app.listen(8080, () => console.log("server running......."));
