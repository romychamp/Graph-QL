import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./schema/schema.js";
import { connectDB } from "./config/db.js";

dotenv.config();
connectDB();
const app = express();

const port = process.env.PORT || 5000;
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development" ? true : false,
  })
);

app.listen(port, () => {
  console.log(`Server started on ${port}...`);
});
