import galleryItems from './gallery-items';
export const galleryMarkup = createGalleryMarkup(galleryItems);

function createGalleryMarkup(photos) {
 return photos
  .map(({ preview, original, description }) => {
   return `<li class="gallery__item">
    <a
     class="gallery__link"
     href="${original}"
    >
     <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt=${description}
     />
    </a>
   </li>`;
  })
  .join('');
}
