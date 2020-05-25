let scroll =
  window.requestAnimationFrame ||
  function (callback) {
    window.setTimeout(callback, 1000 / 60);
  };

let elementsToShow = document.querySelectorAll('.show-on-scroll');

window.addEventListener('scroll', function (element) {
  console.log('scroll');
  let aboutToShow = document.querySelector('.about');
  aboutToShow.classList.add('is-visible');
});

function loop() {
  elementsToShow.forEach(function (element) {
    if (isElementInViewport(element)) {
      element.classList.add('is-visible');
    } /*
      else {
        element.classList.remove('is-visible');
      }*/
  });
  scroll(loop);
}

loop();

function isElementInViewport(el) {
  // special bonus for those using jQuery
  if (typeof jQuery === 'function' && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0 && rect.bottom >= 0) ||
    (rect.bottom >=
      (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <=
      (window.innerHeight || document.documentElement.clientHeight)) ||
    (rect.top >= 0 &&
      rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight))
  );
}

let eyeball = document.querySelector('.eye');
let eye = document.querySelector('.front_end_button')
document.onmousemove = function () {

  let rect = eyeball.getBoundingClientRect();

  let xCenter = (rect.right + rect.left) / 2;
  let yCenter = (rect.top + rect.bottom) / 2;

  console.log("left:", rect.left, "right:", rect.right, "center:", xCenter)

  let x = event.clientX * 50 / xCenter + '%';
  let y = event.clientY * 50 / yCenter + '%';

  if (y > yCenter) {
    eyeball.style.top = 0 + '%';
  }
  else {
    eye.style.top = y;
  }

  eye.style.left = x;
}
