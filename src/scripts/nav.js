import domComponent from "./domComponent"
const nav = {
  buildNav () {
    const navContainerParent = document.querySelector(".output");
    const navLinks = ["Categories", "Orders", "BETSY", "","LogOut"];
    navContainerParent.appendChild(domComponent.createDomElement({
      elementType: "nav",
      cssClass: "nav-container",
      attributes: {
        id: "nav-parent"
      },
    }));
    navLinks.forEach(navOption => {
      document.getElementById("nav-parent").appendChild(domComponent.createDomElement({
        elementType: "p",
        content: navOption,
        cssClass: `nav-${navOption}`
      }))
    })
  }
}

export default nav