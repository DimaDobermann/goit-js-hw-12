import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const loadMoreButton = document.querySelector('.load-more');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images) {
  const markup = images
    .map(
      image => `
        <li class="gallery-item">
          <a href="${image.largeImageURL}">
            <img
              src="${image.webformatURL}"
              alt="${image.tags}"
              loading="lazy"
            />
            <div class="info">
              <p><b>Likes</b><span>${image.likes}</span></p>
              <p><b>Views</b><span>${image.views}</span></p>
              <p><b>Comments</b><span>${image.comments}</span></p>
              <p><b>Downloads</b><span>${image.downloads}</span></p>
            </div>
          </a>
        </li>
      `
    )
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);

  lightbox.refresh();
}

export function clearGallery() {
  gallery.innerHTML = '';
}

export function showLoader() {
  loader.classList.add('is-visible');
}

export function hideLoader() {
  loader.classList.remove('is-visible');
}

export function showLoadMoreButton() {
  loadMoreButton.classList.add('is-visible');
}

export function hideLoadMoreButton() {
  loadMoreButton.classList.remove('is-visible');
}
