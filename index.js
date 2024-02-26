import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import * as logger from "morgan";
import telegramBot from "node-telegram-bot-api";

dotenv.config();
const PORT = process.env.PORT;
const tokenAccess = process.env.TOKEN
const app = express();

app.use(cors());
app.use(logger());
app.use(express.json());

const bootstrap = () => {
  try {
    app.listen(PORT);
  } catch (error) {
    throw new Error(error);
  }
};

bootstrap();
