(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _nav = _interopRequireDefault(require("./nav"));

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

},{"./nav":3}],2:[function(require,module,exports){
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
const review = {};
var _default = review;
exports.default = _default;

},{}],8:[function(require,module,exports){
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
    _reviewData.default.getReviewData().then(reviewArray => {
      reviewArray.forEach(reviewObject => {
        console.log("Review List", reviewObject);
      });
    });
  }

};
var _default = reviewList;
exports.default = _default;

},{"./review":7,"./reviewData":8}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL2RvbUNvbXBvbmVudC5qcyIsIi4uL3NjcmlwdHMvbWFpbi5qcyIsIi4uL3NjcmlwdHMvbmF2LmpzIiwiLi4vc2NyaXB0cy9wcm9kdWN0LmpzIiwiLi4vc2NyaXB0cy9wcm9kdWN0RGF0YS5qcyIsIi4uL3NjcmlwdHMvcHJvZHVjdExpc3QuanMiLCIuLi9zY3JpcHRzL3Jldmlldy5qcyIsIi4uL3NjcmlwdHMvcmV2aWV3RGF0YS5qcyIsIi4uL3NjcmlwdHMvcmV2aWV3TGlzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUNBQTs7OztBQUNBLE1BQU0sWUFBWSxHQUFHO0FBQ25CLEVBQUEsZ0JBQWdCLENBQUM7QUFBRSxJQUFBLFdBQUY7QUFBZSxJQUFBLE9BQU8sR0FBRyxJQUF6QjtBQUErQixJQUFBLFFBQVEsR0FBRyxFQUExQztBQUE4QyxJQUFBLFVBQVUsR0FBRztBQUEzRCxHQUFELEVBQWtFO0FBQ2hGLFVBQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLFdBQXZCLENBQWhCO0FBQ0EsSUFBQSxPQUFPLENBQUMsV0FBUixHQUFzQixPQUF0Qjs7QUFFQSxRQUFJLFFBQUosRUFBYztBQUNaLE1BQUEsT0FBTyxDQUFDLFNBQVIsQ0FBa0IsR0FBbEIsQ0FBc0IsUUFBdEI7QUFDRDs7QUFFRCxTQUFLLElBQUksR0FBVCxJQUFnQixVQUFoQixFQUE0QjtBQUMxQixNQUFBLE9BQU8sQ0FBQyxZQUFSLENBQXFCLEdBQXJCLEVBQTBCLFVBQVUsQ0FBQyxHQUFELENBQXBDO0FBQ0Q7O0FBQ0QsV0FBTyxPQUFQO0FBQ0Q7O0FBYmtCLENBQXJCO2VBZ0JlLFk7Ozs7OztBQ2pCZjs7QUFDQTs7QUFDQTs7OztBQUVBLGFBQUksUUFBSjs7QUFDQSxxQkFBWSxnQkFBWjs7QUFDQSxvQkFBVyxlQUFYOzs7Ozs7Ozs7O0FDTkE7Ozs7QUFDQSxN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LFdBQU8sS0FBSyxDQUFDLCtCQUFELENBQUwsQ0FDTixJQURNLENBQ0QsUUFBUSxJQUFJLFFBQVEsQ0FBQyxJQUFULEVBRFgsQ0FBUDtBQUVEOztBQUppQixDQUFwQjtlQU9lLFc7Ozs7Ozs7Ozs7O0FDUmY7O0FBQ0E7Ozs7QUFDQSxNQUFNLFdBQVcsR0FBRztBQUNsQixFQUFBLGdCQUFnQixHQUFJO0FBQ2xCLHlCQUFZLGNBQVosR0FDQyxJQURELENBQ00sZ0JBQWdCLElBQUk7QUFDeEIsTUFBQSxnQkFBZ0IsQ0FBQyxPQUFqQixDQUF5QixhQUFhLElBQUk7QUFDeEMseUJBQVEsZ0JBQVIsQ0FBeUIsYUFBekI7QUFDRCxPQUZEO0FBSUQsS0FORDtBQU9EOztBQVRpQixDQUFwQjtlQVllLFc7Ozs7Ozs7Ozs7QUNkZixNQUFNLE1BQU0sR0FBRyxFQUFmO2VBR2UsTTs7Ozs7Ozs7OztBQ0hmLE1BQU0sVUFBVSxHQUFHO0FBQ2pCLEVBQUEsYUFBYSxHQUFHO0FBQ2QsV0FBTyxLQUFLLENBQUMsOEJBQUQsQ0FBTCxDQUNOLElBRE0sQ0FDRCxRQUFRLElBQUksUUFBUSxDQUFDLElBQVQsRUFEWCxDQUFQO0FBRUQ7O0FBSmdCLENBQW5CO2VBT2UsVTs7Ozs7Ozs7Ozs7QUNQZjs7QUFDQTs7OztBQUVBLE1BQU0sVUFBVSxHQUFHO0FBQ2pCLEVBQUEsZUFBZSxHQUFJO0FBQ2pCLHdCQUFXLGFBQVgsR0FDQyxJQURELENBQ00sV0FBVyxJQUFJO0FBQ25CLE1BQUEsV0FBVyxDQUFDLE9BQVosQ0FBb0IsWUFBWSxJQUFJO0FBQ2xDLFFBQUEsT0FBTyxDQUFDLEdBQVIsQ0FBWSxhQUFaLEVBQTBCLFlBQTFCO0FBQ0QsT0FGRDtBQUlELEtBTkQ7QUFPRDs7QUFUZ0IsQ0FBbkI7ZUFZZSxVIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiaW1wb3J0IG5hdiBmcm9tIFwiLi9uYXZcIlxuY29uc3QgZG9tQ29tcG9uZW50ID0ge1xuICBjcmVhdGVEb21FbGVtZW50KHsgZWxlbWVudFR5cGUsIGNvbnRlbnQgPSBudWxsLCBjc3NDbGFzcyA9IFwiXCIsIGF0dHJpYnV0ZXMgPSB7fSB9KSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudFR5cGUpO1xuICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBjb250ZW50O1xuICAgIFxuICAgIGlmIChjc3NDbGFzcykge1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNzc0NsYXNzKTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBrZXkgaW4gYXR0cmlidXRlcykge1xuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICAgIH1cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUNvbXBvbmVudCIsImltcG9ydCBuYXYgZnJvbSBcIi4vbmF2XCJcbmltcG9ydCBwcm9kdWN0TGlzdCBmcm9tIFwiLi9wcm9kdWN0TGlzdFwiXG5pbXBvcnQgcmV2aWV3TGlzdCBmcm9tIFwiLi9yZXZpZXdMaXN0XCI7XG5cbm5hdi5idWlsZE5hdigpO1xucHJvZHVjdExpc3QuYnVpbGRQcm9kdWN0TGlzdCgpO1xucmV2aWV3TGlzdC5idWlsZFJldmlld0xpc3QoKTsiLCJpbXBvcnQgZG9tQ29tcG9uZW50IGZyb20gXCIuL2RvbUNvbXBvbmVudFwiXG5jb25zdCBuYXYgPSB7XG4gIGJ1aWxkTmF2ICgpIHtcbiAgICBjb25zdCBuYXZDb250YWluZXJQYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm91dHB1dFwiKTtcbiAgICBjb25zdCBuYXZMaW5rcyA9IFtcIkNhdGVnb3JpZXNcIiwgXCJPcmRlcnNcIiwgXCJCRVRTWVwiLCBcIlwiLFwiTG9nT3V0XCJdO1xuICAgIG5hdkNvbnRhaW5lclBhcmVudC5hcHBlbmRDaGlsZChkb21Db21wb25lbnQuY3JlYXRlRG9tRWxlbWVudCh7XG4gICAgICBlbGVtZW50VHlwZTogXCJuYXZcIixcbiAgICAgIGNzc0NsYXNzOiBcIm5hdi1jb250YWluZXJcIixcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgaWQ6IFwibmF2LXBhcmVudFwiXG4gICAgICB9LFxuICAgIH0pKTtcbiAgICBuYXZMaW5rcy5mb3JFYWNoKG5hdk9wdGlvbiA9PiB7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdi1wYXJlbnRcIikuYXBwZW5kQ2hpbGQoZG9tQ29tcG9uZW50LmNyZWF0ZURvbUVsZW1lbnQoe1xuICAgICAgICBlbGVtZW50VHlwZTogXCJwXCIsXG4gICAgICAgIGNvbnRlbnQ6IG5hdk9wdGlvbixcbiAgICAgICAgY3NzQ2xhc3M6IGBuYXYtJHtuYXZPcHRpb259YFxuICAgICAgfSkpXG4gICAgICBcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5hdiIsImltcG9ydCByZXZpZXdMaXN0IGZyb20gXCIuL3Jldmlld0xpc3RcIlxuaW1wb3J0IHByb2R1Y3RMaXN0IGZyb20gXCIuL3Byb2R1Y3RMaXN0XCJcbmltcG9ydCBkb21Db21wb25lbnQgZnJvbSBcIi4vZG9tQ29tcG9uZW50XCI7XG5jb25zdCBwcm9kdWN0ID0ge1xuICBidWlsZFByb2R1Y3RIVE1MIChvYmopIHtcbiAgICAvLyBjb25zb2xlLmxvZyhcIkZyb20gUHJvZHVjdFwiLG9iailcbiAgICBjb25zdCBjb250YWluZXJUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm91dHB1dFwiKTtcbiAgICBjb25zdCBwcm9kdWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFydGljbGVcIik7XG4gICAgcHJvZHVjdENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByb2R1Y3QtY29udGFpbmVyXCIpO1xuICAgIGNvbnRhaW5lclRhcmdldC5hcHBlbmRDaGlsZChwcm9kdWN0Q29udGFpbmVyKTtcblxuICAgIHByb2R1Y3RDb250YWluZXIuYXBwZW5kQ2hpbGQoZG9tQ29tcG9uZW50LmNyZWF0ZURvbUVsZW1lbnQoe1xuICAgICAgZWxlbWVudFR5cGU6IFwiaW1nXCIsXG4gICAgICBjc3NDbGFzczogYCR7b2JqLnRpdGxlfS1pbWdgLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBzcmM6IG9iai5pbWFnZSxcbiAgICAgIH1cbiAgICB9KSk7XG4gICAgcHJvZHVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChkb21Db21wb25lbnQuY3JlYXRlRG9tRWxlbWVudCh7XG4gICAgICBlbGVtZW50VHlwZTogXCJoMVwiLFxuICAgICAgY29udGVudDogYFJFQUwgJHtvYmoudGl0bGV9IChub3Qgc2NhbSlgLFxuICAgICAgY3NzQ2xhc3M6IGAke29iai50aXRsZX0tdGl0bGVgXG4gICAgfSkpXG4gICAgcHJvZHVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChkb21Db21wb25lbnQuY3JlYXRlRG9tRWxlbWVudCh7XG4gICAgICBlbGVtZW50VHlwZTogXCJoM1wiLFxuICAgICAgY29udGVudDogb2JqLnByaWNlLFxuICAgICAgY3NzQ2xhc3M6IGAke29iai50aXRsZX0tcHJpY2VgXG4gICAgfSkpXG4gICAgcHJvZHVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChkb21Db21wb25lbnQuY3JlYXRlRG9tRWxlbWVudCh7XG4gICAgICBlbGVtZW50VHlwZTogXCJwXCIsXG4gICAgICBjb250ZW50OiBgQXZhaWxhYmxlOiAke29iai5xdWFudGl0eX1gXG4gICAgfSkpXG4gICAgcHJvZHVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChkb21Db21wb25lbnQuY3JlYXRlRG9tRWxlbWVudCh7XG4gICAgICBlbGVtZW50VHlwZTogXCJwXCIsXG4gICAgICBjb250ZW50OiBgJHtvYmouZGVzY3JpcHRpb259YFxuICAgIH0pKVxuICB9XG59XG5leHBvcnQgZGVmYXVsdCBwcm9kdWN0IiwiXG5jb25zdCBwcm9kdWN0RGF0YSA9IHtcbiAgZ2V0UHJvZHVjdEluZm8oKSB7XG4gICAgcmV0dXJuIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo4MDg4L3Byb2R1Y3RcIilcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpO1xuICB9LFxufVxuXG5leHBvcnQgZGVmYXVsdCBwcm9kdWN0RGF0YSIsImltcG9ydCBwcm9kdWN0RGF0YSBmcm9tIFwiLi9wcm9kdWN0RGF0YVwiXG5pbXBvcnQgcHJvZHVjdCBmcm9tIFwiLi9wcm9kdWN0XCJcbmNvbnN0IHByb2R1Y3RMaXN0ID0ge1xuICBidWlsZFByb2R1Y3RMaXN0ICgpIHtcbiAgICBwcm9kdWN0RGF0YS5nZXRQcm9kdWN0SW5mbygpXG4gICAgLnRoZW4ocHJvZHVjdEluZm9BcnJheSA9PiB7XG4gICAgICBwcm9kdWN0SW5mb0FycmF5LmZvckVhY2gocHJvZHVjdE9iamVjdCA9PiB7XG4gICAgICAgIHByb2R1Y3QuYnVpbGRQcm9kdWN0SFRNTChwcm9kdWN0T2JqZWN0KVxuICAgICAgfSlcbiAgICAgIFxuICAgIH0pO1xuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgcHJvZHVjdExpc3QiLCJjb25zdCByZXZpZXcgPSB7XG5cbn07XG5leHBvcnQgZGVmYXVsdCByZXZpZXciLCJjb25zdCByZXZpZXdEYXRhID0ge1xuICBnZXRSZXZpZXdEYXRhKCkge1xuICAgIHJldHVybiBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4OC9yZXZpZXdcIilcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpO1xuICB9LFxufVxuXG5leHBvcnQgZGVmYXVsdCByZXZpZXdEYXRhIiwiaW1wb3J0IHJldmlld0RhdGEgZnJvbSBcIi4vcmV2aWV3RGF0YVwiXG5pbXBvcnQgcmV2aWV3IGZyb20gXCIuL3Jldmlld1wiXG5cbmNvbnN0IHJldmlld0xpc3QgPSB7XG4gIGJ1aWxkUmV2aWV3TGlzdCAoKSB7XG4gICAgcmV2aWV3RGF0YS5nZXRSZXZpZXdEYXRhKClcbiAgICAudGhlbihyZXZpZXdBcnJheSA9PiB7XG4gICAgICByZXZpZXdBcnJheS5mb3JFYWNoKHJldmlld09iamVjdCA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiUmV2aWV3IExpc3RcIixyZXZpZXdPYmplY3QpO1xuICAgICAgfSlcbiAgICAgIFxuICAgIH0pO1xuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgcmV2aWV3TGlzdCJdfQ==
