// Parallax Scrolling Effect for the Hero Video
window.addEventListener('scroll', function() {
    const heroVideo = document.getElementById('hero-video');
    if (heroVideo) {
      let scrollPosition = window.pageYOffset;
      heroVideo.style.transform = 'translate(-50%, -50%) translateY(' + scrollPosition * 0.5 + 'px)';
    }
  });
  
  // Conditional behavior for the header call/contact link
  window.addEventListener('load', function() {
    const callLink = document.getElementById("call-link");
    if (callLink) {
      if (window.innerWidth <= 768) {
        callLink.href = "tel:7635929320";
        callLink.textContent = "Call Us: 763-592-9320";
      } else {
        callLink.href = "contact.html";
        callLink.textContent = "Contact Us: 763-592-9320";
      }
    }
  });
  