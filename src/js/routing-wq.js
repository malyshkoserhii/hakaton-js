import watch from '../templates/watch-list.hbs';
import queue from '../templates/queue-list.hbs';
import { createRouter } from 'routerjs';

const mainRef = document.querySelector('main');

function createWatchMarkup() {
  const markupWatch = watch();
  mainRef.innerHTML = markupWatch;
}

function createQueueMarkup() {
  const queueMarkup = queue();
  mainRef.innerHTML = queueMarkup;
}

const router = createRouter()
  .get('/watch', (req, context) => {
    createWatchMarkup();
  })
  .get('/queue', (req, context) => {
    createQueueMarkup();
  })
  .run();
