import { type NextFunction, type Request, type Response } from "express";
import chalk from "chalk/index.js";
import debugCreator from "debug";
import CustomError from "../../CustomError/CustomError.js";

const debug = debugCreator("veambe: middlewares: errors");

export const notFoundError = (
  _req: Request,
  _res: Response,
  next: NextFunction,
) => {
  const customError = new CustomError("Endpoint not found", 404);

  next(customError);
};

export const generalError = (
  error: CustomError,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  const statusCode = error.statusCode ?? 500;
  const privateMessage = error.privateMessage ?? error.message;

  debug(chalk.bgRedBright("Error: ", privateMessage));

  res.status(statusCode).json({ error: error.message });
};
