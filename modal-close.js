import refs from './refs';
import { onKeyPress } from './keyPress';
import { getImageAttributes } from './getAttributes';

export function onModalCLose() {
 refs.modalWindowRef.classList.remove('is-open');
 getImageAttributes('', '');
 window.removeEventListener('keydown', onKeyPress);
}

export function onOverlayClick() {
 onModalCLose();
}
