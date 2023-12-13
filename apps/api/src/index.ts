import express, { type Application } from "express";

const app: Application = express();

app.listen(3000, () => {
  console.log(`Server is Fire at http://localhost:${3000}`);
});
