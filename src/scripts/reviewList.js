import reviewData from "./reviewData"
import review from "./review"

const reviewList = {
  buildReviewList () {
    let reviewSection = document.createElement("section");
    reviewSection.setAttribute("id", "review-container");
    reviewSection.textContent = "REVIEWS:"
    reviewData.getReviewData()
    .then(reviewArray => {
      reviewArray.forEach(reviewObject => {
        // console.log("Review List",reviewObject);
        
        reviewSection.appendChild(review.buildReview(reviewObject))


      })
      const finalAppend = document.getElementById("product-container");
      finalAppend.appendChild(reviewSection);
    });

  },
};

export default reviewList