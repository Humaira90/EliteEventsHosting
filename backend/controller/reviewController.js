import Review from "../models/reviewModel.js";

// Fetch all reviews
export const getReviews = async (req, res) => {
  try {
    const reviews = await Review.find(); // Fetch reviews from the database
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch reviews", error });
  }
};

// Submit a new review
export const postReview = async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const review = new Review({ name, email, message });
    const savedReview = await review.save(); // Save review to the database
    res.status(201).json(savedReview);
  } catch (error) {
    res.status(500).json({ message: "Failed to submit review", error });
  }
};
