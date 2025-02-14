// Parallax Scrolling Effect for the Hero Video
window.addEventListener('scroll', function() {
    const heroVideo = document.getElementById('hero-video');
    if (heroVideo) {
      let scrollPosition = window.pageYOffset;
      heroVideo.style.transform = 'translate(-50%, -50%) translateY(' + scrollPosition * 0.5 + 'px)';
    }
  });
  