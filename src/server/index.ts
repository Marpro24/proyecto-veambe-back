import morgan from "morgan";
import app from "./app.js";
import cors from "cors";
import express from "express";
import PingController from "../features/ping/controller/PingController.js";

const frontUrl = process.env.ALLOWED_ORIGIN!;

const pingController = new PingController();

app.use(morgan("dev"));
app.use(cors({ origin: [frontUrl] }));

app.use(express.json());
app.use("/", pingController.getPong);
