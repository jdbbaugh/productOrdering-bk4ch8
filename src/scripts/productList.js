import productData from "./productData"
import product from "./product"
const productList = {
  buildProductList () {
    productData.getProductInfo()
    .then(productInfoArray => {
      productInfoArray.forEach(productObject => {
        product.buildProductHTML(productObject)
      })
      
    });
  },
};

export default productList