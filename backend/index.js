import express from 'express';
import cors from 'cors';
import NoteRoute from "./routes/NoteRoute.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(NoteRoute);

app.listen(5000, "0.0.0.0", () => console.log("Server connected on port 5000"));
