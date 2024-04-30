import morgan from "morgan";
import app from "./app.js";
import cors from "cors";
import express from "express";

const frontUrl = process.env.ALLOWED_ORIGIN!;

app.use(morgan("dev"));
app.use(cors({ origin: [frontUrl] }));

app.use(express.json());
