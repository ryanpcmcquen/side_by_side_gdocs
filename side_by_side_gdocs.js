// @flow
/*! side_by_side_gdocs.js v0.1.0 by ryanpcmcquen */
const docsToolbar = document.querySelector('#docs-side-toolbar');

window.setTimeout(() => {
  if (docsToolbar) {

    const pages = [...document.querySelectorAll('.kix-page')];

    docsToolbar.innerHTML = docsToolbar.innerHTML + '\
  <button id="two_page_view_toggler" title="Toggle side-by-side view." style="position: absolute; right: 7px; top: 7px;">\
    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMAQMAAABsu86kAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAGUExURUdwTB0iLB6+nrEAAAABdFJOUwBA5thmAAAAGklEQVQI12Ow/8DAIMDw/wJDQwA25MDw/wAAwvILPmbLFTgAAAAASUVORK5CYII=">\
  </button>\
';

    document.querySelector('#two_page_view_toggler').addEventListener('click', () => {
      pages.map((ignore, i) => {
        if (pages[i].style.marginLeft) {
          // Reset case:
          pages[i].style.marginLeft = '';
          pages[i].style.float = 'none';
        } else {
          // Two-page view!
          if (i % 2) {
            // Odd pages:
            pages[i].style.marginLeft = `${window.innerWidth / 4}px`;
          } else {
            // Even pages:
            pages[i].style.marginLeft = `-${window.innerWidth / 4}px`;
            pages[i].style.float = 'left';
          }
        }
      });
    });

  } else {
    return false;
  }

}, 1000);
