import refs from './refs';
import { galleryMarkup } from './markup';
refs.galleryContainerRef.insertAdjacentHTML('beforeend', galleryMarkup);
refs.galleryContainerRef.addEventListener('click', onModalOpen);
refs.closeModalBtnRef.addEventListener('click', onModalCLose);
refs.lightboxOverlayRef.addEventListener('click', onOverlayClick);
import { getImageAttributes } from './getAttributes';
import { onModalCLose, onOverlayClick } from './modal-close';
import { onKeyPress } from './keyPress';
function onModalOpen(e) {
 e.preventDefault();
 if (!e.target.classList.contains('gallery__image')) {
  return;
 }
 refs.modalWindowRef.classList.add('is-open');
 getImageAttributes(e.target.dataset.source, e.target.alt);
 window.addEventListener('keydown', onKeyPress);
}
