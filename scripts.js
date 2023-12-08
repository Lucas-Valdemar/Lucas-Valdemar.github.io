document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

class ImgSelector {
  constructor(navigationName, imgName) {
    this.navigationName = navigationName;
    this.imgName = imgName;
  }
  getTabName(tabID) {
    if (tabID === "portNavItem1") {
      tabNumber = 1;
    }
    if (tabID === "portNavItem2") {
      tabNumber = 2;
    }
    if (tabID === "portNavItem3") {
      tabNumber = 3;
    }
    if (tabID === "portNavItem4") {
      tabNumber = 4;
    }
  }
  updateTabColor() {
    if (tabNumber == 1) {
      tab1.style.color = "#ffa500";
      tab2.style.color = "#ffffff";
      tab3.style.color = "#ffffff";
      tab4.style.color = "#ffffff";
    }
    if (tabNumber == 2) {
      tab2.style.color = "#ffa500";
      tab1.style.color = "#ffffff";
      tab3.style.color = "#ffffff";
      tab4.style.color = "#ffffff";
    }
    if (tabNumber == 3) {
      tab3.style.color = "#ffa500";
      tab2.style.color = "#ffffff";
      tab1.style.color = "#ffffff";
      tab4.style.color = "#ffffff";
    }
    if (tabNumber == 4) {
      tab4.style.color = "#ffa500";
      tab2.style.color = "#ffffff";
      tab3.style.color = "#ffffff";
      tab1.style.color = "#ffffff";
    }
  }
  updateImg() {
    img1.remove();
    img2.remove();
    img3.remove();
    if (tabNumber == 1) {
      imgParent.appendChild(img1);
      imgParent.appendChild(img2);
      imgParent.appendChild(img3);
      imgParent.style.width = "";
      item1.style.width = "";
      item2.style.width = "";
      item3.style.width = "";
      prog1.style.width = "";
      prog2.style.width = "";
      prog3.style.width = "";
      prog1.style.top = "";
      prog2.style.top = "";
      prog3.style.top = "";
    }
    if (tabNumber == 2) {
      img2.remove();
      img3.remove();
      imgParent.appendChild(img1);
      if (window.matchMedia("(min-width:1024px)").matches) {
        imgParent.style.width = "320px";
        item1.style.width = "320px";
        prog1.style.width = "320px";
        prog1.style.top = "-82px";
      } else {
        imgParent.style.width = "200px";
        item1.style.width = "200px";
        prog1.style.width = "200px";
        prog1.style.top = "-50px";
      }
    }
    if (tabNumber == 3) {
      img1.remove();
      img3.remove();
      imgParent.appendChild(img2);
      if (window.matchMedia("(min-width:1024px)").matches) {
        imgParent.style.width = "320px";
        item2.style.width = "320px";
        prog2.style.width = "320px";
        prog2.style.top = "-82px";
      } else {
        imgParent.style.width = "200px";
        item2.style.width = "200px";
        prog2.style.width = "200px";
        prog2.style.top = "-50px";
      }
    }
    if (tabNumber == 4) {
      img1.remove();
      img2.remove();
      imgParent.appendChild(img3);
      if (window.matchMedia("(min-width:1024px)").matches) {
        imgParent.style.width = "320px";
        item3.style.width = "320px";
        prog3.style.width = "320px";
        prog3.style.top = "-82px";
      } else {
        imgParent.style.width = "200px";
        item3.style.width = "200px";
        prog3.style.width = "200px";
        prog3.style.top = "-50px";
      }
    }
  }
}

const buttons = document.querySelectorAll(".button");
const imgName = document.querySelectorAll(".imgLinks");
const navigationName = document.querySelectorAll(".portNavItem");

const imgParent = document.querySelector("#portImgViewer");
const tab1 = document.querySelector("#portNavItem1");
const tab2 = document.querySelector("#portNavItem2");
const tab3 = document.querySelector("#portNavItem3");
const tab4 = document.querySelector("#portNavItem4");
const img1 = document.querySelector("#portImg1");
const img2 = document.querySelector("#portImg2");
const img3 = document.querySelector("#portImg3");
const item1 = document.querySelector("#portfolioItem3");
const item2 = document.querySelector("#portfolioItem4");
const item3 = document.querySelector("#portfolioItem5");
const prog1 = document.querySelector("#progress1");
const prog2 = document.querySelector("#progress2");
const prog3 = document.querySelector("#progress3");

tabNumber = 1;

const img = new ImgSelector(navigationName, imgName);

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const value = e.target.id;
    img.getTabName(value);
    img.updateTabColor();
    img.updateImg();
  });
});

img.updateTabColor();
img.updateImg();

document.addEventListener("DOMContentLoaded", function () {
  const emailInput = document.getElementById("contactEmail");
  const placeholder = document.querySelector("#field2placeholder");

  emailInput.addEventListener("input", function () {
    placeholder.classList.toggle("show", emailInput.value.trim() !== "");
  });

  // Initial check for content on page load
  placeholder.classList.toggle("show", emailInput.value.trim() !== "");
});
