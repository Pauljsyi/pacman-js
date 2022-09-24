console.log(..."connected");

let world = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 2, 1, 1, 0, 0, 0, 0, 0, 1],
  [1, 2, 1, 1, -1, 1, 0, 1, 0, 1],
  [1, 0, 1, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 1, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  // [99],
];

let empty = 2;
let brick1 = 1;
let coin1 = 0;

let displayWorld = () => {
  let output = "";
  for (let i = 0; i < world.length; i++) {
    output += "\n<div class='row'>";
    // console.log(world);
    for (let j = 0; j < world[i].length; j++) {
      // console.log(world[i]);
      if (world[i][j] === 1) {
        // console.log("brick");
        output += "\n\t<div class='brick'></div>";
        // output = output + world[i][j];
      } else if (world[i][j] === 0) {
        output += "\n\t<div class='coin'></div>";
      } else if (world[i][j] === 2) {
        output += "\n\t<div class='empty'></div>";
      } else if (world[i][j] === 99) {
        console.log("pacman");
        output += "\n\t<div class='pacman'></div>";
      } else if (world[i][j] === -1) {
        output += "\n\t<div class='empty'></div>";
      }
    }
    output += "\n</div>";
  }

  // console.log(output);
  document.querySelector(".world").innerHTML = output;
};

let pacmanPosition = {
  x: 1,
  y: 1,
};
const pacman = document.querySelector("#pacman");

let displayPacman = () => {
  pacman.style.top = pacmanPosition.y * 20 + "px";
  pacman.style.left = pacmanPosition.x * 20 + "px";
  console.log(pacman);
};

displayPacman();
displayWorld();

let coin = document.querySelector(".coin");

document.addEventListener("keydown", (event) => {
  if (
    event.keyCode == "38" ||
    (event.keyCode == "87" &&
      world[pacmanPosition.y - 1][pacmanPosition.x] != 1)
  ) {
    // up arrow
    pacman.style.transform = "rotate(270deg)";
    pacmanPosition.y--;
  } else if (
    event.keyCode == "40" ||
    (event.keyCode == "83" &&
      world[pacmanPosition.y + 1][pacmanPosition.x] != 1)
  ) {
    // down arrow
    pacman.style.transform = "rotate(90deg)";
    pacmanPosition.y++;
  } else if (
    event.keyCode == "39" ||
    (event.keyCode == "68" &&
      world[pacmanPosition.y][pacmanPosition.x + 1] != 1)
  ) {
    // right arrow
    pacman.style.transform = "rotate(0deg)";
    pacmanPosition.x++;
  } else if (
    event.keyCode == "37" ||
    (event.keyCode == "65" &&
      world[pacmanPosition.y][pacmanPosition.x - 1] != 1)
  ) {
    // left arrow
    pacman.style.transform = "rotate(180deg)";
    pacmanPosition.x--;
  }

  if (world[pacmanPosition.y][pacmanPosition.x] == 0) {
    world[pacmanPosition.y][pacmanPosition.x] = 2;
    displayWorld();
  } else if (world[pacmanPosition.y][pacmanPosition.x] == 1) {
  }

  displayPacman();
});

// up 38
//down 40
// right 39
// left 37

// w = 87
// a = 65
// s = 83
// d = 68
