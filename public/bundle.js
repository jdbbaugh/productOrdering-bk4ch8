(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _nav = _interopRequireDefault(require("./nav"));

var _review = _interopRequireDefault(require("./review"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const domComponent = {
  createDomElement({
    elementType,
    content = null,
    cssClass = "",
    attributes = {}
  }) {
    const element = document.createElement(elementType);
    element.textContent = content;

    if (cssClass) {
      element.classList.add(cssClass);
    }

    for (let key in attributes) {
      element.setAttribute(key, attributes[key]);
    }

    return element;
  }

};
var _default = domComponent;
exports.default = _default;

},{"./nav":3,"./review":7}],2:[function(require,module,exports){
"use strict";

var _nav = _interopRequireDefault(require("./nav"));

var _productList = _interopRequireDefault(require("./productList"));

var _reviewList = _interopRequireDefault(require("./reviewList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_nav.default.buildNav();

_productList.default.buildProductList();

_reviewList.default.buildReviewList();

},{"./nav":3,"./productList":6,"./reviewList":9}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _domComponent = _interopRequireDefault(require("./domComponent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const nav = {
  buildNav() {
    const navContainerParent = document.querySelector(".output");
    const navLinks = ["Categories", "Orders", "BETSY", "", "LogOut"];
    navContainerParent.appendChild(_domComponent.default.createDomElement({
      elementType: "nav",
      cssClass: "nav-container",
      attributes: {
        id: "nav-parent"
      }
    }));
    navLinks.forEach(navOption => {
      document.getElementById("nav-parent").appendChild(_domComponent.default.createDomElement({
        elementType: "p",
        content: navOption,
        cssClass: `nav-${navOption}`
      }));
    });
  }

};
var _default = nav;
exports.default = _default;

},{"./domComponent":1}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reviewList = _interopRequireDefault(require("./reviewList"));

var _productList = _interopRequireDefault(require("./productList"));

var _domComponent = _interopRequireDefault(require("./domComponent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const product = {
  buildProductHTML(obj) {
    // console.log("From Product",obj)
    const containerTarget = document.querySelector(".output");
    const productContainer = document.createElement("article");
    productContainer.setAttribute("id", "product-container");
    containerTarget.appendChild(productContainer);
    productContainer.appendChild(_domComponent.default.createDomElement({
      elementType: "img",
      cssClass: `${obj.title}-img`,
      attributes: {
        src: obj.image
      }
    }));
    productContainer.appendChild(_domComponent.default.createDomElement({
      elementType: "h1",
      content: `REAL ${obj.title} (not scam)`,
      cssClass: `${obj.title}-title`
    }));
    productContainer.appendChild(_domComponent.default.createDomElement({
      elementType: "h3",
      content: obj.price,
      cssClass: `${obj.title}-price`
    }));
    productContainer.appendChild(_domComponent.default.createDomElement({
      elementType: "p",
      content: `Available: ${obj.quantity}`
    }));
    productContainer.appendChild(_domComponent.default.createDomElement({
      elementType: "p",
      content: `${obj.description}`
    }));
  }

};
var _default = product;
exports.default = _default;

},{"./domComponent":1,"./productList":6,"./reviewList":9}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const productData = {
  getProductInfo() {
    return fetch("http://localhost:8088/product").then(response => response.json());
  }

};
var _default = productData;
exports.default = _default;

},{}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _productData = _interopRequireDefault(require("./productData"));

var _product = _interopRequireDefault(require("./product"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const productList = {
  buildProductList() {
    _productData.default.getProductInfo().then(productInfoArray => {
      productInfoArray.forEach(productObject => {
        _product.default.buildProductHTML(productObject);
      });
    });
  }

};
var _default = productList;
exports.default = _default;

},{"./product":4,"./productData":5}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reviewList = _interopRequireDefault(require("./reviewList"));

var _domComponent = _interopRequireDefault(require("./domComponent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const review = {
  buildReview(obj) {
    console.log("thishere", obj);
    let reviewContentsFragment = document.createDocumentFragment();
    reviewContentsFragment.appendChild(_domComponent.default.createDomElement({
      elementType: "p",
      content: obj.review,
      cssClass: `product-id-${obj.productId}`
    }));
    console.log(reviewContentsFragment);
    return reviewContentsFragment;
  }

};
var _default = review;
exports.default = _default;

},{"./domComponent":1,"./reviewList":9}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const reviewData = {
  getReviewData() {
    return fetch("http://localhost:8088/review").then(response => response.json());
  }

};
var _default = reviewData;
exports.default = _default;

},{}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reviewData = _interopRequireDefault(require("./reviewData"));

var _review = _interopRequireDefault(require("./review"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const reviewList = {
  buildReviewList() {
    let reviewSection = document.createElement("section");
    reviewSection.setAttribute("id", "review-container");
    reviewSection.textContent = "REVIEWS:";

    _reviewData.default.getReviewData().then(reviewArray => {
      reviewArray.forEach(reviewObject => {
        // console.log("Review List",reviewObject);
        reviewSection.appendChild(_review.default.buildReview(reviewObject));
      });
      const finalAppend = document.getElementById("product-container");
      finalAppend.appendChild(reviewSection);
    });
  }

};
var _default = reviewList;
exports.default = _default;

},{"./review":7,"./reviewData":8}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL2RvbUNvbXBvbmVudC5qcyIsIi4uL3NjcmlwdHMvbWFpbi5qcyIsIi4uL3NjcmlwdHMvbmF2LmpzIiwiLi4vc2NyaXB0cy9wcm9kdWN0LmpzIiwiLi4vc2NyaXB0cy9wcm9kdWN0RGF0YS5qcyIsIi4uL3NjcmlwdHMvcHJvZHVjdExpc3QuanMiLCIuLi9zY3JpcHRzL3Jldmlldy5qcyIsIi4uL3NjcmlwdHMvcmV2aWV3RGF0YS5qcyIsIi4uL3NjcmlwdHMvcmV2aWV3TGlzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUNBQTs7QUFDQTs7OztBQUNBLE1BQU0sWUFBWSxHQUFHO0FBQ25CLEVBQUEsZ0JBQWdCLENBQUM7QUFBRSxJQUFBLFdBQUY7QUFBZSxJQUFBLE9BQU8sR0FBRyxJQUF6QjtBQUErQixJQUFBLFFBQVEsR0FBRyxFQUExQztBQUE4QyxJQUFBLFVBQVUsR0FBRztBQUEzRCxHQUFELEVBQWtFO0FBQ2hGLFVBQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLFdBQXZCLENBQWhCO0FBQ0EsSUFBQSxPQUFPLENBQUMsV0FBUixHQUFzQixPQUF0Qjs7QUFFQSxRQUFJLFFBQUosRUFBYztBQUNaLE1BQUEsT0FBTyxDQUFDLFNBQVIsQ0FBa0IsR0FBbEIsQ0FBc0IsUUFBdEI7QUFDRDs7QUFFRCxTQUFLLElBQUksR0FBVCxJQUFnQixVQUFoQixFQUE0QjtBQUMxQixNQUFBLE9BQU8sQ0FBQyxZQUFSLENBQXFCLEdBQXJCLEVBQTBCLFVBQVUsQ0FBQyxHQUFELENBQXBDO0FBQ0Q7O0FBQ0QsV0FBTyxPQUFQO0FBQ0Q7O0FBYmtCLENBQXJCO2VBZ0JlLFk7Ozs7OztBQ2xCZjs7QUFDQTs7QUFDQTs7OztBQUVBLGFBQUksUUFBSjs7QUFDQSxxQkFBWSxnQkFBWjs7QUFDQSxvQkFBVyxlQUFYOzs7Ozs7Ozs7O0FDTkE7Ozs7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QUFuQjtlQU9lLFU7Ozs7Ozs7Ozs7O0FDUGY7O0FBQ0E7Ozs7QUFFQSxNQUFNLFVBQVUsR0FBRztBQUNqQixFQUFBLGVBQWUsR0FBSTtBQUNqQixRQUFJLGFBQWEsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixTQUF2QixDQUFwQjtBQUNBLElBQUEsYUFBYSxDQUFDLFlBQWQsQ0FBMkIsSUFBM0IsRUFBaUMsa0JBQWpDO0FBQ0EsSUFBQSxhQUFhLENBQUMsV0FBZCxHQUE0QixVQUE1Qjs7QUFDQSx3QkFBVyxhQUFYLEdBQ0MsSUFERCxDQUNNLFdBQVcsSUFBSTtBQUNuQixNQUFBLFdBQVcsQ0FBQyxPQUFaLENBQW9CLFlBQVksSUFBSTtBQUNsQztBQUVBLFFBQUEsYUFBYSxDQUFDLFdBQWQsQ0FBMEIsZ0JBQU8sV0FBUCxDQUFtQixZQUFuQixDQUExQjtBQUdELE9BTkQ7QUFPQSxZQUFNLFdBQVcsR0FBRyxRQUFRLENBQUMsY0FBVCxDQUF3QixtQkFBeEIsQ0FBcEI7QUFDQSxNQUFBLFdBQVcsQ0FBQyxXQUFaLENBQXdCLGFBQXhCO0FBQ0QsS0FYRDtBQWFEOztBQWxCZ0IsQ0FBbkI7ZUFxQmUsVSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImltcG9ydCBuYXYgZnJvbSBcIi4vbmF2XCJcbmltcG9ydCByZXZpZXcgZnJvbSBcIi4vcmV2aWV3XCJcbmNvbnN0IGRvbUNvbXBvbmVudCA9IHtcbiAgY3JlYXRlRG9tRWxlbWVudCh7IGVsZW1lbnRUeXBlLCBjb250ZW50ID0gbnVsbCwgY3NzQ2xhc3MgPSBcIlwiLCBhdHRyaWJ1dGVzID0ge30gfSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnRUeXBlKTtcbiAgICBlbGVtZW50LnRleHRDb250ZW50ID0gY29udGVudDtcbiAgICBcbiAgICBpZiAoY3NzQ2xhc3MpIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjc3NDbGFzcyk7XG4gICAgfVxuXG4gICAgZm9yIChsZXQga2V5IGluIGF0dHJpYnV0ZXMpIHtcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgICB9XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBkb21Db21wb25lbnQiLCJpbXBvcnQgbmF2IGZyb20gXCIuL25hdlwiXG5pbXBvcnQgcHJvZHVjdExpc3QgZnJvbSBcIi4vcHJvZHVjdExpc3RcIlxuaW1wb3J0IHJldmlld0xpc3QgZnJvbSBcIi4vcmV2aWV3TGlzdFwiO1xuXG5uYXYuYnVpbGROYXYoKTtcbnByb2R1Y3RMaXN0LmJ1aWxkUHJvZHVjdExpc3QoKTtcbnJldmlld0xpc3QuYnVpbGRSZXZpZXdMaXN0KCk7IiwiaW1wb3J0IGRvbUNvbXBvbmVudCBmcm9tIFwiLi9kb21Db21wb25lbnRcIlxuY29uc3QgbmF2ID0ge1xuICBidWlsZE5hdiAoKSB7XG4gICAgY29uc3QgbmF2Q29udGFpbmVyUGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdXRwdXRcIik7XG4gICAgY29uc3QgbmF2TGlua3MgPSBbXCJDYXRlZ29yaWVzXCIsIFwiT3JkZXJzXCIsIFwiQkVUU1lcIiwgXCJcIixcIkxvZ091dFwiXTtcbiAgICBuYXZDb250YWluZXJQYXJlbnQuYXBwZW5kQ2hpbGQoZG9tQ29tcG9uZW50LmNyZWF0ZURvbUVsZW1lbnQoe1xuICAgICAgZWxlbWVudFR5cGU6IFwibmF2XCIsXG4gICAgICBjc3NDbGFzczogXCJuYXYtY29udGFpbmVyXCIsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIGlkOiBcIm5hdi1wYXJlbnRcIlxuICAgICAgfSxcbiAgICB9KSk7XG4gICAgbmF2TGlua3MuZm9yRWFjaChuYXZPcHRpb24gPT4ge1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXYtcGFyZW50XCIpLmFwcGVuZENoaWxkKGRvbUNvbXBvbmVudC5jcmVhdGVEb21FbGVtZW50KHtcbiAgICAgICAgZWxlbWVudFR5cGU6IFwicFwiLFxuICAgICAgICBjb250ZW50OiBuYXZPcHRpb24sXG4gICAgICAgIGNzc0NsYXNzOiBgbmF2LSR7bmF2T3B0aW9ufWBcbiAgICAgIH0pKVxuICAgICAgXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuYXYiLCJpbXBvcnQgcmV2aWV3TGlzdCBmcm9tIFwiLi9yZXZpZXdMaXN0XCJcbmltcG9ydCBwcm9kdWN0TGlzdCBmcm9tIFwiLi9wcm9kdWN0TGlzdFwiXG5pbXBvcnQgZG9tQ29tcG9uZW50IGZyb20gXCIuL2RvbUNvbXBvbmVudFwiO1xuY29uc3QgcHJvZHVjdCA9IHtcbiAgYnVpbGRQcm9kdWN0SFRNTCAob2JqKSB7XG4gICAgLy8gY29uc29sZS5sb2coXCJGcm9tIFByb2R1Y3RcIixvYmopXG4gICAgY29uc3QgY29udGFpbmVyVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdXRwdXRcIik7XG4gICAgY29uc3QgcHJvZHVjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhcnRpY2xlXCIpO1xuICAgIHByb2R1Y3RDb250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcm9kdWN0LWNvbnRhaW5lclwiKTtcbiAgICBjb250YWluZXJUYXJnZXQuYXBwZW5kQ2hpbGQocHJvZHVjdENvbnRhaW5lcik7XG5cbiAgICBwcm9kdWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGRvbUNvbXBvbmVudC5jcmVhdGVEb21FbGVtZW50KHtcbiAgICAgIGVsZW1lbnRUeXBlOiBcImltZ1wiLFxuICAgICAgY3NzQ2xhc3M6IGAke29iai50aXRsZX0taW1nYCxcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgc3JjOiBvYmouaW1hZ2UsXG4gICAgICB9XG4gICAgfSkpO1xuICAgIHByb2R1Y3RDb250YWluZXIuYXBwZW5kQ2hpbGQoZG9tQ29tcG9uZW50LmNyZWF0ZURvbUVsZW1lbnQoe1xuICAgICAgZWxlbWVudFR5cGU6IFwiaDFcIixcbiAgICAgIGNvbnRlbnQ6IGBSRUFMICR7b2JqLnRpdGxlfSAobm90IHNjYW0pYCxcbiAgICAgIGNzc0NsYXNzOiBgJHtvYmoudGl0bGV9LXRpdGxlYFxuICAgIH0pKVxuICAgIHByb2R1Y3RDb250YWluZXIuYXBwZW5kQ2hpbGQoZG9tQ29tcG9uZW50LmNyZWF0ZURvbUVsZW1lbnQoe1xuICAgICAgZWxlbWVudFR5cGU6IFwiaDNcIixcbiAgICAgIGNvbnRlbnQ6IG9iai5wcmljZSxcbiAgICAgIGNzc0NsYXNzOiBgJHtvYmoudGl0bGV9LXByaWNlYFxuICAgIH0pKVxuICAgIHByb2R1Y3RDb250YWluZXIuYXBwZW5kQ2hpbGQoZG9tQ29tcG9uZW50LmNyZWF0ZURvbUVsZW1lbnQoe1xuICAgICAgZWxlbWVudFR5cGU6IFwicFwiLFxuICAgICAgY29udGVudDogYEF2YWlsYWJsZTogJHtvYmoucXVhbnRpdHl9YFxuICAgIH0pKVxuICAgIHByb2R1Y3RDb250YWluZXIuYXBwZW5kQ2hpbGQoZG9tQ29tcG9uZW50LmNyZWF0ZURvbUVsZW1lbnQoe1xuICAgICAgZWxlbWVudFR5cGU6IFwicFwiLFxuICAgICAgY29udGVudDogYCR7b2JqLmRlc2NyaXB0aW9ufWBcbiAgICB9KSlcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgcHJvZHVjdCIsIlxuY29uc3QgcHJvZHVjdERhdGEgPSB7XG4gIGdldFByb2R1Y3RJbmZvKCkge1xuICAgIHJldHVybiBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4OC9wcm9kdWN0XCIpXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKTtcbiAgfSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgcHJvZHVjdERhdGEiLCJpbXBvcnQgcHJvZHVjdERhdGEgZnJvbSBcIi4vcHJvZHVjdERhdGFcIlxuaW1wb3J0IHByb2R1Y3QgZnJvbSBcIi4vcHJvZHVjdFwiXG5jb25zdCBwcm9kdWN0TGlzdCA9IHtcbiAgYnVpbGRQcm9kdWN0TGlzdCAoKSB7XG4gICAgcHJvZHVjdERhdGEuZ2V0UHJvZHVjdEluZm8oKVxuICAgIC50aGVuKHByb2R1Y3RJbmZvQXJyYXkgPT4ge1xuICAgICAgcHJvZHVjdEluZm9BcnJheS5mb3JFYWNoKHByb2R1Y3RPYmplY3QgPT4ge1xuICAgICAgICBwcm9kdWN0LmJ1aWxkUHJvZHVjdEhUTUwocHJvZHVjdE9iamVjdClcbiAgICAgIH0pXG4gICAgICBcbiAgICB9KTtcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHByb2R1Y3RMaXN0IiwiaW1wb3J0IHJldmlld0xpc3QgZnJvbSBcIi4vcmV2aWV3TGlzdFwiXG5pbXBvcnQgZG9tQ29tcG9uZW50IGZyb20gXCIuL2RvbUNvbXBvbmVudFwiXG5jb25zdCByZXZpZXcgPSB7XG4gIGJ1aWxkUmV2aWV3IChvYmopIHtcbiAgICBjb25zb2xlLmxvZyhcInRoaXNoZXJlXCIsb2JqKVxuICAgIGxldCByZXZpZXdDb250ZW50c0ZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgIHJldmlld0NvbnRlbnRzRnJhZ21lbnQuYXBwZW5kQ2hpbGQoZG9tQ29tcG9uZW50LmNyZWF0ZURvbUVsZW1lbnQoe1xuICAgICAgZWxlbWVudFR5cGU6IFwicFwiLFxuICAgICAgY29udGVudDogb2JqLnJldmlldyxcbiAgICAgIGNzc0NsYXNzOiBgcHJvZHVjdC1pZC0ke29iai5wcm9kdWN0SWR9YFxuICAgIH0pKVxuICAgIGNvbnNvbGUubG9nKHJldmlld0NvbnRlbnRzRnJhZ21lbnQpXG4gICAgcmV0dXJuIHJldmlld0NvbnRlbnRzRnJhZ21lbnQ7XG4gIH1cblxufTtcbmV4cG9ydCBkZWZhdWx0IHJldmlldyIsImNvbnN0IHJldmlld0RhdGEgPSB7XG4gIGdldFJldmlld0RhdGEoKSB7XG4gICAgcmV0dXJuIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo4MDg4L3Jldmlld1wiKVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSk7XG4gIH0sXG59XG5cbmV4cG9ydCBkZWZhdWx0IHJldmlld0RhdGEiLCJpbXBvcnQgcmV2aWV3RGF0YSBmcm9tIFwiLi9yZXZpZXdEYXRhXCJcbmltcG9ydCByZXZpZXcgZnJvbSBcIi4vcmV2aWV3XCJcblxuY29uc3QgcmV2aWV3TGlzdCA9IHtcbiAgYnVpbGRSZXZpZXdMaXN0ICgpIHtcbiAgICBsZXQgcmV2aWV3U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICAgIHJldmlld1NlY3Rpb24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJyZXZpZXctY29udGFpbmVyXCIpO1xuICAgIHJldmlld1NlY3Rpb24udGV4dENvbnRlbnQgPSBcIlJFVklFV1M6XCJcbiAgICByZXZpZXdEYXRhLmdldFJldmlld0RhdGEoKVxuICAgIC50aGVuKHJldmlld0FycmF5ID0+IHtcbiAgICAgIHJldmlld0FycmF5LmZvckVhY2gocmV2aWV3T2JqZWN0ID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJSZXZpZXcgTGlzdFwiLHJldmlld09iamVjdCk7XG4gICAgICAgIFxuICAgICAgICByZXZpZXdTZWN0aW9uLmFwcGVuZENoaWxkKHJldmlldy5idWlsZFJldmlldyhyZXZpZXdPYmplY3QpKVxuXG5cbiAgICAgIH0pXG4gICAgICBjb25zdCBmaW5hbEFwcGVuZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvZHVjdC1jb250YWluZXJcIik7XG4gICAgICBmaW5hbEFwcGVuZC5hcHBlbmRDaGlsZChyZXZpZXdTZWN0aW9uKTtcbiAgICB9KTtcblxuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgcmV2aWV3TGlzdCJdfQ==
