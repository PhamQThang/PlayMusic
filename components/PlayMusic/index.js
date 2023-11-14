var targetPosition = 50;

window.addEventListener('scroll', function() {
  var scrollableContainer = document.querySelector('.content-bg');
  var targetDiv = document.getElementById('content-music');
  var scrollPosition = scrollableContainer.scrollTop + scrollableContainer.offsetHeight;

  if (scrollPosition >= targetPosition) {
    targetDiv.classList.remove('hidden');
  } else {
    targetDiv.classList.add('hidden');
  }
});