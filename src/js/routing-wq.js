import watch from '../templates/watch-list.hbs';
import queue from '../templates/queue-list.hbs';

const mainRef = document.querySelector('main');

function createWatchMarkup() {
  const markupWatch = watch();
  mainRef.insertAdjacentHTML('beforeend', markupWatch);
}

function createQueueMarkup() {
  const queueMarkup = queue();
  mainRef.insertAdjacentHTML('beforeend', queueMarkup);
}
