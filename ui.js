window.setInterval(function() {
    document.getElementById("points").innerText = "Points: " + new ExpantaNum(player.points.points).toFixed(2);
    document.getElementById("click").innerText = "Click value: " + new ExpantaNum(player.points.click).toFixed(2);
    document.getElementById("pps").innerText = "Points per second: " + new ExpantaNum(player.points.pps).toFixed(2);
}, 1000/60);

window.addEventListener("DOMContentLoaded", () => {
  const splash = document.getElementById("splash");
  const canvas = document.getElementById("starfield");
  const ctx = canvas.getContext("2d");
  let stars = [];

  // Resize canvas
  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener("resize", resize);
  resize();

  // Create star objects
  function initStars(count = 200) {
    stars = [];
    for (let i = 0; i < count; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.5 + 0.5,
        speed: Math.random() * 0.5 + 0.2
      });
    }
  }
  initStars();

  // Animate stars
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#fff";
    stars.forEach(star => {
      star.x -= star.speed;
      if (star.x < 0) {
        star.x = canvas.width;
        star.y = Math.random() * canvas.height;
      }
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
      ctx.fill();
    });
    requestAnimationFrame(animate);
  }
  animate();

  // Remove splash after total intro time (delay 4s + fade 1s)
  setTimeout(() => splash.remove(), 5000);
});

setInterval(() => {
  document.getElementById("points").innerText = 
    "Points: " + new ExpantaNum(player.points.points).toFixed(2);
  document.getElementById("click").innerText = 
    "Click value: " + new ExpantaNum(player.points.click).toFixed(2);
  document.getElementById("pps").innerText = 
    "Points per second: " + new ExpantaNum(player.points.pps).toFixed(2);
}, 1000/60);