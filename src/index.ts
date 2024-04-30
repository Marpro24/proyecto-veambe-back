import "dotenv/config";
import createDebug from "debug";
import chalk from "chalk";
import { startServer } from "./server/app.js";
import connectToDatabase from "./database/index.js";
import "./server/index.js";

const debug = createDebug("veambe:index");
const port = process.env.PORT ?? 5000;

if (!process.env.MONGODB_URL) {
  debug(chalk.redBright("Missing MONGODB connection string"));
  process.exit();
}

const mongoUrl = process.env.MONGODB_URL;

await connectToDatabase(mongoUrl);

startServer(+port);
