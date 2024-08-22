const appHeight = () => {
  const doc = document.documentElement;
  let vh = Math.min(window.innerHeight, doc.clientHeight) * 0.01;
  doc.style.setProperty('--vh', `${vh}px`);
};

const setAppHeight = () => {
  const duration = 5000;
  const delay = 200;
  let timeinterval = setInterval(() => {
    appHeight();
  }, delay);
  setTimeout(() => {
    clearInterval(timeinterval);
  }, duration);
};

window.addEventListener('resize', () => {
  setAppHeight();
});

setAppHeight();
