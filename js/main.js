/*tambahan*/
/* Fetch API */
fetch('./manifest.json')
.then(function(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  // Do stuff with the response
})
.catch(function(error) {
  console.log('Looks like there was a problem: \n', error);
});


/* Memanggil service worker */
window.onload = () => {
  'use strict';

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('./sw.js');
  }
}
