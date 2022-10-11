import { galleryItems } from './gallery-items.js';
// Change code below this line

let allImages = "";

galleryItems.forEach((object) => {
    allImages += `<a class="gallery__item" href="${object.original}"> 
    <img class="gallery__image" src="${object.preview}" alt="${object.description}">
    </a>`;
});

const ulRef = document.querySelector('ul.gallery');
ulRef.innerHTML = allImages;

var lightbox = new SimpleLightbox('.gallery a', {captionsData:"alt", captionDelay:250});