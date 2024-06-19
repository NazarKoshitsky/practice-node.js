import express from "express";
import cors from "cors";

import movies from "./movies.js";

const app = express();

app.use(cors());

app.get("/api/products", (req, res) => {
  res.json([]);
});

app.get("/api/movies", (req, res) => {
  res.json(movies);
});

app.use((req, res) => {
  res.status(404).json({
    status: 404,
    message: "Not Found ",
  });
});

app.listen(3000, () => console.log("Server running on 3000 PORT"));
