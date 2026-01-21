console.log("席替え準備完了");

const images = [
  "faces/スウ.png",
  "faces/フューム.png",
  "faces/フェノール.png",
  "faces/レオナ.png",
  "faces/コウ.png",
  "faces/キョウ.png",
  "faces/リゲル.png",
  "faces/カフ.png",
  "faces/イグノア.png",
  "faces/佐藤.png",
  "faces/アレクサンダー.png",
  "faces/シャーク.png",
  "faces/ソウ.png",
  "faces/徹頭尾.png",
  "faces/朱雀.png",
  "faces/スフェリコン.png",
  "faces/天人.png",
  "faces/ヴェポラッブ.png",
  "faces/イオン.png",
  "faces/ナイト.png",
  "faces/ミズキ.png",
  "faces/蜜夜.png",
  "faces/カズキ.png",
  "faces/エンドウ.png",
  "faces/アルカ.png",
  "faces/メビウス.png",
  "faces/ルーファス.png",
  "faces/シモン.png"
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
