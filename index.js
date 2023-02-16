const menu = document.getElementById("pop-up-menu");
const portofolio_container = document.getElementById("portofolio-container");
const portofolio = [
  {
    title: "tokopedia",
    description: "lorem ipsum dolot sit amet",
    images: "tokopedia.jpg",
  },
  {
    title: "shopee",
    description: "lorem ipsum dolot sit amet",
    images: "shopee.jpg",
  },
  {
    title: "bukalapak",
    description: "lorem ipsum dolot sit amet",
    images: "bukalapak.jpg",
  },
  {
    title: "lohita",
    description: "lorem ipsum dolot sit amet",
    images: "bukalapak.jpg",
  },
];

portofolio.forEach((element) => {
  portofolio_container.innerHTML += `<div class="portofolio-card">
    <div class="card-content">
        <div class="card-images">

        </div>
        <div class="card-button">
            <button><img src="/storage/images/portofolio-button.svg" alt=""></button>
        </div>
        <div class="card-title">
            <h1>${element.title}</h1>
            <p>${element.description}</p>
        </div>
    </div>`;
});

function popUpMenu() {
  menu.classList.remove("display-none");
}

function closeMenu() {
  console.log("pencet");
  menu.classList.add("display-none");
}
