import { startServer } from "./server/app";

const port = process.env.PORT ?? 5000;

startServer(+port);
