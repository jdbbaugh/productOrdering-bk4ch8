import reviewList from "./reviewList"
import productList from "./productList"
import domComponent from "./domComponent";
const product = {
  buildProductHTML (obj) {
    // console.log("From Product",obj)
    const containerTarget = document.querySelector(".output");
    const productContainer = document.createElement("article");
    productContainer.setAttribute("id", "product-container");
    containerTarget.appendChild(productContainer);

    productContainer.appendChild(domComponent.createDomElement({
      elementType: "img",
      cssClass: `${obj.title}-img`,
      attributes: {
        src: obj.image,
      }
    }));
    productContainer.appendChild(domComponent.createDomElement({
      elementType: "h1",
      content: `REAL ${obj.title} (not scam)`,
      cssClass: `${obj.title}-title`
    }))
    productContainer.appendChild(domComponent.createDomElement({
      elementType: "h3",
      content: obj.price,
      cssClass: `${obj.title}-price`
    }))
    productContainer.appendChild(domComponent.createDomElement({
      elementType: "p",
      content: `Available: ${obj.quantity}`
    }))
    productContainer.appendChild(domComponent.createDomElement({
      elementType: "p",
      content: `${obj.description}`
    }))
  }
}
export default product