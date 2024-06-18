document.addEventListener("DOMContentLoaded", function () {
    var elem = document.querySelector(".main-carousel");
    var flkty = new Flickity(elem, {
      cellAlign: "left",
      contain: true,
      wrapAround: true,
      prevNextButtons: false,
      autoPlay: 3000,
    });
  });
  
  
  document.addEventListener("DOMContentLoaded", function () {
    var elem = document.querySelector(".main-carousel-pre");
    var flkty = new Flickity(elem, {
      cellAlign: "left",
      contain: true,
      wrapAround: true,
      prevNextButtons: false,
      autoPlay: 3000,
    });
  });
  
  const weddingDate = new Date("July, 14 2024 19:19:00").getTime();
  
  const countdown = setInterval(function () {
    const now = new Date().getTime();
    const distance = weddingDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    document.querySelector(".days").innerHTML = `${days}`;
    document.querySelector(".hours").innerHTML = `${hours}`;
    document.querySelector(".mins").innerHTML = `${minutes}`;
    document.querySelector(".sec").innerHTML = `${seconds}`;
  
    // If the countdown is over, display a message
    if (distance < 0) {
      clearInterval(countdown);
      document.getElementById("countdown").innerHTML = "The wedding is here!";
    }
  }, 1000);
  

  // for audio
  function play() {
    var audio = document.getElementById("myaudio");
    audio.muted = false; // Unmute the audio when play is triggered
    audio.play();
}

window.onload = function() {
    var audio = document.getElementById("myaudio");
    audio.muted = true; // Initially muted to allow autoplay
    audio.play().then(() => {
        // Autoplay succeeded, now unmute the audio
        audio.muted = false;
    }).catch(error => {
        // Autoplay failed, user interaction required
        console.log("Autoplay failed, user interaction required.");
        document.body.addEventListener('click', function() {
            play();
        }, { once: true });
    });
}
  