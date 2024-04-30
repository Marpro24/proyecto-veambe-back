import mongoose from "mongoose";
import createDebug from "debug";
import chalk from "chalk";

const debug = createDebug("veambe:database");

const connectToDatabase = async (mongoUrl: string) => {
  try {
    await mongoose.connect(mongoUrl);
    mongoose.set("debug", true);
    debug(chalk.greenBright("Connected to database"));
  } catch (error) {
    debug(chalk.redBright("Could not connect to database"));
  }
};

export default connectToDatabase;
