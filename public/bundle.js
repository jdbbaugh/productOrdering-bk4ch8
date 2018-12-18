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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_nav.default.buildNav();

},{"./nav":3}],3:[function(require,module,exports){
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

},{"./domComponent":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL2RvbUNvbXBvbmVudC5qcyIsIi4uL3NjcmlwdHMvbWFpbi5qcyIsIi4uL3NjcmlwdHMvbmF2LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQ0FBOzs7O0FBQ0EsTUFBTSxZQUFZLEdBQUc7QUFDbkIsRUFBQSxnQkFBZ0IsQ0FBQztBQUFFLElBQUEsV0FBRjtBQUFlLElBQUEsT0FBTyxHQUFHLElBQXpCO0FBQStCLElBQUEsUUFBUSxHQUFHLEVBQTFDO0FBQThDLElBQUEsVUFBVSxHQUFHO0FBQTNELEdBQUQsRUFBa0U7QUFDaEYsVUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsV0FBdkIsQ0FBaEI7QUFDQSxJQUFBLE9BQU8sQ0FBQyxXQUFSLEdBQXNCLE9BQXRCOztBQUVBLFFBQUksUUFBSixFQUFjO0FBQ1osTUFBQSxPQUFPLENBQUMsU0FBUixDQUFrQixHQUFsQixDQUFzQixRQUF0QjtBQUNEOztBQUVELFNBQUssSUFBSSxHQUFULElBQWdCLFVBQWhCLEVBQTRCO0FBQzFCLE1BQUEsT0FBTyxDQUFDLFlBQVIsQ0FBcUIsR0FBckIsRUFBMEIsVUFBVSxDQUFDLEdBQUQsQ0FBcEM7QUFDRDs7QUFDRCxXQUFPLE9BQVA7QUFDRDs7QUFia0IsQ0FBckI7ZUFnQmUsWTs7Ozs7O0FDakJmOzs7O0FBRUEsYUFBSSxRQUFKOzs7Ozs7Ozs7O0FDRkE7Ozs7QUFDQSxNQUFNLEdBQUcsR0FBRztBQUNWLEVBQUEsUUFBUSxHQUFJO0FBQ1YsVUFBTSxrQkFBa0IsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixTQUF2QixDQUEzQjtBQUNBLFVBQU0sUUFBUSxHQUFHLENBQUMsWUFBRCxFQUFlLFFBQWYsRUFBeUIsT0FBekIsRUFBa0MsRUFBbEMsRUFBcUMsUUFBckMsQ0FBakI7QUFDQSxJQUFBLGtCQUFrQixDQUFDLFdBQW5CLENBQStCLHNCQUFhLGdCQUFiLENBQThCO0FBQzNELE1BQUEsV0FBVyxFQUFFLEtBRDhDO0FBRTNELE1BQUEsUUFBUSxFQUFFLGVBRmlEO0FBRzNELE1BQUEsVUFBVSxFQUFFO0FBQ1YsUUFBQSxFQUFFLEVBQUU7QUFETTtBQUgrQyxLQUE5QixDQUEvQjtBQU9BLElBQUEsUUFBUSxDQUFDLE9BQVQsQ0FBaUIsU0FBUyxJQUFJO0FBQzVCLE1BQUEsUUFBUSxDQUFDLGNBQVQsQ0FBd0IsWUFBeEIsRUFBc0MsV0FBdEMsQ0FBa0Qsc0JBQWEsZ0JBQWIsQ0FBOEI7QUFDOUUsUUFBQSxXQUFXLEVBQUUsR0FEaUU7QUFFOUUsUUFBQSxPQUFPLEVBQUUsU0FGcUU7QUFHOUUsUUFBQSxRQUFRLEVBQUcsT0FBTSxTQUFVO0FBSG1ELE9BQTlCLENBQWxEO0FBS0QsS0FORDtBQU9EOztBQWxCUyxDQUFaO2VBcUJlLEciLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJpbXBvcnQgbmF2IGZyb20gXCIuL25hdlwiXG5jb25zdCBkb21Db21wb25lbnQgPSB7XG4gIGNyZWF0ZURvbUVsZW1lbnQoeyBlbGVtZW50VHlwZSwgY29udGVudCA9IG51bGwsIGNzc0NsYXNzID0gXCJcIiwgYXR0cmlidXRlcyA9IHt9IH0pIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50VHlwZSk7XG4gICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGNvbnRlbnQ7XG4gICAgXG4gICAgaWYgKGNzc0NsYXNzKSB7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY3NzQ2xhc3MpO1xuICAgIH1cblxuICAgIGZvciAobGV0IGtleSBpbiBhdHRyaWJ1dGVzKSB7XG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gICAgfVxuICAgIHJldHVybiBlbGVtZW50O1xuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQ29tcG9uZW50IiwiaW1wb3J0IG5hdiBmcm9tIFwiLi9uYXZcIlxuXG5uYXYuYnVpbGROYXYoKTsiLCJpbXBvcnQgZG9tQ29tcG9uZW50IGZyb20gXCIuL2RvbUNvbXBvbmVudFwiXG5jb25zdCBuYXYgPSB7XG4gIGJ1aWxkTmF2ICgpIHtcbiAgICBjb25zdCBuYXZDb250YWluZXJQYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm91dHB1dFwiKTtcbiAgICBjb25zdCBuYXZMaW5rcyA9IFtcIkNhdGVnb3JpZXNcIiwgXCJPcmRlcnNcIiwgXCJCRVRTWVwiLCBcIlwiLFwiTG9nT3V0XCJdO1xuICAgIG5hdkNvbnRhaW5lclBhcmVudC5hcHBlbmRDaGlsZChkb21Db21wb25lbnQuY3JlYXRlRG9tRWxlbWVudCh7XG4gICAgICBlbGVtZW50VHlwZTogXCJuYXZcIixcbiAgICAgIGNzc0NsYXNzOiBcIm5hdi1jb250YWluZXJcIixcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgaWQ6IFwibmF2LXBhcmVudFwiXG4gICAgICB9LFxuICAgIH0pKTtcbiAgICBuYXZMaW5rcy5mb3JFYWNoKG5hdk9wdGlvbiA9PiB7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdi1wYXJlbnRcIikuYXBwZW5kQ2hpbGQoZG9tQ29tcG9uZW50LmNyZWF0ZURvbUVsZW1lbnQoe1xuICAgICAgICBlbGVtZW50VHlwZTogXCJwXCIsXG4gICAgICAgIGNvbnRlbnQ6IG5hdk9wdGlvbixcbiAgICAgICAgY3NzQ2xhc3M6IGBuYXYtJHtuYXZPcHRpb259YFxuICAgICAgfSkpXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuYXYiXX0=
