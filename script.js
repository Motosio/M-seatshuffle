console.log("席替え準備完了");

const images = [
  "faces/スウ.png",
  "faces/フューム.png",
  "faces/フェノール.png",
  "faces/レオナ.png"
];

const board = document.getElementById("board");
const button = document.getElementById("shuffleBtn");

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function render() {
  board.innerHTML = "";
  images.forEach(src => {
    const div = document.createElement("div");
    div.className = "seat";

    const img = document.createElement("img");
    img.src = src;

    div.appendChild(img);
    board.appendChild(div);
  });
}

button.addEventListener("click", () => {
  shuffle(images);
  render();
});

render();
