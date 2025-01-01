import express from "express";
import { graphqlHTTP } from 'express-graphql';
import { dbConnection } from "./database/dbConnection.js";
import dotenv from "dotenv";
import messageRouter from "./router/messageRouter.js";
import reviewRouter from "./router/reviewRouter.js";
import chatbotRouter from "./router/chatbotRouter.js";
import userRouter from "./router/userRouter.js";
import packageRouter from "./router/packageRouter.js";
import { schema } from './graphql/schema.js'; 
import path from 'path';
import { fileURLToPath } from 'url';
import cors from "cors";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables
dotenv.config({ path: "./config/config.env" });

// Enable CORS for the frontend URL (or all origins for testing)
app.use(
  cors({
    origin: [process.env.FRONTEND_URL],  // Use your Netlify domain here
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// Allow preflight requests
app.options('*', cors());

// Serve images with CORS enabled
app.use('/images', cors(), express.static(path.join(__dirname, 'public/images')));

// Middleware for JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define routes
app.use("/api/v1/message", messageRouter);
app.use("/api/v1/reviews", reviewRouter);
app.use("/api/v1/chatbot", chatbotRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/packages", packageRouter);

// Set up the GraphQL route
app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true,  // Optional: Allows you to interact with GraphQL in the browser
}));

// Connect to the database
dbConnection();

export default app;
