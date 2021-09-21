import refs from './refs';
export function getImageAttributes(src, alt) {
 refs.lightboxImageRef.src = src;
 refs.lightboxImageRef.alt = alt;
}
