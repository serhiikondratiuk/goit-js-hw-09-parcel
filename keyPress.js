import { onRightPress, onLeftPress } from './modal-window';
import { onModalCLose } from './modal-close';

export function onKeyPress(e) {
 if (e.code === 'ArrowRight') {
  onRightPress();
 }
 if (e.code === 'ArrowLeft') {
  onLeftPress();
 }
 if (e.code === 'Escape') {
  onModalCLose();
 }
}
