const canvas = document.querySelector("canvas");

const c = canvas.getContext("2d");

canvas.width = 1024;
canvas.height = 576;

collisionsMap = [];
for (let i = 0; i < collisions.length; i += 200) {
  collisionsMap.push(collisions.slice(i, 200 + i));
}
watercollisionsMap = [];
for (let i = 0; i < watercollisions.length; i += 200) {
  watercollisionsMap.push(watercollisions.slice(i, 200 + i));
}
playeronlycollisionsMap = [];
for (let i = 0; i < playeronlycollisions.length; i += 200) {
  playeronlycollisionsMap.push(playeronlycollisions.slice(i, 200 + i));
}
const playeronlyboundaries = [];
const waterboundaries = [];
const boundaries = [];
const offset = {
  x: -140,
  y: -850,
};
collisionsMap.forEach((row, i) => {
  row.forEach((symbol, j) => {
    if (symbol === 1025)
      boundaries.push(
        new Boundary({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y,
          },
        })
      );
  });
});
watercollisionsMap.forEach((row, i) => {
  row.forEach((symbol, j) => {
    if (symbol === 1030)
      waterboundaries.push(
        new waterBoundary({
          position: {
            x: j * waterBoundary.width + offset.x,
            y: i * waterBoundary.height + offset.y,
          },
        })
      );
  });
});
playeronlycollisionsMap.forEach((row, i) => {
  row.forEach((symbol, j) => {
    if (symbol === 1031)
      playeronlyboundaries.push(
        new playeronlyBoundary({
          position: {
            x: j * playeronlyBoundary.width + offset.x,
            y: i * playeronlyBoundary.height + offset.y,
          },
        })
      );
  });
});

//random integer -------------------------------------------------------------------------------------- random integer
const rndInt = randomIntFromInterval(-250, 65);
function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);}
const rndInt1 = randomIntFromInterval(-250, 65);
const rndInt2 = randomIntFromInterval(-250, 65);
//random integer -------------------------------------------------------------------------------------- random integer

//Images ---------------------------------------------------------------------------------------------- Images
const image = new Image();
image.src = "./img/Map1.png";

const menuBackgroundIMG = new Image();
menuBackgroundIMG.src = "./img/menubackground.png";

const playButtonIMG = new Image();
playButtonIMG.src = "./img/playbutton.png";

const foregroundImage = new Image();
foregroundImage.src = "./img/foregroundobjects.png";

const discImage = new Image();
discImage.src = "./img/disc.png";

const discImage2 = new Image();
discImage2.src = "./img/disc2.png";

const discImage3 = new Image();
discImage3.src = "./img/discgold.png";

const controlpointIMG = new Image();
controlpointIMG.src = "./img/controlpoint.png";

const controlpointIMG2 = new Image();
controlpointIMG2.src = "./img/controlpoint2.png";

const controlpointIMG3 = new Image();
controlpointIMG3.src = "./img/controlpoint3.png";

const controlpointIMG4 = new Image();
controlpointIMG4.src = "./img/controlpoint4.png";

const controlpointIMG5 = new Image();
controlpointIMG5.src = "./img/controlpoint5.png";

const powerpoint1Img = new Image();
powerpoint1Img.src = "./img/powerpoint1.png";

const degreesIMG = new Image();
degreesIMG.src = "./img/powerlimit.png";

const playerDownImage = new Image();
playerDownImage.src = "./img/playerDown.png";

const angleIMG = new Image();
angleIMG.src = "./img/angleIMG.png";

const perfectIMG = new Image();
perfectIMG.src = "./img/perfect.png";

const dragImage = new Image();
dragImage.src = "./img/drag.png";

const aimLineimg = new Image();
aimLineimg.src = "./img/aimLineimg.png";

const discinbag1 = new Image();
discinbag1.src = "./img/discinpack.png";

const discinbag2 = new Image();
discinbag2.src = "./img/discinpack2.png";

const playerUpImage = new Image();
playerUpImage.src = "./img/playerUp.png";

const playerLeftImage = new Image();
playerLeftImage.src = "./img/playerLeft.png";

const playerRightImage = new Image();
playerRightImage.src = "./img/playerRight.png";

const eButton = new Image();
eButton.src = "./img/eButton.png";

const backpack = new Image();
backpack.src = "./img/backpack.png";

const cageImage = new Image();
cageImage.src = "./img/cage.png";

const dot = new Image();
dot.src = "./img/dot.png";

const inventory = new Image();
inventory.src = "./img/inventorylayout.png";
//Images ---------------------------------------------------------------------------------------------- Images

//Objects --------------------------------------------------------------------------------------------- Objects
const menuBackground = new Sprite({
  position: {
    x: 0,
    y: 0
  },
  image: menuBackgroundIMG,
});
const playButton = new Sprite({
  position: {
    x: 412,
    y: 238
  },
  image: playButtonIMG,
});


const player = new Sprite({
  position: {
    x: canvas.width / 2 - 56 / 4,
    y: canvas.height / 2 - 19,
  },
  image: playerDownImage,
  frames: {
    max: 4,
  },
  sprites: {
    up: playerUpImage,
    left: playerLeftImage,
    right: playerRightImage,
    down: playerDownImage,
  },
});

const circleDot = new Circle({
  position: {
    x: canvas.width / 2,
    y: canvas.height / 2,
  },
  image: dot,
  rotate: 0,
  player: player,
});

const angleMeter = new Circle({
  position: {
    x: canvas.width / 2,
    y: canvas.height / 2,
  },
  image: angleIMG,
  rotate: 0,
  player: player,
});
const aimLine = new Circle({
  position: {
    x: canvas.width / 2,
    y: canvas.height / 2,
  },
  image: aimLineimg,
  rotate: 0,
  player: player,
});

const controlpoint = new Control({
  position: {
    x: canvas.width / 2,
    y: canvas.height / 2,
  },
  image: controlpointIMG,
  rotate: 0,
  player: player,
  distance: 0,
  width: 1,
  height: 1
});
const controlpoint2 = new Control({
  position: {
    x: canvas.width / 2,
    y: canvas.height / 2,
  },
  image: controlpointIMG2,
  rotate: 0,
  player: player,
  distance: 0,
  width: 1,
  height: 1
});
const controlpoint3 = new Control({
  position: {
    x: canvas.width / 2,
    y: canvas.height / 2,
  },
  image: controlpointIMG3,
  rotate: 0,
  player: player,
  distance: 0,
  width: 1,
  height: 1
});
const controlpoint4 = new Control({
  position: {
    x: canvas.width / 2,
    y: canvas.height / 2,
  },
  image: controlpointIMG4,
  rotate: 0,
  player: player,
  distance: 0,
  width: 1,
  height: 1
});
const controlpoint5 = new Control({
  position: {
    x: canvas.width / 2,
    y: canvas.height / 2,
  },
  image: controlpointIMG5,
  rotate: 0,
  player: player,
  distance: 0,
  width: 1,
  height: 1
});
const powerpoint1 = new Control({
    position: {
      x: canvas.width / 2,
      y: canvas.height / 2,
    },
    image: powerpoint1Img,
    rotate: 0,
    player: player,
    distance: 0,
    width: 10,
    height: 10
  });
  const powerpoint2 = new Control({
    position: {
      x: (canvas.width / 2) ,
      y: (canvas.height / 2),
    },
    image: powerpoint1Img,
    rotate: 0,
    player: player,
    distance: 0,
    width: 10,
    height: 10
  });
  const powerpoint3 = new Control({
    position: {
      x: canvas.width / 2,
      y: canvas.height / 2,
    },
    image: powerpoint1Img,
    rotate: 0,
    player: player,
    distance: 0,
    width: 10,
  height: 10
  });

const degrees = new Circle({
    position: {
      x: (canvas.width / 2),
      y: (canvas.height / 2),
    },
    image: degreesIMG,
    player: player,
  });

const dragToMoveAround = new Sprite({
  position: {
    x: canvas.width / 2 - 150,
    y: canvas.height / 2 - 30,
  },
  image: dragImage,
});

const background = new Sprite({
  position: {
    x: offset.x,
    y: offset.y,
  },
  image: image,
});

const foreground = new Sprite({
  position: {
    x: offset.x,
    y: offset.y,
  },
  image: foregroundImage,
});
const perfect = new Sprite({
  position: {
    x: canvas.width / 2 - 25,
    y: canvas.height / 2 - 12.5
  },
  image: perfectIMG,
});

const disc1 = new Disc({
  position: {
    x: canvas.width / 2 - 7.5,
    y: canvas.height / 2 - 7.5,
  },
  image: discImage,
  width: 15,
  height: 15,
  picked: false,
  spin: 0.005,
  distance: 0,
  speed: 0.03,
  turn: 10,
  type: "Driver",
  startingspeed: 0.03,
});

const disc2 = new Disc({
  position: {
    x: rndInt2,
    y: rndInt2,
  },
  image: discImage2,
  picked: false,
  spin: -0.005,
  distance: 0,
  speed: 2.5,
  type: "Midrange",
  turn: 1,
  startingspeed: 0.04,
});
const disc3 = new Disc({
  position: {
    x: canvas.width / 2 - 7.5,
    y: canvas.height / 2 - 7.5,
  },
  image: discImage3,
  picked: false,
  speed: 3,
});

const cage = new Sprite({
  position: {
    x: 2572,
    y: -72,
  },
  image: cageImage,
});

const discinpack = new Sprite({
  position: {
    x: 120,
    y: canvas.height - 75,
  },
  image: discinbag1,
});

const discinpack2 = new Sprite({
  position: {
    x: 90,
    y: canvas.height - 75,
  },
  image: discinbag2,
});

const buttons = new Sprite({
  position: {
    x: canvas.width / 2 - 30,
    y: canvas.height / 2 + 68,
  },
  image: eButton,
});

const backPack = new Sprite({
  position: {
    x: 0,
    y: canvas.height - 100,
  },
  image: backpack,
});

const invent = new Sprite({
  position: {
    x: canvas.width / 2 - 250,
    y: canvas.height / 2 - 250,
  },
  image: inventory,
  hidden: true,
});

const Line1 = new Line({
  x1: canvas.width / 2,
  y1: canvas.height / 2,
  angle: 0,
  length: 0,
  color: "rgb(0, 0, 0, 0.2)"
});
const Line2 = new Line({
  x1: canvas.width / 2,
  y1: canvas.height / 2,
  angle: 0,
  length: 0,
  color: "rgb(100, 100, 100, 0.2)"
});
const Line3 = new Line({
  x1: canvas.width / 2,
  y1: canvas.height / 2,
  angle: 0,
  length: 20,
  color: "rgb(160, 234, 251, 1)"
});
const Line4 = new Line({
  x1: canvas.width / 2,
  y1: canvas.height / 2,
  angle: 0,
  length: 20,
  color: "rgb(160, 234, 251, 1)"
});
//Objects --------------------------------------------------------------------------------------------- Objects

//Keys --------------------------------------------------------------------------------------------- Keys
const keys = {
  w: {
    pressed: false,
  },
  a: {
    pressed: false,
  },
  s: {
    pressed: false,
  },
  d: {
    pressed: false,
  },
  e: {
    pressed: false,
  },
  b: {
    pressed: false,
  },
  q: {
    pressed: false,
  },
  m: {
    pressed: false,
  },
  mouseLeft: {
    pressed: false,
  },
  space: {
    pressed: false,
  },
};
//Keys --------------------------------------------------------------------------------------------- Keys

//Stored Pos ---------------------------------------------------------------------------------------- Stored Pos
let elementsPositionsBeforeMapMode = {
  background: { x: background.position.x, y: background.position.y },
  player: { x: player.position.x, y: player.position.y },
  foreground: { x: foreground.position.x, y: foreground.position.y },
  cage: { x: cage.position.x, y: cage.position.y },
  disc1: { x: disc1.position.x, y: disc1.position.y },
  disc2: { x: disc2.position.x, y: disc2.position.y },
  Line1: { x1: Line1.x1, y1: Line1.y1 },
  Line2: { x1: Line2.x1, y1: Line2.y1 },
  Line3: { x1: Line3.x1, y1: Line3.y1 },
  Line4: { x1: Line4.x1, y1: Line4.y1 },

};
//Stored Pos ---------------------------------------------------------------------------------------- Stored Pos

//Variables ---------------------------------------------------------------------------------------- Variables

let angleLock = false
let discInWater = false
let inCage = false
let borderHit = false
let outsideLeft = false
let outsideRight = false
let outside = false
let turnangleDifference = 0
let earlyturnAngle = 0
let travelAngleDifference = 0
let perfecto = false
let currentMouseX = 0
let currentMouseY = 0
let aimLineTurn = 0;
let aimlinePos = false;
let earlyTurn = 0;
let angleToDisc = 0;
let reflectionAngle = 0;
let distancefromdisc1 = 0;
let angleInRadians = 0;
let startanglecharge = 0;
let moveup = true;
let movedown = false;
let charging = false;
let turn = 0;
let discinitialAngle = null;
let initialAngle = null;
let initialAngle2 = null;
let initialAngle3 = null;
let initialAngle4 = null;
let isMouseMoving = false;
let power = 0;
let canShowMap = true;
let isThrowing = false;
let showHelpDragImage = false;
let mapMode = false;
let initialMouseX = 0;
let initialMouseY = 0;
let mouseDragging = false;
let mouseX = 0;
let mouseY = 0;
let landed = true;
let overlappingItem = "";
let canMove = true;
let u = 0;
let Bounce = false;
const movables = [background, ...boundaries, ...waterboundaries, ...playeronlyboundaries, foreground, cage];
const staticDisc = [disc1, disc2];
const items = [];
//Variables ---------------------------------------------------------------------------------------- Variables

//calculateAngle ---------------------------------------------------------------------------------------- calculateAngle
function calculateAngle(
  startPositionX,
  startPositionY,
  endPositionX,
  endPositionY
) {
  return Math.atan2(
    endPositionY - startPositionY,
    endPositionX - startPositionX
  );
}
//calculateAngle ---------------------------------------------------------------------------------------- calculateAngle

//pickUpItem ---------------------------------------------------------------------------------------- pickUpItem
function pickUpItem() {
  if (
    (player.pickup && overlappingItem === disc1) ||
    (player.pickup && overlappingItem === disc2)
  ) {
    canMove = false
    inCage = false
    overlappingItem.picked = true;
    items.push(overlappingItem);
    player.pickup = false;
    overlappingItem.landed = false;
    const ind = staticDisc.indexOf(overlappingItem);
    staticDisc.splice(ind, 1);
    (items[0].position.x = canvas.width / 2 - 7.5),
    (items[0].position.y = canvas.height / 2 - 7.5);
  }
}
//pickUpItem ---------------------------------------------------------------------------------------- pickUpItem


//MoveMap ---------------------------------------------------------------------------------------- MoveMap
function MoveMap(deltaX, deltaY) {
  background.position.x += deltaX;
  background.position.y += deltaY;

  foreground.position.x += deltaX;
  foreground.position.y += deltaY;

  cage.position.x += deltaX;
  cage.position.y += deltaY;

  disc1.position.x += deltaX;
  disc1.position.y += deltaY;

  disc2.position.x += deltaX;
  disc2.position.y += deltaY;

  player.position.x += deltaX;
  player.position.y += deltaY;

  Line1.x1 += deltaX;
  Line1.y1 += deltaY;

  Line2.x1 += deltaX;
  Line2.y1 += deltaY;

  Line3.x1 += deltaX;
  Line3.y1 += deltaY;

  Line4.x1 += deltaX;
  Line4.y1 += deltaY;
}

function mapModefunc() {
  canvas.addEventListener("mousedown", (event) => {
    if (event.button === 0) {
      keys.mouseLeft.pressed = true;
      initialMouseX = event.clientX - canvas.getBoundingClientRect().left;
      initialMouseY = event.clientY - canvas.getBoundingClientRect().top;
    }
  });
}
//MoveMap ---------------------------------------------------------------------------------------- MoveMap

//throwDisc ---------------------------------------------------------------------------------------- throwDisc
function throwDisc() {
  circleDot.moving = false;
  degrees.moving = false;
  angleMeter.moving = false
  aimLine.moving = false;
  canMove = false;
  for (let u = 0; u <= 300; u++) {
    Throwing(u);
  }

  function Throwing(u) {
    setTimeout(function () {
      items[0].update();
      discThrow(u);
      if (u >= 300) {
        circleDot.moving = true;
        angleMeter.moving = true
        degrees.moving = true;
        aimLine.moving = true;
        items[0].landed = true;
        controlpoint.angle = 0;
        controlpoint.position.x = canvas.width / 2;
        controlpoint.position.y = canvas.height / 2;
      }
    }, 10 * u);
  }
}
function discThrow(u) {
  disc1.tossed = true;
 if (!inCage) { 
   travelAngleDifference = angleDifference(
    (angleInRadians + earlyTurn) * (180 / Math.PI),
    startanglecharge * (180 / Math.PI)
  );
  
  
    if (u < 150 && travelAngleDifference < 90) {
      earlyTurn = earlyTurn + aimLineTurn * items[0].turn;
      cage.position.x += -power * Math.cos(angleInRadians + earlyTurn);
      cage.position.y += -power * Math.sin(angleInRadians + earlyTurn);

      foreground.position.x += -power * Math.cos(angleInRadians + earlyTurn);
      foreground.position.y += -power * Math.sin(angleInRadians + earlyTurn);

      perfect.position.x += -power * Math.cos(angleInRadians + earlyTurn);
      perfect.position.y += -power * Math.sin(angleInRadians + earlyTurn);

      background.position.x += -power * Math.cos(angleInRadians + earlyTurn);
      background.position.y += -power * Math.sin(angleInRadians + earlyTurn);

      player.position.x += -power * Math.cos(angleInRadians + earlyTurn);
      player.position.y += -power * Math.sin(angleInRadians + earlyTurn);

      disc2.position.x += -power * Math.cos(angleInRadians + earlyTurn);
      disc2.position.y += -power * Math.sin(angleInRadians + earlyTurn);

      Line1.x1 += -power * Math.cos(angleInRadians + earlyTurn);
      Line1.y1 += -power * Math.sin(angleInRadians + earlyTurn);

      Line2.x1 += -power * Math.cos(angleInRadians + earlyTurn);
      Line2.y1 += -power * Math.sin(angleInRadians + earlyTurn);

      Line3.x1 += -power * Math.cos(angleInRadians + earlyTurn);
      Line3.y1 += -power * Math.sin(angleInRadians + earlyTurn);

      Line4.x1 += -power * Math.cos(angleInRadians + earlyTurn);
      Line4.y1 += -power * Math.sin(angleInRadians + earlyTurn);

      boundaries.forEach((boundary) => {
        boundary.position.x += -power * Math.cos(angleInRadians + earlyTurn);
        boundary.position.y += -power * Math.sin(angleInRadians + earlyTurn); 
      });
      waterboundaries.forEach((waterboundary) => {
        waterboundary.position.x += -power * Math.cos(angleInRadians + earlyTurn);
        waterboundary.position.y += -power * Math.sin(angleInRadians + earlyTurn); 
      });
      playeronlyboundaries.forEach((playeronlyboundary) => {
        playeronlyboundary.position.x += -power * Math.cos(angleInRadians + earlyTurn);
        playeronlyboundary.position.y += -power * Math.sin(angleInRadians + earlyTurn); 
      });
    
      if (u === 149) {  
        
        earlyturnAngle = angleInRadians + earlyTurn
      } 
    }

      else if (u < 150 && travelAngleDifference > 90){
        cage.position.x += -power * Math.cos(angleInRadians + earlyTurn);
        cage.position.y += -power * Math.sin(angleInRadians + earlyTurn);
    
        foreground.position.x += -power * Math.cos(angleInRadians + earlyTurn);
        foreground.position.y += -power * Math.sin(angleInRadians + earlyTurn);
    
        perfect.position.x += -power * Math.cos(angleInRadians + earlyTurn);
        perfect.position.y += -power * Math.sin(angleInRadians + earlyTurn);
    
        background.position.x += -power * Math.cos(angleInRadians + earlyTurn);
        background.position.y += -power * Math.sin(angleInRadians + earlyTurn);
    
        player.position.x += -power * Math.cos(angleInRadians + earlyTurn);
        player.position.y += -power * Math.sin(angleInRadians + earlyTurn);
    
        disc2.position.x += -power * Math.cos(angleInRadians + earlyTurn);
        disc2.position.y += -power * Math.sin(angleInRadians + earlyTurn);

        Line1.x1 += -power * Math.cos(angleInRadians + earlyTurn);
        Line1.y1 += -power * Math.sin(angleInRadians + earlyTurn);

        Line2.x1 += -power * Math.cos(angleInRadians + earlyTurn);
        Line2.y1 += -power * Math.sin(angleInRadians + earlyTurn);

        Line3.x1 += -power * Math.cos(angleInRadians + earlyTurn);
        Line3.y1 += -power * Math.sin(angleInRadians + earlyTurn);

        Line4.x1 += -power * Math.cos(angleInRadians + earlyTurn);
        Line4.y1 += -power * Math.sin(angleInRadians + earlyTurn);

        boundaries.forEach((boundary) => {
          boundary.position.x += -power * Math.cos(angleInRadians + earlyTurn);
          boundary.position.y += -power * Math.sin(angleInRadians + earlyTurn);
        });
        waterboundaries.forEach((waterboundary) => {
          waterboundary.position.x += -power * Math.cos(angleInRadians + earlyTurn);
          waterboundary.position.y += -power * Math.sin(angleInRadians + earlyTurn);
        });
        playeronlyboundaries.forEach((playeronlyboundary) => {
          playeronlyboundary.position.x += -power * Math.cos(angleInRadians + earlyTurn);
          playeronlyboundary.position.y += -power * Math.sin(angleInRadians + earlyTurn);
        });

        if (u === 149) {   
          earlyturnAngle = angleInRadians + earlyTurn }
      }
    if (u > 150 && turnangleDifference < 90) {
      perfecto = false
      perfect.position.x = canvas.width / 2 - 25
      perfect.position.y = canvas.height / 2 - 12.5

      earlyTurn = earlyTurn + (turn / 10) * items[0].turn;

      turnangleDifference = angleDifference(
        (angleInRadians + earlyTurn) * (180 / Math.PI),
        earlyturnAngle * (180 / Math.PI))

      cage.position.x += -power * Math.cos(angleInRadians + earlyTurn);
      cage.position.y += -power * Math.sin(angleInRadians + earlyTurn);

      foreground.position.x += -power * Math.cos(angleInRadians + earlyTurn);
      foreground.position.y += -power * Math.sin(angleInRadians + earlyTurn);

      perfect.position.x += -power * Math.cos(angleInRadians + earlyTurn);
      perfect.position.y += -power * Math.sin(angleInRadians + earlyTurn);

      background.position.x += -power * Math.cos(angleInRadians + earlyTurn);
      background.position.y += -power * Math.sin(angleInRadians + earlyTurn);

      player.position.x += -power * Math.cos(angleInRadians + earlyTurn);
      player.position.y += -power * Math.sin(angleInRadians + earlyTurn);

      disc2.position.x += -power * Math.cos(angleInRadians + earlyTurn);
      disc2.position.y += -power * Math.sin(angleInRadians + earlyTurn);

      Line1.x1 += -power * Math.cos(angleInRadians + earlyTurn);
      Line1.y1 += -power * Math.sin(angleInRadians + earlyTurn);

      Line2.x1 += -power * Math.cos(angleInRadians + earlyTurn);
      Line2.y1 += -power * Math.sin(angleInRadians + earlyTurn);

      Line3.x1 += -power * Math.cos(angleInRadians + earlyTurn);
      Line3.y1 += -power * Math.sin(angleInRadians + earlyTurn);

      Line4.x1 += -power * Math.cos(angleInRadians + earlyTurn);
      Line4.y1 += -power * Math.sin(angleInRadians + earlyTurn);

      boundaries.forEach((boundary) => {
        boundary.position.x += -power * Math.cos(angleInRadians + earlyTurn);
        boundary.position.y += -power * Math.sin(angleInRadians + earlyTurn);
      });
      waterboundaries.forEach((waterboundary) => {
        waterboundary.position.x += -power * Math.cos(angleInRadians + earlyTurn);
        waterboundary.position.y += -power * Math.sin(angleInRadians + earlyTurn);
      });
      playeronlyboundaries.forEach((playeronlyboundary) => {
        playeronlyboundary.position.x += -power * Math.cos(angleInRadians + earlyTurn);
        playeronlyboundary.position.y += -power * Math.sin(angleInRadians + earlyTurn);
      });
    }
    else if (u > 150 && turnangleDifference > 90){
      turn = 0
      perfecto = false
      cage.position.x += -power * Math.cos(angleInRadians + earlyTurn);
      cage.position.y += -power * Math.sin(angleInRadians + earlyTurn);
  
      foreground.position.x += -power * Math.cos(angleInRadians + earlyTurn);
      foreground.position.y += -power * Math.sin(angleInRadians + earlyTurn);
  
      perfect.position.x += -power * Math.cos(angleInRadians + earlyTurn);
      perfect.position.y += -power * Math.sin(angleInRadians + earlyTurn);
  
      background.position.x += -power * Math.cos(angleInRadians + earlyTurn);
      background.position.y += -power * Math.sin(angleInRadians + earlyTurn);
  
      player.position.x += -power * Math.cos(angleInRadians + earlyTurn);
      player.position.y += -power * Math.sin(angleInRadians + earlyTurn);
  
      disc2.position.x += -power * Math.cos(angleInRadians + earlyTurn);
      disc2.position.y += -power * Math.sin(angleInRadians + earlyTurn);

      Line1.x1 += -power * Math.cos(angleInRadians + earlyTurn);
      Line1.y1 += -power * Math.sin(angleInRadians + earlyTurn);

      Line2.x1 += -power * Math.cos(angleInRadians + earlyTurn);
      Line2.y1 += -power * Math.sin(angleInRadians + earlyTurn);

      Line3.x1 += -power * Math.cos(angleInRadians + earlyTurn);
      Line3.y1 += -power * Math.sin(angleInRadians + earlyTurn);

      Line4.x1 += -power * Math.cos(angleInRadians + earlyTurn);
      Line4.y1 += -power * Math.sin(angleInRadians + earlyTurn);
  
      boundaries.forEach((boundary) => {
        boundary.position.x += -power * Math.cos(angleInRadians + earlyTurn);
        boundary.position.y += -power * Math.sin(angleInRadians + earlyTurn);
        if (u === 150) {travelAngleDifference = 0}
      });
      waterboundaries.forEach((waterboundary) => {
        waterboundary.position.x += -power * Math.cos(angleInRadians + earlyTurn);
        waterboundary.position.y += -power * Math.sin(angleInRadians + earlyTurn);
        if (u === 150) {travelAngleDifference = 0}
      });
      playeronlyboundaries.forEach((playeronlyboundary) => {
        playeronlyboundary.position.x += -power * Math.cos(angleInRadians + earlyTurn);
        playeronlyboundary.position.y += -power * Math.sin(angleInRadians + earlyTurn);
        if (u === 150) {travelAngleDifference = 0}
      });
    }
  alpha1 = player.position.x - disc1.position.x;
  alpha2 = player.position.y - disc1.position.y;

  distancefromdisc1 = Math.sqrt(alpha1 * alpha1 + alpha2 * alpha2);
}
else if (inCage) {
      perfecto = false
      perfect.position.x = canvas.width / 2 - 25
      perfect.position.y = canvas.height / 2 - 12.5
}
}

//throwDisc ---------------------------------------------------------------------------------------- throwDisc


//angleDifference ---------------------------------------------------------------------------------------- angleDifference
function angleDifference(angle1, angle2) {
  angle1 = ((angle1 % 360) + 360) % 360;
  angle2 = ((angle2 % 360) + 360) % 360;

  let diff = Math.abs(angle1 - angle2);

  if (diff > 180) {
    diff = 360 - diff;
  }

  return diff;
}
//angleDifference ---------------------------------------------------------------------------------------- angleDifference

//rectangularCollision ---------------------------------------------------------------------------------------- rectangularCollision
function rectangularCollision({ rectangle1, rectangle2 }) {
  
  return (
    rectangle1.position.x + rectangle1.width >= rectangle2.position.x &&
    rectangle1.position.x <= rectangle2.position.x + rectangle2.width &&
    rectangle1.position.y <= rectangle2.position.y + rectangle2.height &&
    rectangle1.position.y + rectangle1.height >= rectangle2.position.y
  );
}
//rectangularCollision ---------------------------------------------------------------------------------------- rectangularCollision

//Animate ---------------------------------------------------------------------------------------- Animate

function animateMenu() {
  const animationID = window.requestAnimationFrame(animateMenu);
  menuBackground.draw()
  playButton.draw()
  
}
animateMenu()




//Draw ---------------------------------------------------------------- Draw
function animate() {
 const animationID = window.requestAnimationFrame(animate);
  background.draw();
  player.draw();
  disc1.draw();
  disc2.draw();
  if (isThrowing && !mapMode ) {
    items[0].draw();
  }
  foreground.draw();
  if (charging && !mapMode) {
    items[0].draw();
  }
  if (disc1.picked) {
    discinpack.draw();
}
  if (disc2.picked) {
    discinpack2.draw();
}
  backPack.draw();
  if (items.includes(disc1) || items.includes(disc2)) {
    Line1.draw()
    Line2.draw()
    Line3.draw()
    Line4.draw()
    circleDot.draw();
  if (!angleLock) {
    if (!charging && !disc1.tossed) {
    Line1.length = (150 * items[0].speed) * 300;
    Line1.angle = circleDot.angle
    Line2.length = (150 * items[0].speed) * 150;
    Line2.angle = circleDot.angle
    Line3.x1 = Line2.x1 + Math.cos(Line2.angle) * Line2.length
    Line3.y1 = Line2.y1 + Math.sin(Line2.angle) * Line2.length
    Line3.angle = Line2.angle + Math.PI / 2
    Line4.x1 = Line2.x1 + Math.cos(Line2.angle) * Line2.length
    Line4.y1 = Line2.y1 + Math.sin(Line2.angle) * Line2.length
    Line4.angle = Line2.angle + -Math.PI / 2
  }
  if (!charging && disc1.tossed) {
      Line1.length = power * 300;
    Line1.angle = circleDot.angle
    Line2.length = power * 300;
    Line2.angle = circleDot.angle
    Line3.x1 = Line2.x1 + Math.cos(Line2.angle) * Line2.length
    Line3.y1 = Line2.y1 + Math.sin(Line2.angle) * Line2.length
    Line3.angle = angleInRadians + Math.PI / 2
    Line4.x1 = Line2.x1 + Math.cos(Line2.angle) * Line2.length
    Line4.y1 = Line2.y1 + Math.sin(Line2.angle) * Line2.length
    Line4.angle = angleInRadians + -Math.PI / 2
    }
}
    if (charging) {
    Line2.length = power * 150
    Line1.length = power * 300;
    Line1.angle = circleDot.angle
    Line3.x1 = Line2.x1 + Math.cos(Line2.angle) * Line2.length
    Line3.y1 = Line2.y1 + Math.sin(Line2.angle) * Line2.length
    Line3.angle = angleInRadians + Math.PI / 2
    Line4.x1 = Line2.x1 + Math.cos(Line2.angle) * Line2.length
    Line4.y1 = Line2.y1 + Math.sin(Line2.angle) * Line2.length
    Line4.angle = angleInRadians + -Math.PI / 2

    angleMeter.draw()
    aimLine.draw();
    powerpoint1.draw()
    powerpoint2.draw()
    powerpoint3.draw()
    degrees.draw()
  }}
if (perfecto) {
  perfect.draw()
}
  boundaries.forEach((boundary) => {
    boundary.draw();
  });

waterboundaries.forEach((waterboundary) => {
    waterboundary.draw();
  });
  playeronlyboundaries.forEach((playeronlyboundary) => {
    playeronlyboundary.draw();
  });
  
  if (player.pickup && !disc1.picked) {
    buttons.draw();
  }
  if (player.pickup && !disc2.picked) {
    buttons.draw();
  }

  
  if (showHelpDragImage) {
    dragToMoveAround.draw();
  }
cage.draw();

//Draw ---------------------------------------------------------------- Draw

//Landed ---------------------------------------------------------------- Landed
  if (items.includes(items[0]) && items[0].landed) {
    for (let i = 0; i < waterboundaries.length; i++) {
      const waterboundary = waterboundaries[i];
  
      if (
        rectangularCollision({
          rectangle1: {
            ...waterboundary,
            position: {
              x: waterboundary.position.x,
              y: waterboundary.position.y,
            },
          },
          rectangle2: {
            ...disc1,
            position: {
              x: disc1.position.x + power,
              y: disc1.position.y + power,
            },
          },
        })
      ) {
        discInWater = true
      } 
    }
    if (discInWater) {
    turn = 0;
    aimLineTurn = 0;
    aimlinePos = false;
    earlyTurn = 0;
    power = 0
    overpass = false;
    items[0].speed = items[0].startingspeed;
    items[0].tossed = false;
    Bounce = false;
    turnangleDifference = 0
    canShowMap = true;
    isThrowing = false;
    perfect.position.x = canvas.width / 2 - 25
    perfect.position.y = canvas.height / 2 - 12.5
    setTimeout(() => {
      background.position.x = elementsPositionsBeforeMapMode.background.x;
      background.position.y = elementsPositionsBeforeMapMode.background.y;
      

      player.position.x = elementsPositionsBeforeMapMode.player.x;
      player.position.y = elementsPositionsBeforeMapMode.player.y;

      foreground.position.x = elementsPositionsBeforeMapMode.foreground.x;
      foreground.position.y = elementsPositionsBeforeMapMode.foreground.y;

      cage.position.x = elementsPositionsBeforeMapMode.cage.x;
      cage.position.y = elementsPositionsBeforeMapMode.cage.y;

      disc1.position.x =
        canvas.width / 2 -7.5
      disc1.position.y =
      canvas.height / 2 -7.5

      disc2.position.x = elementsPositionsBeforeMapMode.disc2.x;
      disc2.position.y = elementsPositionsBeforeMapMode.disc2.y;

      Line1.x1 = elementsPositionsBeforeMapMode.Line1.x1;
      Line1.y1 = elementsPositionsBeforeMapMode.Line1.y1;

      Line2.x1 = elementsPositionsBeforeMapMode.Line2.x1;
      Line2.y1 = elementsPositionsBeforeMapMode.Line2.y1;

      Line3.x1 = elementsPositionsBeforeMapMode.Line3.x1;
      Line3.y1 = elementsPositionsBeforeMapMode.Line3.y1;

      Line4.x1 = elementsPositionsBeforeMapMode.Line4.x1;
      Line4.y1 = elementsPositionsBeforeMapMode.Line4.y1;

      boundaries.forEach((boundary, index) => {
        boundary.position.x =
          elementsPositionsBeforeMapMode[`boundary${index}`].x;
        boundary.position.y =
          elementsPositionsBeforeMapMode[`boundary${index}`].y;
      });
      waterboundaries.forEach((waterboundary, index) => {
        waterboundary.position.x =
          elementsPositionsBeforeMapMode[`waterboundary${index}`].x;
        waterboundary.position.y =
          elementsPositionsBeforeMapMode[`waterboundary${index}`].y;
      });
      playeronlyboundaries.forEach((playeronlyboundary, index) => {
        playeronlyboundary.position.x =
          elementsPositionsBeforeMapMode[`playeronlyboundary${index}`].x;
          playeronlyboundary.position.y =
          elementsPositionsBeforeMapMode[`playeronlyboundary${index}`].y;
      });
      canMove = false;
      items[0].landed = false
      discInWater = false
    }, 1500);
    }
    if (!discInWater) {
    items[0].picked = false;
    turn = 0;
    aimLineTurn = 0;
    aimlinePos = false;
    earlyTurn = 0;
    power = 0
    angleLock = false
    overpass = false;
    items[0].speed = items[0].startingspeed;
    items[0].tossed = false;
    Bounce = false;
    turnangleDifference = 0
    canShowMap = true;
    isThrowing = false;
    perfect.position.x = canvas.width / 2 - 25
    perfect.position.y = canvas.height / 2 - 12.5
    angleToDisc =
        Math.atan2(
          player.position.y - disc1.position.y,
          player.position.x - disc1.position.x
        ) + Math.PI;
    staticDisc.push(items[0]);
    items.shift();
    setTimeout(() => {
      background.position.x = elementsPositionsBeforeMapMode.background.x;
      background.position.y = elementsPositionsBeforeMapMode.background.y;
      

      player.position.x = elementsPositionsBeforeMapMode.player.x;
      player.position.y = elementsPositionsBeforeMapMode.player.y;

      foreground.position.x = elementsPositionsBeforeMapMode.foreground.x;
      foreground.position.y = elementsPositionsBeforeMapMode.foreground.y;

      cage.position.x = elementsPositionsBeforeMapMode.cage.x;
      cage.position.y = elementsPositionsBeforeMapMode.cage.y;

      Line1.x1 = elementsPositionsBeforeMapMode.Line1.x1;
      Line1.y1 = elementsPositionsBeforeMapMode.Line1.y1;

      Line2.x1 = elementsPositionsBeforeMapMode.Line2.x1;
      Line2.y1 = elementsPositionsBeforeMapMode.Line2.y1;

      Line3.x1 = elementsPositionsBeforeMapMode.Line3.x1;
      Line3.y1 = elementsPositionsBeforeMapMode.Line3.y1;

      Line4.x1 = elementsPositionsBeforeMapMode.Line4.x1;
      Line4.y1 = elementsPositionsBeforeMapMode.Line4.y1;
if (inCage) {
  disc1.position.x = cage.position.x + 7-5
  disc1.position.y = cage.position.y + 7-5
}
  else {
      disc1.position.x =
        player.position.x + distancefromdisc1 * Math.cos(angleToDisc);
      disc1.position.y =
        player.position.y + distancefromdisc1 * Math.sin(angleToDisc);
}
      disc2.position.x = elementsPositionsBeforeMapMode.disc2.x;
      disc2.position.y = elementsPositionsBeforeMapMode.disc2.y;

      boundaries.forEach((boundary, index) => {
        boundary.position.x =
          elementsPositionsBeforeMapMode[`boundary${index}`].x;
        boundary.position.y =
          elementsPositionsBeforeMapMode[`boundary${index}`].y;
      });
      waterboundaries.forEach((waterboundary, index) => {
        waterboundary.position.x =
          elementsPositionsBeforeMapMode[`waterboundary${index}`].x;
        waterboundary.position.y =
          elementsPositionsBeforeMapMode[`waterboundary${index}`].y;
      });
      playeronlyboundaries.forEach((playeronlyboundary, index) => {
        playeronlyboundary.position.x =
          elementsPositionsBeforeMapMode[`playeronlyboundary${index}`].x;
          playeronlyboundary.position.y =
          elementsPositionsBeforeMapMode[`playeronlyboundary${index}`].y;
      });
      canMove = true;
    }, 1500);
  }}
//Landed ---------------------------------------------------------------- Landed

//Landed ---------------------------------------------------------------- Landed
  let moving = true;
  player.moving = false;

  if (charging) {
    if (power > 0) {
      if (aimLine.angle > startanglecharge) {
        aimlinePos = false;
      }
      if (aimLine.angle < startanglecharge) {
        aimlinePos = true;
      }

      if (moveup) {
        aimLine.angle += power / 200;
        if (aimLine.angle > startanglecharge + 1) {
          moveup = false;
          movedown = true;
        }
      }
      if (movedown) {
        aimLine.angle -= power / 200;
        if (aimLine.angle < startanglecharge - 1) {
          moveup = true;
          movedown = false;
        }
      }
    }
    if (power > 2) {
     
    }
    else {
      

    }
  }
  function calculateReflectionAngle(incidenceAngle) {
    while (incidenceAngle < 0) {
      incidenceAngle += 2 * Math.PI;
    }
    while (incidenceAngle >= 2 * Math.PI) {
      incidenceAngle -= 2 * Math.PI;
    }

    return incidenceAngle;
  }

  if (
    rectangularCollision({
      rectangle1: {
        ...cage,
        position: {
          x: cage.position.x,
          y: cage.position.y,
        },
      },
      rectangle2: {
        ...disc1,
        position: {
          x: disc1.position.x + power,
          y: disc1.position.y + power,
        },
      },
    }) 
  && !mapMode && !canMove && disc1.tossed) {
    disc1.position.x = cage.position.x  + 7-5
    disc1.position.y = cage.position.y + 7-5
    inCage = true
  }


  if (!canMove && !mapMode && disc1.tossed) {
    for (let i = 0; i < boundaries.length; i++) {
      const boundary = boundaries[i];

      if (
        rectangularCollision({
          rectangle1: {
            ...boundary,
            position: {
              x: boundary.position.x,
              y: boundary.position.y,
            },
          },
          rectangle2: {
            ...disc1,
            position: {
              x: disc1.position.x + power,
              y: disc1.position.y + power,
            },
          },
        }) &&
        !Bounce
      ) {
        const incidenceAngle = Math.atan2(
          disc1.position.y - boundary.position.y,
          disc1.position.x - boundary.position.x
        );

        Bounce = true;
        reflectionAngle = calculateReflectionAngle(incidenceAngle);

        angleInRadians = reflectionAngle;
        disc1.reduceSpeed();
        break;
      }
    }
  }

  if (!canMove && !mapMode && disc2.tossed) {
    for (let i = 0; i < boundaries.length; i++) {
      const boundary = boundaries[i];

      if (
        rectangularCollision({
          rectangle1: {
            ...boundary,
            position: {
              x: boundary.position.x,
              y: boundary.position.y,
            },
          },
          rectangle2: {
            ...disc2,
            position: {
              x: disc2.position.x + disc2.speed,
              y: disc2.position.y + disc2.speed,
            },
          },
        }) &&
        !Bounce
      ) {
        const incidenceAngle = Math.atan2(
          disc2.position.y - boundary.position.y,
          disc2.position.x - boundary.position.x
        );
        Bounce = true;
        reflectionAngle = calculateReflectionAngle(incidenceAngle);
        disc2.reduceSpeed();
        break;
      }
    }
  }

  if (keys.w.pressed && lastKey === "w" && canMove) {
    player.moving = true;
    player.image = player.sprites.up;
    
    for (let i = 0; i < playeronlyboundaries.length; i++) {
      const playeronlyboundary = playeronlyboundaries[i];
      if (
        rectangularCollision({
          rectangle1: player,
          rectangle2: {
            ...playeronlyboundary,
            position: {
              x: playeronlyboundary.position.x,
              y: playeronlyboundary.position.y + 1.5,
            },
          },
        })
      ) {
        standing = true;
        moving = false;
        break;
      }}

    for (let i = 0; i < boundaries.length; i++) {
      const boundary = boundaries[i];
      if (
        rectangularCollision({
          rectangle1: player,
          rectangle2: {
            ...boundary,
            position: {
              x: boundary.position.x,
              y: boundary.position.y + 1.5,
            },
          },
        })
      ) {
        standing = true;
        moving = false;
        break;
      }

      if (
        rectangularCollision({
          rectangle1: player,
          rectangle2: {
            ...disc1,
            position: {
              x: disc1.position.x,
              y: disc1.position.y + 1.5,
            },
          },
        }) &&
        !disc1.picked
      ) {
        moving = false;
        overlappingItem = disc1;
        player.pickup = true;
        break;
      }

      if (
        rectangularCollision({
          rectangle1: player,
          rectangle2: {
            ...disc2,
            position: {
              x: disc2.position.x,
              y: disc2.position.y + 1.5,
            },
          },
        }) &&
        !disc2.picked
      ) {
        moving = false;
        overlappingItem = disc2;
        player.pickup = true;
        break;
      } else {
        player.pickup = false;
      }
    }

    if (moving) {
      movables.forEach((movable) => {
        movable.position.y += 1.5;
      });
      staticDisc.forEach((disk) => {
        disk.position.y += 1.5;
      });
    }
  } else if (keys.a.pressed && lastKey === "a" && canMove) {
    player.moving = true;
    player.image = player.sprites.left;

    for (let i = 0; i < playeronlyboundaries.length; i++) {
      const playeronlyboundary = playeronlyboundaries[i];
      if (
        rectangularCollision({
          rectangle1: player,
          rectangle2: {
            ...playeronlyboundary,
            position: {
              x: playeronlyboundary.position.x + 1.5,
              y: playeronlyboundary.position.y,
            },
          },
        })
      ) {
        moving = false;
        break;
      }}

    for (let i = 0; i < boundaries.length; i++) {
      const boundary = boundaries[i];
      if (
        rectangularCollision({
          rectangle1: player,
          rectangle2: {
            ...boundary,
            position: {
              x: boundary.position.x + 1.5,
              y: boundary.position.y,
            },
          },
        })
      ) {
        moving = false;
        break;
      }
      if (
        rectangularCollision({
          rectangle1: player,
          rectangle2: {
            ...disc1,
            position: {
              x: disc1.position.x + 1.5,
              y: disc1.position.y,
            },
          },
        }) &&
        !disc1.picked
      ) {
        moving = false;
        overlappingItem = disc1;
        player.pickup = true;
        break;
      }
      if (
        rectangularCollision({
          rectangle1: player,
          rectangle2: {
            ...disc2,
            position: {
              x: disc2.position.x + 1.5,
              y: disc2.position.y,
            },
          },
        }) &&
        !disc2.picked
      ) {
        moving = false;
        overlappingItem = disc2;
        player.pickup = true;
        break;
      } else player.pickup = false;
    }
    if (moving) {
      movables.forEach((movable) => {
        movable.position.x += 1.5;
      });
      staticDisc.forEach((disk) => {
        disk.position.x += 1.5;
      });
    }
  } else if (keys.s.pressed && lastKey === "s" && canMove) {
    player.moving = true;
    player.image = player.sprites.down;

    for (let i = 0; i < playeronlyboundaries.length; i++) {
      const playeronlyboundary = playeronlyboundaries[i];
      if (
        rectangularCollision({
          rectangle1: player,
          rectangle2: {
            ...playeronlyboundary,
            position: {
              x: playeronlyboundary.position.x,
              y: playeronlyboundary.position.y - 1.5,
            },
          },
        })
      ) {
        moving = false;
        break;
      }}

    for (let i = 0; i < boundaries.length; i++) {
      const boundary = boundaries[i];
      if (
        rectangularCollision({
          rectangle1: player,
          rectangle2: {
            ...boundary,
            position: {
              x: boundary.position.x,
              y: boundary.position.y - 1.5,
            },
          },
        })
      ) {
        moving = false;
        break;
      }
      if (
        rectangularCollision({
          rectangle1: player,
          rectangle2: {
            ...disc1,
            position: {
              x: disc1.position.x,
              y: disc1.position.y - 1.5,
            },
          },
        }) &&
        !disc1.picked
      ) {
        moving = false;
        overlappingItem = disc1;
        player.pickup = true;
        break;
      }
      if (
        rectangularCollision({
          rectangle1: player,
          rectangle2: {
            ...disc2,
            position: {
              x: disc2.position.x,
              y: disc2.position.y - 1.5,
            },
          },
        }) &&
        !disc2.picked
      ) {
        moving = false;
        overlappingItem = disc2;
        player.pickup = true;
        break;
      } else player.pickup = false;
    }
    if (moving) {
      movables.forEach((movable) => {
        movable.position.y -= 1.5;
      });
      staticDisc.forEach((disk) => {
        disk.position.y -= 1.5;
      });
    }
  } else if (keys.d.pressed && lastKey === "d" && canMove) {
    player.moving = true;
    player.image = player.sprites.right;

    for (let i = 0; i < playeronlyboundaries.length; i++) {
      const playeronlyboundary = playeronlyboundaries[i];
      if (
        rectangularCollision({
          rectangle1: player,
          rectangle2: {
            ...playeronlyboundary,
            position: {
              x: playeronlyboundary.position.x - 1.5,
              y: playeronlyboundary.position.y,
            },
          },
        })
      ) {
        moving = false;
        break;
      }}

    for (let i = 0; i < boundaries.length; i++) {
      const boundary = boundaries[i];
      if (
        rectangularCollision({
          rectangle1: player,
          rectangle2: {
            ...boundary,
            position: {
              x: boundary.position.x - 1.5,
              y: boundary.position.y,
            },
          },
        })
      ) {
        moving = false;
        break;
      }
      if (
        rectangularCollision({
          rectangle1: player,
          rectangle2: {
            ...disc1,
            position: {
              x: disc1.position.x - 1.5,
              y: disc1.position.y,
            },
          },
        }) &&
        !disc1.picked
      ) {
        moving = false;
        overlappingItem = disc1;
        player.pickup = true;
        break;
      }
      if (
        rectangularCollision({
          rectangle1: player,
          rectangle2: {
            ...disc2,
            position: {
              x: disc2.position.x - 1.5,
              y: disc2.position.y,
            },
          },
        }) &&
        !disc2.picked
      ) {
        moving = false;
        overlappingItem = disc2;
        player.pickup = true;
        break;
      } else player.pickup = false;
    }
    if (moving) {
      movables.forEach((movable) => {
        movable.position.x -= 1.5;
      });
      staticDisc.forEach((disk) => {
        disk.position.x -= 1.5;
      });
    }
  }
}

//Animate ---------------------------------------------------------------------------------------- Animate

//Keys ---------------------------------------------------------------------------------------- Keys
let lastKey = "";
window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "w":
      keys.w.pressed = true;
      lastKey = "w";
      break;
    case "a":
      keys.a.pressed = true;
      lastKey = "a";
      break;
    case "s":
      keys.s.pressed = true;
      lastKey = "s";
      break;
    case "d":
      keys.d.pressed = true;
      lastKey = "d";
      break;
    case "q":
      if (canShowMap) {
        mapMode = !mapMode;
        keys.q.pressed = true;
        circleDot.moving = false
        degrees.moving = false;
        angleMeter.moving = false
        aimLine.moving = false
        if (mapMode) {
          canMove = false;
          showHelpDragImage = true;
          elementsPositionsBeforeMapMode = {
            background: { x: background.position.x, y: background.position.y },
            player: { x: player.position.x, y: player.position.y },
            foreground: { x: foreground.position.x, y: foreground.position.y },
            cage: { x: cage.position.x, y: cage.position.y },
            disc1: { x: disc1.position.x, y: disc1.position.y },
            disc2: { x: disc2.position.x, y: disc2.position.y },
            Line1: { x1: Line1.x1, y1: Line1.y1 },
            Line2: { x1: Line2.x1, y1: Line2.y1 },
            Line3: { x1: Line3.x1, y1: Line3.y1 },
            Line4: { x1: Line4.x1, y1: Line4.y1 },
          };

          boundaries.forEach((boundary, index) => {
            elementsPositionsBeforeMapMode[`boundary${index}`] = {
              x: boundary.position.x,
              y: boundary.position.y,
            };
          });
          waterboundaries.forEach((waterboundary, index) => {
            elementsPositionsBeforeMapMode[`waterboundary${index}`] = {
              x: waterboundary.position.x,
              y: waterboundary.position.y,
            };
          });
          playeronlyboundaries.forEach((playeronlyboundary, index) => {
            elementsPositionsBeforeMapMode[`playeronlyboundary${index}`] = {
              x: playeronlyboundary.position.x,
              y: playeronlyboundary.position.y,
            };
          });

          mapModefunc();
        } else {
          if (!items.includes(disc1)){
            canMove = true
          }
          if (angleLock) {
            circleDot.moving = false
            degrees.moving = false
            angleMeter.moving = false
            aimLine.moving = false
          }
          if (!angleLock) {
          circleDot.moving = true
          degrees.moving = true
          angleMeter.moving = true
          aimLine.moving = true
        }
          background.position.x = elementsPositionsBeforeMapMode.background.x;
          background.position.y = elementsPositionsBeforeMapMode.background.y;

          player.position.x = elementsPositionsBeforeMapMode.player.x;
          player.position.y = elementsPositionsBeforeMapMode.player.y;

          foreground.position.x = elementsPositionsBeforeMapMode.foreground.x;
          foreground.position.y = elementsPositionsBeforeMapMode.foreground.y;

          cage.position.x = elementsPositionsBeforeMapMode.cage.x;
          cage.position.y = elementsPositionsBeforeMapMode.cage.y;

          disc1.position.x = elementsPositionsBeforeMapMode.disc1.x;
          disc1.position.y = elementsPositionsBeforeMapMode.disc1.y;

          disc2.position.x = elementsPositionsBeforeMapMode.disc2.x;
          disc2.position.y = elementsPositionsBeforeMapMode.disc2.y;

          Line1.x1 = elementsPositionsBeforeMapMode.Line1.x1;
          Line1.y1 = elementsPositionsBeforeMapMode.Line1.y1;

          Line2.x1 = elementsPositionsBeforeMapMode.Line2.x1;
          Line2.y1 = elementsPositionsBeforeMapMode.Line2.y1;

          Line3.x1 = elementsPositionsBeforeMapMode.Line3.x1;
          Line3.y1 = elementsPositionsBeforeMapMode.Line3.y1;

          Line4.x1 = elementsPositionsBeforeMapMode.Line4.x1;
          Line4.y1 = elementsPositionsBeforeMapMode.Line4.y1;
          showHelpDragImage = false;
        }
      }
      break;
    case "e":
      keys.e.pressed = true;
      pickUpItem();
      break;
    case "b":
      keys.b.pressed = true;
      break;
    case "m":
        keys.m.pressed = true;
    break;
    case " ":
      keys.space.pressed = true;
      angleLock = !angleLock
      if (angleLock) {
          circleDot.moving = false
          degrees.moving = false
          angleMeter.moving = false
          aimLine.moving = false
      }
      if (!angleLock) {
        circleDot.moving = true
        degrees.moving = true
          angleMeter.moving = true
          aimLine.moving = true
        
    }
  break;
  }
});

window.addEventListener("keyup", (e) => {
  switch (e.key) {
    case "w":
      keys.w.pressed = false;
      break;
    case "a":
      keys.a.pressed = false;
      break;
    case "s":
      keys.s.pressed = false;
      break;
    case "d":
      keys.d.pressed = false;
      break;
    case "m":
      keys.m.pressed = false;
      break;
    case "b":
      keys.b.pressed = false;
      break;
    case "q":
      keys.q.pressed = false;
      break;
      case " ":
      keys.space.pressed = false;
      break;
  }
});

//Mousemove ---------------------------------------------------------------------------------------- Mousemove
canvas.addEventListener("mousemove", (event) => {
  if (mapMode) {
    isMouseMoving = true;
    mouseX = event.clientX - canvas.getBoundingClientRect().left;
    mouseY = event.clientY - canvas.getBoundingClientRect().top;
    if (keys.mouseLeft.pressed) {
      showHelpDragImage = false;
      const deltaX = mouseX - initialMouseX;
      const deltaY = mouseY - initialMouseY;
      MoveMap(deltaX, deltaY);
      initialMouseX = mouseX;
      initialMouseY = mouseY;
    }
  }

  if (mouseDragging && !isThrowing && items.includes(disc1) && charging) {
    currentMouseX = event.clientX - canvas.getBoundingClientRect().left;
    currentMouseY = event.clientY - canvas.getBoundingClientRect().top;

    const deltaX = currentMouseX - canvas.width / 2;
    const deltaY = currentMouseY - canvas.height / 2;
    const distanceFromCenter = Math.sqrt(deltaX * deltaX + deltaY * deltaY)
    

    const DeltaX2 = currentMouseX - controlpoint3.position.x;
    const DeltaY2 = currentMouseY - controlpoint3.position.y;
    const distancefromctrl3 = Math.sqrt(DeltaX2 * DeltaX2 + DeltaY2 * DeltaY2);

    const DeltaX3 = currentMouseX - controlpoint2.position.x;
    const DeltaY3 = currentMouseY - controlpoint2.position.y;
    const distancefromctrl2 = Math.sqrt(DeltaX3 * DeltaX3 + DeltaY3 * DeltaY3);
    

    const DeltaX4 = currentMouseX - controlpoint.position.x;
    const DeltaY4 = currentMouseY - controlpoint.position.y;
    const distancefromctrl = Math.sqrt(DeltaX4 * DeltaX4 + DeltaY4 * DeltaY4);

    const DeltaX5 = currentMouseX - controlpoint4.position.x;
    const DeltaY5 = currentMouseY - controlpoint4.position.y;
    const distancefromctrl4 = Math.sqrt(DeltaX5 * DeltaX5 + DeltaY5 * DeltaY5);

    const DeltaX6 = currentMouseX - controlpoint5.position.x;
    const DeltaY6 = currentMouseY - controlpoint5.position.y;
    const distancefromctrl5 = Math.sqrt(DeltaX6 * DeltaX6 + DeltaY6 * DeltaY6);

    const deltadiscX = disc1.position.x - canvas.width / 2;
    const deltadiscY = disc1.position.y - canvas.height / 2;
    const discdistanceFromCenter = Math.sqrt(deltadiscX * deltadiscX + deltadiscY * deltadiscY)



    if (initialAngle === null) {
      initialAngle = angleInRadians - Math.PI;
    }
    
    if (initialAngle2 === null) {
      initialAngle2 = angleInRadians - (Math.PI / 2);
    }
    
    if (initialAngle3 === null) {
      initialAngle3 = angleInRadians + (Math.PI / 2);
    }
    
    if (initialAngle4 === null) {
      initialAngle4 = angleInRadians - Math.PI
    }    
    const maxTurn = 150;
    const maxPower = 150;


    if (distancefromctrl5 < distancefromctrl4 && distancefromctrl3 < distancefromctrl2 && !outsideLeft){
      outside = true
      borderHit = true
      outsideRight = true
      outsideLeft = false

      controlpoint5.position.x =
      canvas.width / 2 + distancefromctrl3 * -Math.cos(initialAngle);
      controlpoint5.position.y =
      canvas.height / 2 + distancefromctrl3 * -Math.sin(initialAngle);

      controlpoint3.position.x =
      canvas.width / 2 + distancefromctrl4 * Math.cos(initialAngle3);
      controlpoint3.position.y =
      canvas.height / 2 + distancefromctrl4 * Math.sin(initialAngle3);

      disc1.position.x =
      controlpoint3.position.x - 7.5 + 1 *  Math.cos(initialAngle3)
      disc1.position.y =
      controlpoint3.position.y - 7.5 + 1 *  Math.sin(initialAngle3)
      if (distancefromctrl4 > 150 && distancefromctrl3 >= 0) {
        borderHit = true
        disc1.position.x = (canvas.width / 2) - 7.5 + 150 * Math.cos((initialAngle3));
        disc1.position.y = (canvas.height / 2)  - 7.5 + 150 * Math.sin((initialAngle3));
        
      }
    }
    if (distancefromctrl5 < distancefromctrl && distancefromctrl2 < distancefromctrl3 && !outsideRight){
      outside = true
      borderHit = true
      outsideLeft = true
      outsideRight = false
      controlpoint5.position.x =
      canvas.width / 2 + distancefromctrl2 * -Math.cos(initialAngle);
      controlpoint5.position.y =
      canvas.height / 2 + distancefromctrl2 * -Math.sin(initialAngle);
      controlpoint2.position.x =
      canvas.width / 2 + distancefromctrl * Math.cos(initialAngle2);
      controlpoint2.position.y =
      canvas.height / 2 + distancefromctrl * Math.sin(initialAngle2);

      disc1.position.x =
      controlpoint2.position.x - 7.5 + 1 *  Math.cos(initialAngle2)
      disc1.position.y =
      controlpoint2.position.y - 7.5 + 1 *  Math.sin(initialAngle2)
      if (distancefromctrl > 150 && distancefromctrl2 >= 0) {
        borderHit = true
        
        disc1.position.x = (canvas.width / 2) - 7.5 + 150 * Math.cos((initialAngle2));
        disc1.position.y = (canvas.height / 2)  - 7.5 + 150 * Math.sin((initialAngle2));
        
      }
    }

    else if (distancefromctrl5 > distancefromctrl || distancefromctrl5 > distancefromctrl4) 
    {
      outside = false
      borderHit = false
      outsideRight = false
      outsideLeft = false
    
    }
    if (!outside) { 
      controlpoint.position.x =
      canvas.width / 2 + distancefromctrl2 * Math.cos(initialAngle);
    controlpoint.position.y =
      canvas.height / 2 + distancefromctrl2 * Math.sin(initialAngle);

    controlpoint3.position.x =
      canvas.width / 2 + distancefromctrl4 * Math.cos(initialAngle3);
    controlpoint3.position.y =
      canvas.height / 2 + distancefromctrl4 * Math.sin(initialAngle3);

    controlpoint4.position.x =
      canvas.width / 2 + distancefromctrl3 * Math.cos(initialAngle4);
    controlpoint4.position.y =
      canvas.height / 2 + distancefromctrl3 * Math.sin(initialAngle4);

    controlpoint2.position.x =
        canvas.width / 2 + distancefromctrl * Math.cos(initialAngle2);
    controlpoint2.position.y =
        canvas.height / 2 + distancefromctrl * Math.sin(initialAngle2);


      outside = false
      controlpoint5.position.x = canvas.width / 2;
      controlpoint5.position.y = canvas.height / 2;


    if (distancefromctrl3 < distancefromctrl2 && !outside) {
      //right
      controlpoint2.position.x = canvas.width / 2;
      controlpoint2.position.y = canvas.height / 2;
      const scaleFactor = 0.0001;
      turn = Math.min(distancefromctrl4, maxTurn) * scaleFactor;

      if (distancefromctrl4 < 150) {
          disc1.position.x = currentMouseX - 7.5;
          disc1.position.y = currentMouseY - 7.5;
      }
      if (distancefromctrl4 >= 150)  {

        disc1.position.x =
        controlpoint4.position.x - 7.5 + 150 *  Math.cos(initialAngle3)
        disc1.position.y =
        controlpoint4.position.y - 7.5 + 150 *  Math.sin(initialAngle3)
      } 
      if (distancefromctrl3 > 150)  {
        
        disc1.position.x =
        controlpoint3.position.x - 7.5 + 150 *  Math.cos(initialAngle4)
        disc1.position.y =
        controlpoint3.position.y - 7.5 + 150 *  Math.sin(initialAngle4)
      } 
      if (distancefromctrl3 > 150 && distancefromctrl4 >= 150) {
        borderHit = true
  
        disc1.position.x = (canvas.width / 2) - 7.5 + 212 * -Math.cos((initialAngle4 + initialAngle3) /2);
        disc1.position.y = (canvas.height / 2)  - 7.5 + 212 * -Math.sin((initialAngle4 + initialAngle3) / 2);
        
      }
      
    }

    if (distancefromctrl2 < distancefromctrl3 && !outside) {
      //Left
      controlpoint3.position.x = canvas.width / 2;
      controlpoint3.position.y = canvas.height / 2;
      const scaleFactor = 0.0001;
      turn = Math.min(distancefromctrl, maxTurn) * scaleFactor * -1;

      if (distancefromctrl < 150) {
        disc1.position.x = currentMouseX - 7.5;
        disc1.position.y = currentMouseY - 7.5;
    }
    if (distancefromctrl >= 150)  {
      
      borderHit = true
      
      disc1.position.x =
      controlpoint.position.x - 7.5 + 150 *  Math.cos(initialAngle2)
      disc1.position.y =
      controlpoint.position.y - 7.5 + 150 *  Math.sin(initialAngle2)
    } 
    if (distancefromctrl2 > 150)  {
      
      borderHit = true
      
      disc1.position.x =
      controlpoint2.position.x - 7.5 + 150 *  Math.cos(initialAngle)
      disc1.position.y =
      controlpoint2.position.y - 7.5 + 150 *  Math.sin(initialAngle)
    } 
    if (distancefromctrl2 > 150 && distancefromctrl >= 150) {
      
      borderHit = true

      disc1.position.x = (canvas.width / 2) - 7.5 + 212 * Math.cos((initialAngle + initialAngle2) /2);
      disc1.position.y = (canvas.height / 2)  - 7.5 + 212 * Math.sin((initialAngle + initialAngle2) / 2);
      
    }
  }

    if (distancefromctrl2 < distancefromctrl3) {
      power = Math.min(distancefromctrl2, maxPower) * items[0].speed;
    } else {
      power = Math.min(distancefromctrl3, maxPower) * items[0].speed;
    }
}
    const powerangX = (disc1.position.x +7.5) - canvas.width / 2;
    const powerangY = (disc1.position.y +7.5) - canvas.height / 2;
let powerangle =
      Math.atan2(powerangY ,powerangX)

    let powerang2X = (disc1.position.x +7.5) - powerpoint1.position.x;
    let powerang2Y = (disc1.position.y +7.5) - powerpoint1.position.y;

let powerangle2 =
      Math.atan2(powerang2Y ,powerang2X)
      
 powerpoint1.position.x =
      ((canvas.width / 2)) + (discdistanceFromCenter / 6) * Math.cos(initialAngle)
    powerpoint1.position.y =
    ((canvas.height / 2)) + (discdistanceFromCenter / 6) * Math.sin(initialAngle)
    
    powerpoint2.position.x =
    ((canvas.width / 2)) + ((discdistanceFromCenter / 4)) * ((Math.cos(powerangle) + Math.cos(initialAngle)))
    powerpoint2.position.y =
    ((canvas.height / 2)) + ((discdistanceFromCenter / 4)) * ((Math.sin(powerangle) + Math.sin(initialAngle)))

    powerpoint3.position.x =
    ((canvas.width / 2)) + (discdistanceFromCenter /3.5) * ((Math.cos(powerangle2) + Math.cos(initialAngle) + Math.cos(powerangle)))
    powerpoint3.position.y =
    ((canvas.height / 2)) + (discdistanceFromCenter /3.5) * ((Math.sin(powerangle2) + Math.sin(initialAngle) + Math.sin(powerangle)))

  
}
});
//Mousemove ---------------------------------------------------------------------------------------- Mousemove

//Mouseup ---------------------------------------------------------------------------------------- Mouseup
canvas.addEventListener("mouseup", (event) => {
  keys.mouseLeft.pressed = false;
  if (event.button === 0 && !isThrowing && items.includes(disc1) && !mapMode) {
    isThrowing = true;
    charging = false;
    isMouseMoving = false;
    discinitialAngle = null;
    initialAngle = null;
    initialAngle2 = null;
    initialAngle3 = null;
    initialAngle4 = null;
    controlpoint.moving = true;
    controlpoint2.moving = true;
    controlpoint3.moving = true;
    controlpoint4.moving = true;
    controlpoint5.moving = true;

    if (mouseDragging && items.includes(disc1)) {
      items[0].position.x = canvas.width / 2 - 7.5;
      items[0].position.y = canvas.height / 2 - 7.5;
      mouseDragging = false;
      angleLock = true
      canShowMap = false;
      aimLineTurn = angleDifference(startanglecharge, aimLine.angle) * 0.0012;
      elementsPositionsBeforeMapMode = {
        background: { x: background.position.x, y: background.position.y },
        player: { x: player.position.x, y: player.position.y },
        foreground: { x: foreground.position.x, y: foreground.position.y },
        cage: { x: cage.position.x, y: cage.position.y },
        disc1: { x: disc1.position.x, y: disc1.position.y },
        disc2: { x: disc2.position.x, y: disc2.position.y },
        Line1: { x1: Line1.x1, y1: Line1.y1 },
        Line2: { x1: Line2.x1, y1: Line2.y1 },
        Line3: { x1: Line3.x1, y1: Line3.y1 },
        Line4: { x1: Line4.x1, y1: Line4.y1 },
      };

      boundaries.forEach((boundary, index) => {
        elementsPositionsBeforeMapMode[`boundary${index}`] = {
          x: boundary.position.x,
          y: boundary.position.y,
        };
      });
      waterboundaries.forEach((waterboundary, index) => {
        elementsPositionsBeforeMapMode[`waterboundary${index}`] = {
          x: waterboundary.position.x,
          y: waterboundary.position.y,
        };
      });
      playeronlyboundaries.forEach((playeronlyboundary, index) => {
        elementsPositionsBeforeMapMode[`playeronlyboundary${index}`] = {
          x: playeronlyboundary.position.x,
          y: playeronlyboundary.position.y,
        };
      });
      if (aimLine.angle > startanglecharge -0.08 && aimLine.angle < startanglecharge + 0.03) {
        perfecto = true
        perfect.position.x += 30 * (Math.cos(startanglecharge) * -1)
        perfect.position.y += 30 * (Math.sin(startanglecharge) * -1)
      }
      if (aimlinePos) {
        aimLineTurn = aimLineTurn * -1;
        throwDisc();
      }
      if (!aimlinePos) {
        throwDisc();
      }
    }
  }
});
//Mouseup ---------------------------------------------------------------------------------------- Mouseup

//Mousedown ---------------------------------------------------------------------------------------- Mousedown
canvas.addEventListener("mousedown", (event) => {
  if (event.button === 0) {
    if (!mapMode) {
      keys.mouseLeft.pressed = true;

      if (items.includes(disc1) && !isThrowing) {
        angleInRadians = circleDot.angle;
        circleDot.moving = false;
        canShowMap = false;
        charging = true
        mouseDragging = true;
        degrees.moving = false;
        angleMeter.moving = false
        aimLine.moving = false;
        startanglecharge = circleDot.angle;
        charging = true;
        currentMouseX = event.clientX - canvas.getBoundingClientRect().left;
        currentMouseY = event.clientY - canvas.getBoundingClientRect().top;
        disc1.position.x = currentMouseX - 7.5
        disc1.position.y = currentMouseY - 7.5
        
      }
    }
  }
});
//Mousedown ---------------------------------------------------------------------------------------- Mousedown