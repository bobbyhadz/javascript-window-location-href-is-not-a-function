// window.location.href is not a function Error in JavaScript

console.log('bobbyhadz.com');

const btn = document.getElementById('btn');

btn.addEventListener('click', function onClick() {
  // ✅ works
  window.location.assign('https://google.com');
});
