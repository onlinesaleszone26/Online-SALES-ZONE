
const products = [

{
    name:"Product 1",
    image:"https://shopbasebd.com/public/uploads/shop/products/1778753164_L_1.jpeg",
    price:"৳999",
    oldPrice:"৳1299",
    link:"https://shopbasebd.com/store/products/details/29830"
},

{
    name:"Product 2",
    image:"https://shopbasebd.com/public/uploads/shop/products/1778753164_L_2.jpeg",
    price:"৳1199",
    oldPrice:"৳1499",
    link:"https://shopbasebd.com/store/products/details/28559"
},

{
    name:"Product 3",
    image:"https://shopbasebd.com/public/uploads/shop/products/1778753164_L_1.jpeg",
    price:"৳899",
    oldPrice:"৳1199",
    link:"https://shopbasebd.com/store/products/details/29860"
}

];

const container=document.querySelector(".product-container");

products.forEach(product=>{

container.innerHTML += `

<div class="product-card">

<img src="${product.image}">

<div class="product-info">

<h3>${product.name}</h3>

<div class="price">

${product.price}

<span class="old-price">

${product.oldPrice}

</span>

</div>

<a href="${product.link}" target="_blank">

<button class="order-btn">

Order Now

</button>

</a>

</div>

</div>

`;

});
