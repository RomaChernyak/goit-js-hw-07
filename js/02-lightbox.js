import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

// 1. Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї. Використовуй готовий код з першого завдання.

function createGalleryItemsMarkup(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `
            <li class="gallery__item">
                <a class="gallery__link" href="${original}">
                    <img
                    class="gallery__image"
                    src="${preview}"
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

// 2. Підключення скрипту і стилів бібліотеки, використовуючи CDN сервіс cdnjs. Необхідно додати посилання на два файли: simple-lightbox.min.js і simple-lightbox.min.css.



// 3. Ініціалізація бібліотеки після створення і додання елементів галереї у ul.gallery. Для цього ознайомся з документацією SimpleLightbox - насамперед секції «Usage» і «Markup».

const lightbox = new SimpleLightbox('.gallery a', { /* options */ });

// 4. Подивися в документації секцію «Options» і додай відображення підписів до зображень з атрибута alt. Нехай підпис буде знизу і з'являється через 250 мілісекунд після відкриття зображення.


