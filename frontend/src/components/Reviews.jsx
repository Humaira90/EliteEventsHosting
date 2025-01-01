import React, { useState, useEffect } from "react";
import "../App.css";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState("");

  // Fetch reviews from the backend API
  useEffect(() => {
    fetch("https://eliteeventsbackend.onrender.com/api/v1/reviews")
      .then((response) => response.json())
      .then((data) => setReviews(data))
      .catch((error) => console.error("Error fetching reviews:", error));
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewReview((prevReview) => ({
      ...prevReview,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!newReview.name || !newReview.email || !newReview.message) {
      setError("All fields are required");
      return;
    }

    try {
      const response = await fetch("https://eliteeventsbackend.onrender.com/api/v1/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newReview),
      });

      // Check if the response is OK before attempting to parse it
      if (!response.ok) {
        const errorMessage = await response.text(); // Get error message
        setError(errorMessage); // Display error message
        return;
      }

      const result = await response.json();

      setReviews([result, ...reviews]); // Prepend the new review to the list
      setNewReview({ name: "", email: "", message: "" });
      setError(""); // Clear any previous errors
    } catch (error) {
      setError("Error submitting review");
      console.error("Error:", error);
    }
  };

  // Scroll to the reviews section when the button is clicked
  const scrollToReviews = () => {
    const reviewsSection = document.getElementById("reviews");
    reviewsSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="reviews">
      <div className="review-section">
        <form onSubmit={handleSubmit} className="review-form">
          <h3>Leave a Review</h3>
          {error && <p className="error-message">{error}</p>}
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={newReview.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={newReview.email}
              onChange={handleChange}
              required
            />
          </div>
          <textarea
            name="message"
            rows={4}
            placeholder="Your Review"
            value={newReview.message}
            onChange={handleChange}
            required
          />
          <button type="submit">Submit Review</button>
        </form>

        {/* Display Reviews */}
        <div className="reviews-list">
          <h3>Reviews</h3>
          {reviews.length > 0 ? (
            reviews.map((review, index) => (
              <div key={index} className="review-item">
                <h4>{review.name}</h4>
                <p>{review.message}</p>
              </div>
            ))
          ) : (
            <p>No reviews yet. Be the first to leave a review!</p>
          )}
        </div>
      </div>

      {/* Floating button */}
      <button className="floating-btn" onClick={scrollToReviews}>
        Leave a Review
      </button>
    </section>
  );
};

export default Reviews;
