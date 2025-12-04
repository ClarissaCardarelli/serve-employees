import express from "express";
import cors from "cors";

const app = express();

app.use(cors({ origin: ["http://localhost:5173"] }));

const port = 3000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.get("/api/employees", (req, res) => {
  res.json({ results: [sampleEmployee] });
});

const sampleEmployee = {
  name: {
    first: "Claire",
    last: "Cardarelli",
  },
  email: "charlie.thompson@example.com",
  picture: {
    medium: "https://randomuser.me/api/portraits/med/men/40.jpg",
  },
};
