import morgan from "morgan";
import app from "./app.js";
import cors from "cors";
import express from "express";
import PingController from "../features/ping/controller/PingController.js";
import { notFoundError } from "./middlewares/errors/errorsMiddlewares.js";

const pingController = new PingController();

app.use(morgan("dev"));

app.use(express.json());
app.use("/", pingController.getPong);

app.use(notFoundError);
