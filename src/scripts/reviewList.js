import reviewData from "./reviewData"
import review from "./review"

const reviewList = {
  buildReviewList () {
    reviewData.getReviewData()
    .then(reviewArray => {
      reviewArray.forEach(reviewObject => {
        console.log("Review List",reviewObject);
      })
      
    });
  },
};

export default reviewList