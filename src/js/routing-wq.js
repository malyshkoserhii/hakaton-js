import watch from '../templates/watch-list.hbs';
import queue from '../templates/queue-list.hbs';
import { createRouter } from 'routerjs';

const libraryRef = document.querySelector('.library');

function createWatchMarkup() {
  const markupWatch = watch();
  libraryRef.innerHTML = markupWatch;
}

function createQueueMarkup() {
  const queueMarkup = queue();
  libraryRef.innerHTML = queueMarkup;
}

const router = createRouter()
  .get('/watch', (req, context) => {
    createWatchMarkup();
  })
  .get('/queue', (req, context) => {
    createQueueMarkup();
  })
  .run();
