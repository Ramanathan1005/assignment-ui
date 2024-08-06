import React from "react";
import UserImage from "../assets/images/userImage.png";
import "../scss/CustomerFeedback.scss";

const feedbacks = [
  {
    name: "Jenny Wilson",
    rating: 4,
    images: { UserImage },
    feedback:
      "The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies.",
  },
  {
    name: "Dianne Russell",
    rating: 5,
    feedback:
      "We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service.",
  },
  {
    name: "Devon Lane",
    rating: 4,
    feedback:
      "Normally wings are wings, but theirs are lean meaty and tender, and...",
  },
];
console.log(feedbacks, "feed");

const CustomerFeedback = () => {
  return (
    <div className="customer-feedback">
      <div className="feedBack-content">
        <h2>Customer's Feedback</h2>
        <div className="feedback-map-cards">
          {feedbacks.map((item, index) => (
            <div key={index} className="feedback-card">
              <div className="feedback-header">
                <div className="avatar-placeholder"></div>
                <h3>{item.name}</h3>
              </div>
              <div className="rating">
                {Array(item.rating)
                  .fill()
                  .map((_, i) => (
                    <span key={i}>⭐</span>
                  ))}
              </div>
              <p>{item.feedback}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerFeedback;
