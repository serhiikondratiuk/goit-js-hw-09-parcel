import galleryItems from './gallery-items';
import refs from './refs';

export function onRightPress() {
 const indexOfCurrentImage = galleryItems.findIndex(
  image => image.original === refs.lightboxImageRef.src,
 );
 if (indexOfCurrentImage !== galleryItems.length - 1) {
  refs.lightboxImageRef.src = galleryItems[indexOfCurrentImage + 1].original;
  refs.lightboxImageRef.alt = galleryItems[indexOfCurrentImage + 1].description;
 } else {
  refs.lightboxImageRef.src = galleryItems[0].original;
  refs.lightboxImageRef.alt = galleryItems[0].description;
 }
}

export function onLeftPress() {
 const indexOfCurrentImage = galleryItems.findIndex(
  image => image.original === refs.lightboxImageRef.src,
 );
 if (indexOfCurrentImage !== 0) {
  refs.lightboxImageRef.src = galleryItems[indexOfCurrentImage - 1].original;
  refs.lightboxImageRef.alt = galleryItems[indexOfCurrentImage - 1].description;
 } else {
  refs.lightboxImageRef.src = galleryItems[galleryItems.length - 1].original;
  refs.lightboxImageRef.alt = galleryItems[galleryItems.length - 1].description;
 }
}
