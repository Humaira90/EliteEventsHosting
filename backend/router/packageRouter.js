import express from "express";
import {
  getPackages,
  addPackage,
  deletePackage,
  updatePackage,
} from "../controller/packageController.js";

const packageRouter = express.Router();

// Using the getPackages controller
packageRouter.get("/", getPackages); 

packageRouter.post("/", addPackage);
packageRouter.delete("/:id", deletePackage);
packageRouter.put("/:id", updatePackage);

export default packageRouter;
