const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];


const gallery = document.querySelector(".gallery");

const fragment = document.createDocumentFragment();


images.forEach((image) => {
  const li = document.createElement("li");
  const img = document.createElement("img");
  img.src = image.url;
  img.alt = image.alt;
  li.appendChild(img);
  fragment.appendChild(li);
});


gallery.appendChild(fragment);


gallery.classList.add("flex-container");
gallery.style.listStyleType = "none";
gallery.style.padding = "0";
gallery.style.display = "flex";
gallery.style.flexWrap = "wrap";
gallery.style.justifyContent = "space-between";
gallery.style.gap = "20px";
gallery.style.marginTop = "20px";

