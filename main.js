class Player {
    constructor(data) {
        this.points = {
            points: data?.points?.points || 0,
            pps: data?.points?.pps || 0,
            click: data?.points?.click || 1,
        };
    };
};

var player = new Player();

function click_btn() {
    player.points.points = ExpantaNum.add(player.points.points, player.points.click);
};

function spawnFloater(amount, x, y) {
  const el = document.createElement("div");
  el.className = "floater";
  el.innerText = `+${amount}`;
  el.style.left = `${x}px`;
  el.style.top = `${y}px`;
  document.getElementById("floaters").appendChild(el);
  // remove after animation
  setTimeout(() => el.remove(), 1000);
}

document.getElementById("main-btn").addEventListener("click", e => {
  // your existing click logic
  click_btn();
  // show floater at click position
  const rect = e.target.getBoundingClientRect();
  const clickX = e.clientX;
  const clickY = e.clientY;
  spawnFloater(new ExpantaNum(player.points.click).toFixed(0), clickX, clickY);
});

function Save() {
    localStorage.player = JSON.stringify(player);
};

function Load() {
    player = new Player(JSON.parse(localStorage.player));
    console.log("Save loaded");
    return player.obj || "default";
};

window.setInterval(function() {
    Save();
}, 1000/60);

window.setInterval(function() {
    player.points.points = ExpantaNum.add(player.points.points, ExpantaNum.div(player.points.pps, 60));
}, 1000/60);