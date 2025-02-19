import express, { json } from "express";
import "dotenv/config";
import { getHome } from "./controllers/home.js";

const app = express();

app.get("/", getHome);

// create a student record
app.post("/students", createStudents);

// Read students data
app.get("/students", getStudents);

// Update student records
app.update("/students", updateStudent);

// Delete student records
app.delete("/students", deleteStudents);

app.listen(process.env.PORT, () => {
  console.log(`Sever is running on port ${process.env.PORT}`);
});
