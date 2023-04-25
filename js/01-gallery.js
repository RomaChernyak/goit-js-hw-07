import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

// 1. Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.

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

// 2. Реалізація делегування на ul.gallery і отримання url великого зображення.

galleryItemsContainer.addEventListener('click', onGalleryContainerClick);

function onGalleryContainerClick(evt) {
    evt.preventDefault();
    
    const isGalleryItemEl = evt.target.classList.contains('gallery__image');

    if (!isGalleryItemEl) {
        return;
    };

    // console.log(evt.target);

    const galleryLinkEl = evt.target.closest('.gallery__link');

    // galleryLinkEl.href;
    // console.log(galleryLinkEl.href);

    // 4. Відкриття модального вікна по кліку на елементі галереї. Для цього ознайомся з документацією і прикладами.

    // 5. Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям. Використовуй готову розмітку модального вікна із зображенням з прикладів бібліотеки basicLightbox.

    const instance = basicLightbox.create(`
        <img src="${galleryLinkEl.href}" width="800" height="600">
    `)

    instance.show()

    galleryItemsContainer.addEventListener('keydown', (evt) => {
        // console.log(evt.code);
        
        if (evt.code === 'Escape') {
            instance.close();
        }
    });
};