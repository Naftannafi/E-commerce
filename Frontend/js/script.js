const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");
const products = [
  {
    id: 1,
    title: "Air Force",
    price: 119,
    colors: [
      {
        code: "black",
        img: "/Frontend/image/air.png",
      },
      {
        code: "darkblue",
        img: "/Frontend/image/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "/Frontend/image/jordan.png",
      },
      {
        code: "green",
        img: "/Frontend/image/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 109,
    colors: [
      {
        code: "lightgray",
        img: "/Frontend/image/blazer.png",
      },
      {
        code: "green",
        img: "/Frontend/image/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 129,
    colors: [
      {
        code: "black",
        img: "/Frontend/image/crater.png",
      },
      {
        code: "darkblue",
        img: "/Frontend/image/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "/Frontend/image/hippie.png",
      },
      {
        code: "black",
        img: "/Frontend/image/hippie2.png",
      },
    ],
  },
];
let chooseProduct = products[0];
const currentProductImage = document.querySelector(".productImage");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {

    //change the current silde
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choose product
    chooseProduct = products[index];

    //change texts of current product
    currentProductTitle.textContent = chooseProduct.title;
      currentProductPrice.textContent ="$" + chooseProduct.price;
       currentProductImage.src = chooseProduct.colors[0].img;
       currentProductColors.forEach((color,index)=>{
        color.style.backgroundColor = chooseProduct.colors[index].code;
       });
       
  });
});
currentProductColors.forEach((color,index)=>{
    color.addEventListener("click",()=>{
        currentProductImage.src = chooseProduct.colors[index].img;
    });
});
currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) =>{
size.style.backgroundColor = "white";
size.style.color = "black";
    });
    size.style.backgroundColor="black";
    size.style.color ="white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const closeButton = document.querySelector(".closeButton");

productButton.addEventListener("click", ()=>{
  payment.style.display="flex";
});
closeButton.addEventListener("click", () => {
  payment.style.display="none";
});