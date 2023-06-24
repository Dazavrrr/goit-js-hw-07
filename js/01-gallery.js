import { galleryItems } from './gallery-items.js';

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
  
  if (!event.target.classList.contains('gallery__image')) {
    return;
  };

  const pressEscape = event => {
    if (event.code === "Escape") {
      instance.close();
    }
  };

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