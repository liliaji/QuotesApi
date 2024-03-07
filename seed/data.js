import db from "../db/connection.js";
import Quote from "../models/Quote.js";
import quotesData from "./quotes.json" assert { type: "json" };
import chalk from "chalk";

const insertData = async () => {
  // Reset DB
  await db.dropDatabase();

  // Insert Data
  await Quote.create(quotesData);

  console.log(chalk.greenBright("Quotes created!"));

  // Close DB Connection
  await db.close();
};

insertData();