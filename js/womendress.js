import footer from "./footer.js";
document.getElementById("footer").innerHTML=footer()
import navbar from "./navbar.js";
document.getElementById("shownavbar").innerHTML=navbar()


import { womenData } from "./womandata.js";
let data = womenData();
console.log(data);



let products = document.getElementById("products");
  let wishlist_data = JSON.parse(localStorage.getItem("wishlist_data")) ||[];


//    async  displayProduct = (data) => {
//     products.innerHTML = "";
    let i = 0;
    let id;
    data.forEach((product) => {
      // console.log(product.rating)
      let imgDiv = document.createElement("div");
      imgDiv.setAttribute("id", "imgDiv");
      let div = document.createElement("div");

      // localStorage for preview page---------------->


      div.addEventListener("mouseover", function () {
        div.style.padding = "10px";
        wishlist_div.style.visibility = "visible";
        wishlist_div.style.overflow = "visible";
        // id= setInterval(function(){
        //       if(i===imgArr.length){
        //           i=0;
        //       }
        //       Object.keys(product.images).forEach(function(key){
        //         imgArr.push(product.images[key])
        //       })
        //       console.log(imgArr)
        //       image.src=imgArr[i];
        //       imgDiv.append(image,ratingDiv)
        //       i++;
        //   },3000);
        // startSS();
      });
      div.addEventListener("mouseleave", function () {
        // clearInterval(id)
        div.style.padding = "20px";
        wishlist_div.style.visibility = "hidden";
        wishlist_div.style.overflow = "hidden";
        // clearInterval(id)
        imgArr = [];
        // stopSS();
      });
      let wish_btn = document.createElement("div");
      wish_btn.setAttribute("id", "wish_btn");

      let sizes = document.createElement("p");
      sizes.innerText = "Sizes : S,M,L,XL,XXL";
      // sizes.style.color = "gray";

      let wishlist_div = document.createElement("div");
      wishlist_div.setAttribute("id", "wishlist_div");
      let wish_name = document.createElement("p");
      wish_name.innerText = "Wishlist";

      let icon = document.createElement("i");
      icon.innerHTML = `<i class="far fa-heart"></i>`;

      wish_btn.append(icon, wish_name);
      wishlist_div.append(wish_btn, sizes);
      wish_btn.addEventListener("click", function (e) {
        icon.innerHTML = `<i class="fas fa-heart"></i>`;
        icon.style.color = "#ff425c";
        wish_btn.style.backgroundColor = "#32323a";
        wish_btn.style.color = "white";
        wishlist_data.push(product);
        localStorage.setItem("wishlist_data",JSON.stringify(wishlist_data));
      });

      let image = document.createElement("img");
      image.src = product.images.image1;
      image.addEventListener("click", function () {
        localStorage.setItem("preview_Data",JSON.stringify(product));
        window.location.href = "previewPage.html";
      });

      let rating = document.createElement("p");
      rating.innerHTML = product.rating;

      let star_icon = document.createElement("i");
      star_icon.innerHTML = `<i class="fas fa-star"></i>`;
      star_icon.style.color = "teal";

      let count = document.createElement("p");
      count.innerText = `| ${product.count}`;

      let ratingDiv = document.createElement("div");
      ratingDiv.append(rating, star_icon, count);
      ratingDiv.setAttribute("id", "ratingDiv");
      let imgArr = [];

      imgDiv.append(image, ratingDiv);

      let brand = document.createElement("h3");
      brand.innerText = product.brand;

      let title = document.createElement("p");
      title.innerText = product.title;

      let price = document.createElement("h3");
      price.innerText = `Rs.${product.price}`;

      let off_price = document.createElement("p");
      off_price.innerText = `Rs.${product.off_price}`;
      off_price.style.textDecoration = "line-through";

      let discount = document.createElement("p");
      discount.innerText = `(${product.discount}% OFF)`;
      discount.style.color = "orange";

      let div1 = document.createElement("div");
      div1.setAttribute("id", "priceDiv");

      div1.append(price, off_price, discount);

      div.append(imgDiv, brand, title, wishlist_div, div1);

      products.append(div);
    });
//   };