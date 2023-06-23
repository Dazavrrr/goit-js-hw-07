import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');
const galleryList = galleryItems
  .map((item) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`;
  })
  .join("");

const clickItem = event => {
  event.preventDefault();

  const pressEscape = event => {
    if (event.code === "ESCAPE") {
      instance.close();
    }
  }

  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}">`,
    {
      onShow: (instance) => {
        document.addEventListener("keydown", pressEscape);
      },
      onClose: (instance) => {
        document.removeEventListener("keydown", pressEscape);
      },
    }
  );

  instance.show();
};

gallery.innerHTML = galleryList;
gallery.addEventListener("click", clickItem);