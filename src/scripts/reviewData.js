const reviewData = {
  getReviewData() {
    return fetch("http://localhost:8088/review")
    .then(response => response.json());
  },
}

export default reviewData