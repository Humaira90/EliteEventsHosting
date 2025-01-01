import express from "express";
import { getReviews, postReview } from "../controller/reviewController.js";

const router = express.Router();

// Fetch all reviews
router.get("/", getReviews);

// Submit a new review
router.post("/", postReview);

export default router;
