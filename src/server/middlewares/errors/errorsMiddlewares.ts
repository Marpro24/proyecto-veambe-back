import { type NextFunction, type Request, type Response } from "express";
import CustomError from "../../CustomError/CustomError";

export const notFoundError = (
  _req: Request,
  _res: Response,
  next: NextFunction,
) => {
  const customError = new CustomError("Endpoint not found", 404);

  next(customError);
};
