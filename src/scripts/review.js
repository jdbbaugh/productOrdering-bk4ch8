import reviewList from "./reviewList"
import domComponent from "./domComponent"
const review = {
  buildReview (obj) {
    console.log("thishere",obj)
    let reviewContentsFragment = document.createDocumentFragment();
    reviewContentsFragment.appendChild(domComponent.createDomElement({
      elementType: "p",
      content: obj.review,
      cssClass: `product-id-${obj.productId}`
    }))
    console.log(reviewContentsFragment)
    return reviewContentsFragment;
  }

};
export default review