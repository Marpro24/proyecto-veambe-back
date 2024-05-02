import morgan from "morgan";
import express from "express";
import app from "./app.js";
import PingController from "../features/ping/controller/PingController.js";
import {
  generalError,
  notFoundError,
} from "./middlewares/errors/errorsMiddlewares.js";
import pingRouter from "../features/ping/router/pingRouter.js";

app.use(morgan("dev"));

app.use(express.json());
app.use("/", pingRouter);

app.use(notFoundError);
app.use(generalError);
