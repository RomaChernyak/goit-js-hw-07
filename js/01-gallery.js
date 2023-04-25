import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

function createGalleryItemsMarkup(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `
            <li class="gallery__item">
                <a class="gallery__link" href="${original}">
                    <img
                        class="gallery__image"
                        src="${preview}"
                        data-source="${original}"
                        alt="${description}"
                    />
                </a>
            </li>
            `;
        })
        .join('');
};

const galleryItemsContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryItemsMarkup(galleryItems);

galleryItemsContainer.insertAdjacentHTML('beforeend', galleryMarkup);

galleryItemsContainer.addEventListener('click', onGalleryContainerClick);

function onGalleryContainerClick(evt) {
    evt.preventDefault();
    
    const isGalleryItemEl = evt.target.classList.contains('gallery__image');

    if (!isGalleryItemEl) {
        return;
    };

    // console.log(evt.target);

    const galleryLinkEl = evt.target.closest('.gallery__link');

    const instance = basicLightbox.create(`
        <img src="${galleryLinkEl.href}" width="800" height="600">
    `)

    instance.show()

    galleryItemsContainer.addEventListener('keydown', (evt) => {
        if (evt.code === 'Escape') {
            instance.close();
        }
    });
};