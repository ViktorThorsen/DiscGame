const canvas = document.querySelector("canvas")
const c = canvas.getContext("2d")

canvas.width = 1024
canvas.height = 576

collisionsMap =[]
for (let i = 0; i < collisions.length; i += 200) {
    collisionsMap.push(collisions.slice(i, 200 + i))
}

const boundaries = []
const offset = {
    x: -3980,
    y: -4150
}
collisionsMap.forEach((row, i) => {
    row.forEach((symbol, j) => {
        if (symbol === 1025)
        boundaries.push(new Boundary({ position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
        }}))
    })
})

const rndInt = randomIntFromInterval(-250, 65)
function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
const rndInt1 = randomIntFromInterval(-250, 65);
const rndInt2 = randomIntFromInterval(-250, 65);

const image = new Image()
image.src = "./img/discMap.png"

const foregroundImage = new Image()
foregroundImage.src = "./img/foregroundobjects.png"

const discImage = new Image()
discImage.src = "./img/disc.png"

const discImage2 = new Image()
discImage2.src = "./img/disc2.png"

const discImage3 = new Image()
discImage3.src = "./img/discgold.png"

const controlpointIMG = new Image()
controlpointIMG.src = "./img/controlpoint.png"

const controlpointIMG2 = new Image()
controlpointIMG2.src = "./img/controlpoint2.png"

const controlpointIMG3 = new Image()
controlpointIMG3.src = "./img/controlpoint3.png"

const controlpointIMG4 = new Image()
controlpointIMG4.src = "./img/controlpoint4.png"

const playerDownImage = new Image()
playerDownImage.src = "./img/playerDown.png"

const meter = new Image()
meter.src = "./img/powerImg.png"

const dragImage = new Image()
dragImage.src = "./img/drag.png"

const aimLineimg = new Image()
aimLineimg.src = "./img/aimLineimg.png"



const hitmarker = new Image()
hitmarker.src = "./img/hitmarker.png"

const discinbag1 = new Image()
discinbag1.src = "./img/discinpack.png"

const discinbag2 = new Image()
discinbag2.src = "./img/discinpack2.png"

const playerUpImage = new Image()
playerUpImage.src = "./img/playerUp.png"

const playerLeftImage = new Image()
playerLeftImage.src = "./img/playerLeft.png"

const playerRightImage = new Image()
playerRightImage.src = "./img/playerRight.png"

const eButton = new Image()
eButton.src = "./img/eButton.png"

const backpack = new Image()
backpack.src = "./img/backpack.png"

const cageImage = new Image()
cageImage.src = "./img/cage.png"

const dot = new Image()
dot.src = "./img/dot.png"

const inventory = new Image()
inventory.src = "./img/inventorylayout.png"

const player = new Sprite({
    position: {
        x: canvas.width / 2 - 96 / 4 / 2,
        y: canvas.height / 2 - 34 / 2
    },
    image: playerDownImage,
    frames: {
        max: 4
    },
    sprites: {
        up: playerUpImage,
        left : playerLeftImage,
        right: playerRightImage,
        down: playerDownImage
    }
})

const circleDot = new Circle({
    position: {
        x: canvas.width / 2,
        y: canvas.height / 2
    },
    image: dot,
    rotate: 0,
    player: player,
})
const aimLine = new Circle({
    position: {
        x: canvas.width / 2,
        y: canvas.height / 2
    },
    image: aimLineimg,
    rotate: 0,
    player: player,
})

const controlpoint = new Control({
    position: {
        x: (canvas.width / 2),
        y: canvas.height / 2
    },
    image: controlpointIMG,
    rotate: 0,
    player: player,
    distance: 0
})
const controlpoint2 = new Control({
    position: {
        x: (canvas.width / 2),
        y: canvas.height / 2
    },
    image: controlpointIMG2,
    rotate: 0,
    player: player,
    distance: 0
})
const controlpoint3 = new Control({
    position: {
        x: (canvas.width / 2),
        y: canvas.height / 2
    },
    image: controlpointIMG3,
    rotate: 0,
    player: player,
    distance: 0
})
const controlpoint4 = new Control({
    position: {
        x: (canvas.width / 2),
        y: canvas.height / 2
    },
    image: controlpointIMG4,
    rotate: 0,
    player: player,
    distance: 0
})

const dragToMoveAround = new Sprite({
    position: {
        x: (canvas.width / 2) - 150,
        y: (canvas.height / 2) -30
    },
    image: dragImage,
})

const background = new Sprite({ position: {
    x: offset.x,
    y: offset.y
    },
    image: image
})

const foreground = new Sprite({ position: {
    x: offset.x,
    y: offset.y
    },
    image: foregroundImage
})

const disc1 = new Disc({ position: {
    x: 150,
    y: -50
},
    image: discImage,
    picked: false,
    spin: 0.005,
    distance: 0,
    speed: 2,
    turn: 1.3,
    type: "Driver",
    startingspeed: 2
    
})


const disc2 = new Disc ({ position: {
    x: rndInt2,
    y: rndInt2
},
    image: discImage2,
    picked: false,
    spin: -0.005,
    distance: 0,
    speed: 2.5,
    type: "Midrange",
    turn: 0.1,
    startingspeed: 2.5,
})
const disc3 = new Disc ({ position: {
    x: (canvas.width / 2) - 7.5,
    y: (canvas.height / 2) - 7.5
},
    image: discImage3,
    picked: false,
    speed: 3
    
})

const powerMeter = new Sprite ({ position: {
    x: (canvas.width / 2),
    y: (canvas.height / 2) - 50
},
    image: meter,
})

const cage = new Sprite ({ position: {
    x: -956,
    y: -852
},
    image: cageImage,
})

const hitMarker = new Sprite ({ position: {
    x: (canvas.width / 2) + 96,
    y: (canvas.height / 2) + 25
},
    image: hitmarker,
})

const discinpack = new Sprite({ position: {
    x: 120,
    y: canvas.height - 75
},
    image: discinbag1
})

const discinpack2 = new Sprite({ position: {
    x: 90,
    y: canvas.height - 75
},
    image: discinbag2
})


const buttons = new Sprite({ position: {
    x: canvas.width / 2 - 30,
    y: canvas.height / 2 + 68
},
    image: eButton
})

const backPack = new Sprite({ position: {
    x: 0,
    y: canvas.height - 100
},
    image: backpack
})

const invent = new Sprite({ position: {
    x: canvas.width / 2 - 250,
    y: canvas.height / 2 - 250
},
    image: inventory,
    hidden: true
})

const keys = {
    w: {
        pressed: false
    },
    a: {
        pressed: false
    },
    s: {
        pressed: false
    },
    d: {
        pressed: false
    },
    e: {
        pressed: false
    },
    b: {
        pressed: false
    },
    q: {
        pressed: false
    },
    m: {
        pressed: false
    },
    mouseLeft: { 
        pressed: false 
    },
}


let elementsPositionsBeforeMapMode = {
    background: { x: background.position.x, y: background.position.y},
    player: { x: player.position.x, y: player.position.y},
    foreground: {x: foreground.position.x, y: foreground.position.y,},
    cage: {x: cage.position.x, y: cage.position.y,},
    disc1: {x: disc1.position.x, y: disc1.position.y,},
    disc2: {x: disc2.position.x, y: disc2.position.y,},
    

}

let overpass = false
let aimLineTurn = 0
let aimlinePos = false
let lateTurn = 0
let earlyTurn = 0
let angleToDisc = 0
let reflectionAngle = 0
let distancefromdisc1 = 0
let angleInRadians = 0
let StoredPlayerPos = {x:0, y:0}
let startanglecharge = 0
let moveup = true
let movedown = false
let charging = false
let turn = 0
let initialAngle = null;
let initialAngle2 = null;
let initialAngle3 = null
let initialAngle4 = null
let isMouseMoving = false
let power = 0
let rotationAngle = 0;
let stepCount = 0
canShowMap = true
let isThrowing = false
let showHelpDragImage = false
let mapMode = false
let initialMouseX = 0;
let initialMouseY = 0;
let mouseDragging = false
let mouseX = 0;
let mouseY = 0;
let landed = true
let overlappingItem = ""
let canMove = true
let u = 0;
const movables = [ background, ...boundaries, foreground, cage ]
const staticDisc = [disc1, disc2,]
const items = []

        function calculateAngle(startPositionX, startPositionY, endPositionX, endPositionY) {
            return Math.atan2(endPositionY - startPositionY, endPositionX - startPositionX);
        }

        function getMousePosition(event) {
            const x = event.clientX - canvas.getBoundingClientRect().left;
            const y = event.clientY - canvas.getBoundingClientRect().top;
            return { x, y };
          }

function pickUpItem() {

    if (player.pickup && overlappingItem === disc1 || player.pickup && overlappingItem === disc2) {
        overlappingItem.picked = true
        items.push(overlappingItem)
        player.pickup = false
        overlappingItem.landed = false
        const ind = staticDisc.indexOf(overlappingItem)
        staticDisc.splice(ind, 1)
        items[0].position.x = canvas.width / 2 -7.5,
        items[0].position.y = canvas.height / 2 -7.5
        
        
    }
}

function MoveMap(deltaX, deltaY) {

    // Update the positions of your content elements
    background.position.x += deltaX;
    background.position.y += deltaY;

    foreground.position.x += deltaX;
    foreground.position.y += deltaY;

    //boundaries.forEach((boundary) => {
    //    boundary.position.x += deltaX;
    //    boundary.position.y += deltaY;
    //});

    cage.position.x += deltaX;
    cage.position.y += deltaY;

    disc1.position.x += deltaX;
    disc1.position.y += deltaY;

    disc2.position.x += deltaX;
    disc2.position.y += deltaY;

    player.position.x += deltaX;
    player.position.y += deltaY;
    
}


function mapModefunc() {
    canvas.addEventListener("mousedown", (event) => {
        if (event.button === 0) {
            keys.mouseLeft.pressed = true;
            initialMouseX = event.clientX - canvas.getBoundingClientRect().left;
            initialMouseY = event.clientY - canvas.getBoundingClientRect().top;
        }}
    );
}


function throwDisc() {
    circleDot.moving = false
    aimLine.moving = false
    canMove = false
    let turn = 0
    for (let u = 0; u <= 300; u++) {Throwing(u,)}
       
    function Throwing(u,) {    
        
        setTimeout(function(){ 
            turn += items[0].turn
            items[0].update()
            discThrow(u)
            if (u >= 300) {
                circleDot.moving = true
                aimLine.moving = true
                items[0].landed = true
    controlpoint.angle = 0; // You may need to reset the angle if it's relevant
    controlpoint.position.x = canvas.width / 2;
    controlpoint.position.y = canvas.height / 2
            }
             
        }, 10 * u)
    
}  
}
    function discThrow(u) {
    disc1.tossed = true;
    earlyTurn = earlyTurn + (aimLineTurn * items[0].turn)
    const travelAngle = calculateAngle(player.position.x, player.position.y, disc1.position.x, disc1.position.y)
    
    let travelAngleDifference = angleDifference((angleInRadians + earlyTurn) * (180 / Math.PI), startanglecharge * (180 / Math.PI))
    console.log(travelAngleDifference)
    if (!overpass && travelAngleDifference < 170) {
    if (u < 150) {
    cage.position.x += -power * Math.cos(angleInRadians + earlyTurn);
    cage.position.y += -power * Math.sin(angleInRadians + earlyTurn);

    foreground.position.x += -power * Math.cos(angleInRadians + earlyTurn);
    foreground.position.y += -power * Math.sin(angleInRadians + earlyTurn);
        
    background.position.x += -power * Math.cos(angleInRadians + earlyTurn);
    background.position.y += -power * Math.sin(angleInRadians + earlyTurn);

    player.position.x += -power * Math.cos(angleInRadians + earlyTurn);
    player.position.y += -power * Math.sin(angleInRadians + earlyTurn);

    disc2.position.x += -power * Math.cos(angleInRadians + earlyTurn);
    disc2.position.y += -power * Math.sin(angleInRadians + earlyTurn);

    boundaries.forEach((boundary) => {
        boundary.position.x += -power * Math.cos(angleInRadians + earlyTurn);
        boundary.position.y += -power * Math.sin(angleInRadians + earlyTurn);
});}
if (u > 150) {
    earlyTurn = earlyTurn + (turn * items[0].turn)
    cage.position.x += -power * Math.cos(angleInRadians + earlyTurn);
    cage.position.y += -power * Math.sin(angleInRadians + earlyTurn);

    foreground.position.x += -power * Math.cos(angleInRadians + earlyTurn);
    foreground.position.y += -power * Math.sin(angleInRadians + earlyTurn);
        
    background.position.x += -power * Math.cos(angleInRadians + earlyTurn);
    background.position.y += -power * Math.sin(angleInRadians + earlyTurn);

    player.position.x += -power * Math.cos(angleInRadians + earlyTurn);
    player.position.y += -power * Math.sin(angleInRadians + earlyTurn);

    disc2.position.x += -power * Math.cos(angleInRadians + earlyTurn);
    disc2.position.y += -power * Math.sin(angleInRadians + earlyTurn);

    boundaries.forEach((boundary) => {
        boundary.position.x += -power * Math.cos(angleInRadians + earlyTurn);
        boundary.position.y += -power * Math.sin(angleInRadians + earlyTurn);
});}}
else {
    travelAngleDifference = 180
    overpass = true
    console.log("here")
    turn = 0
    cage.position.x += -power * Math.cos(angleInRadians + earlyTurn);
    cage.position.y += -power * Math.sin(angleInRadians + earlyTurn);

    foreground.position.x += -power * Math.cos(angleInRadians + earlyTurn);
    foreground.position.y += -power * Math.sin(angleInRadians + earlyTurn);
        
    background.position.x += -power * Math.cos(angleInRadians + earlyTurn);
    background.position.y += -power * Math.sin(angleInRadians + earlyTurn);

    player.position.x += -power * Math.cos(angleInRadians + earlyTurn);
    player.position.y += -power * Math.sin(angleInRadians + earlyTurn);

    disc2.position.x += -power * Math.cos(angleInRadians + earlyTurn);
    disc2.position.y += -power * Math.sin(angleInRadians + earlyTurn);

    boundaries.forEach((boundary) => {
        boundary.position.x += -power * Math.cos(angleInRadians + earlyTurn);
        boundary.position.y += -power * Math.sin(angleInRadians + earlyTurn);
})}
        alpha1 = player.position.x - disc1.position.x
        alpha2 = player.position.y - disc1.position.y

        distancefromdisc1 = Math.sqrt(alpha1 * alpha1 + alpha2 * alpha2);

      

        //background.position.x = background.position.x + Math.cos(circleDot.angle) + 10
        //background.position.y = background.position.y + Math.sin(circleDot.angle) + offset.y
        
}

let Bounce = false
let metervalue = 0
let meterUp = true;
let meterDown = false;
let showPowerMeter = false;
let hitMarkerStatic = hitMarker.position.y;
let currentHitMarkerPosition = hitMarker.position.y; // Store the current position

function calculateValue(yPosition) {
  // Calculate the value based on the yPosition
  const minValue = 0.2;
  const maxValue = 2;
  const minY = 315;
  const maxY = 235;

  // Linear interpolation (lerp)
metervalue = (yPosition - minY) / (maxY - minY) * (maxValue - minValue) + minValue; 
}

function angleDifference(angle1, angle2) {
    // Ensure both angles are in the range [0, 360)
    angle1 = (angle1 % 360 + 360) % 360;
    angle2 = (angle2 % 360 + 360) % 360;

    // Calculate the absolute difference
    let diff = Math.abs(angle1 - angle2);

    // Choose the smaller difference (either diff or 360 - diff)
    if (diff > 180) {
        diff = 360 - diff;
    }

    return diff;
}

function moveHitMarker() {
  let i = 0;

  function loop() {
    if (i < 800 && stepCount === 1 ) {
      movingHitMarker(i);
      
      i++;
      setTimeout(loop, 1);
    } else {
      // Handle any finalization here when holdingQ is false or i reaches 800
      if (stepCount === 2) {
        hitMarker.position.y = currentHitMarkerPosition;
        const metervalue = calculateValue(currentHitMarkerPosition);
      }
    }
  }

  loop();

  function movingHitMarker(i) {

      if (meterUp) {
        hitMarker.position.y -= 2;
      }

      if (hitMarker.position.y < 235) {
        meterUp = false;
        meterDown = true;
      }

      if (meterDown) {
        hitMarker.position.y += 2;
      }

      if (hitMarker.position.y > 315) {
        meterUp = true;
        meterDown = false;
      }

      if (stepCount === 2) {
        hitMarker.position.y = currentHitMarkerPosition; // Set to the stored current position
      } else {
        currentHitMarkerPosition = hitMarker.position.y; // Update the stored current position
      }
  }
}

function rectangularCollision({rectangle1, rectangle2}) {
    return(rectangle1.position.x + rectangle1.width >= rectangle2.position.x &&
        rectangle1.position.x <= rectangle2.position.x + rectangle2.width &&
        rectangle1.position.y <= rectangle2.position.y + rectangle2.height &&
        rectangle1.position.y + rectangle1.height >= rectangle2.position.y)   
}

function animate() {
    window.requestAnimationFrame(animate)

    background.draw()
    if (disc1.picked) {
    discinpack.draw()}

    if (disc2.picked) {
    discinpack2.draw()}
    backPack.draw()
    player.draw()
    cage.draw()
    if (items.includes(disc1) || items.includes(disc2)){
    circleDot.draw()
    aimLine.draw()
}

    if (showPowerMeter) {
        powerMeter.draw()
        hitMarker.draw()
    }
    if (!showPowerMeter) {
       hitMarker.position.y = (canvas.height / 2) + 25
    }
    
    boundaries.forEach(boundary => {
        boundary.draw()
    })
    foreground.draw()
    if (player.pickup && !disc1.picked) {
    buttons.draw()
    }
    
    if (player.pickup && !disc2.picked) {
        buttons.draw()
        }
if (!circleDot.moving) {
    items[0].draw() 
}
disc1.draw()
disc2.draw()
if (showHelpDragImage) {
    dragToMoveAround.draw()
}

if (items.includes(items[0]) && items[0].landed) {
    items[0].picked = false
    turn = 0
    aimLineTurn = 0
    aimlinePos = false
    lateTurn = 0
    earlyTurn = 0
    overpass = false
    
    items[0].speed = items[0].startingspeed
    items[0].tossed = false
        stepCount = 0
        Bounce = false
        canShowMap = true
        showPowerMeter = false
        turntest = 0
        isThrowing = false
        items[0].draw()
        staticDisc.push(items[0])
        items.shift() 
    setTimeout(() => {
        
        
        

        background.position.x = elementsPositionsBeforeMapMode.background.x;
                    background.position.y = elementsPositionsBeforeMapMode.background.y;
                    angleToDisc =  Math.atan2(player.position.y - disc1.position.y, player.position.x - disc1.position.x) + Math.PI

                    player.position.x = elementsPositionsBeforeMapMode.player.x;
                    player.position.y = elementsPositionsBeforeMapMode.player.y;

                    foreground.position.x = elementsPositionsBeforeMapMode.foreground.x;
                    foreground.position.y = elementsPositionsBeforeMapMode.foreground.y;

                    cage.position.x = elementsPositionsBeforeMapMode.cage.x;
                    cage.position.y = elementsPositionsBeforeMapMode.cage.y;

                    
                    disc1.position.x = player.position.x + distancefromdisc1 * Math.cos(angleToDisc);
                    disc1.position.y = player.position.y + distancefromdisc1 * Math.sin(angleToDisc);

                    disc2.position.x = elementsPositionsBeforeMapMode.disc2.x;
                    disc2.position.y = elementsPositionsBeforeMapMode.disc2.y;

                    boundaries.forEach((boundary, index) => {
                        boundary.position.x = elementsPositionsBeforeMapMode[`boundary${index}`].x;
                        boundary.position.y = elementsPositionsBeforeMapMode[`boundary${index}`].y;
                      });
                      canMove = true
}, 1500 )

}

let moving = true
player.moving = false


if (charging) {
    
    if (power > 0) {
        if (aimLine.angle > startanglecharge)
        {
            aimlinePos = false
            
        }
        if (aimLine.angle < startanglecharge)
        {
            aimlinePos = true
        }


        if (moveup) {
            aimLine.angle += (power / 150)
            if (aimLine.angle > (startanglecharge + 1)) {
            moveup = false
            movedown = true
            }
        }
        if (movedown) {
            aimLine.angle -= (power / 150)
            if (aimLine.angle < (startanglecharge - 1)) {
                moveup = true
                movedown = false
                }
        }
    }
}
function calculateReflectionAngle(incidenceAngle) {
    // Ensure that the incidence angle is within the range [0, 2π) (0 to 360 degrees)
    while (incidenceAngle < 0) {
      incidenceAngle += 2 * Math.PI;
    }
    while (incidenceAngle >= 2 * Math.PI) {
      incidenceAngle -= 2 * Math.PI;
    }
  
    // Calculate the angle of reflection (it's the same as the incidence angle)
    return incidenceAngle;
  }

if (!canMove && !mapMode && disc1.tossed) {
for (let i = 0; i < boundaries.length; i++){
    const boundary = boundaries[i]
    
    if (
        rectangularCollision({
            rectangle1: {...boundary, position: {
                x: boundary.position.x,
                y: boundary.position.y
                }},
            rectangle2: {...disc1, position: {
                x: disc1.position.x + power,
                y: disc1.position.y + power
                }}
        }) && !Bounce) 
        {
            const incidenceAngle = Math.atan2(
                disc1.position.y - boundary.position.y,
                disc1.position.x - boundary.position.x
              );

              Bounce = true
              // Calculate the angle of reflection using the function
              reflectionAngle = calculateReflectionAngle(incidenceAngle);
              
              // Update the angle of circleDot (the ball) with the reflection angle
              angleInRadians = reflectionAngle
              disc1.reduceSpeed();
        break
        }
}}

if (!canMove && !mapMode && disc2.tossed) {
    for (let i = 0; i < boundaries.length; i++){
        const boundary = boundaries[i]
        
        if (
            rectangularCollision({
                rectangle1: {...boundary, position: {
                    x: boundary.position.x,
                    y: boundary.position.y
                    }},
                rectangle2: {...disc2, position: {
                    x: disc2.position.x + disc2.speed,
                    y: disc2.position.y + disc2.speed
                    }}
            }) && !Bounce) {
                const incidenceAngle = Math.atan2(
                    disc2.position.y - boundary.position.y,
                    disc2.position.x - boundary.position.x
                  );
                  Bounce = true
                  // Calculate the angle of reflection using the function
                  reflectionAngle = calculateReflectionAngle(incidenceAngle);
                  
                  // Update the angle of circleDot (the ball) with the reflection angle
                  
                  disc2.reduceSpeed();
            break
            }
    }}




    if (keys.w.pressed && lastKey === "w" && canMove) {
        player.moving = true
        player.image = player.sprites.up
        for (let i = 0; i < boundaries.length; i++){
                const boundary = boundaries[i]
            if (
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: {...boundary, position: {
                    x: boundary.position.x,
                    y: boundary.position.y + 1.5
                    }}
                })
            ) {
                standing = true
                moving = false
                break
            } 

            if (
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: {...disc1, position: {
                        x: disc1.position.x ,
                        y: disc1.position.y + 1.5
                        }}
                }) && !disc1.picked) { 
                moving = false
                overlappingItem = disc1
                player.pickup = true
                break
            } 

            if (
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: {...disc2, position: {
                        x: disc2.position.x ,
                        y: disc2.position.y + 1.5
                        }}
                }) && !disc2.picked) { 
                moving = false
                overlappingItem = disc2
                player.pickup = true
                break
                } else {player.pickup = false}
        
        } 


        if (moving) {
            movables.forEach((movable) => {
                movable.position.y += 1.5
            })
            staticDisc.forEach((disk) => {
                disk.position.y += 1.5
            })}
        } else if (keys.a.pressed && lastKey === "a" && canMove) {
            player.moving = true
            player.image = player.sprites.left

            for (let i = 0; i < boundaries.length; i++){
                const boundary = boundaries[i]
            if (
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: {...boundary, position: {
                    x: boundary.position.x + 1.5,
                    y: boundary.position.y
                    }}
                })
            ) {
                moving = false
                break
            } 
            if (
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: {...disc1, position: {
                        x: disc1.position.x + 1.5,
                        y: disc1.position.y
                        }}
                }) && !disc1.picked) {
                moving = false
                overlappingItem = disc1
                player.pickup = true
                break
            }
            if (
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: {...disc2, position: {
                        x: disc2.position.x + 1.5,
                        y: disc2.position.y
                        }}
                }) && !disc2.picked) { 
                moving = false
                overlappingItem = disc2
                player.pickup = true
                break
                } else player.pickup = false
            
        }
        if (moving) {
            movables.forEach((movable) => {
                movable.position.x += 1.5
            })
            staticDisc.forEach((disk) => {
                disk.position.x += 1.5
            })}
        } else if (keys.s.pressed && lastKey === "s" && canMove) {
            player.moving = true
            player.image = player.sprites.down

            for (let i = 0; i < boundaries.length; i++){
                const boundary = boundaries[i]
            if (
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: {...boundary, position: {
                    x: boundary.position.x,
                    y: boundary.position.y - 1.5
                    }}
                })
            ) {
                moving = false
                break
            } 
            if (
                rectangularCollision({ 
                    rectangle1: player,
                    rectangle2: {...disc1, position: {
                        x: disc1.position.x ,
                        y: disc1.position.y - 1.5
                        }}
                }) && !disc1.picked) {
                moving = false
                overlappingItem = disc1
                player.pickup = true
                break
            }
            if (
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: {...disc2, position: {
                        x: disc2.position.x ,
                        y: disc2.position.y - 1.5
                        }}
                }) && !disc2.picked) { 
                moving = false
                overlappingItem = disc2
                player.pickup = true
                break
                } else player.pickup = false
        }
        if (moving) {
            movables.forEach((movable) => {
                movable.position.y -= 1.5})
                staticDisc.forEach((disk) => {
                    disk.position.y -= 1.5
                })}
        } else if (keys.d.pressed && lastKey === "d" && canMove) {
            player.moving = true
            player.image = player.sprites.right

            for (let i = 0; i < boundaries.length; i++){
                const boundary = boundaries[i]
            if (
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: {...boundary, position: {
                    x: boundary.position.x - 1.5,
                    y: boundary.position.y
                    }}
                })
            ) {
                moving = false
                break
            } 
            if (
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: {...disc1, position: {
                        x: disc1.position.x - 1.5,
                        y: disc1.position.y
                        }}
                }) && !disc1.picked) {
                moving = false
                overlappingItem = disc1
                player.pickup = true
                break
            }
            if (
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: {...disc2, position: {
                        x: disc2.position.x - 1.5,
                        y: disc2.position.y 
                        }}
                }) && !disc2.picked) { 
                moving = false
                overlappingItem = disc2
                player.pickup = true
                break
                } else player.pickup = false
        }
        if (moving) {
            movables.forEach((movable) => {
                movable.position.x -= 1.5})
                staticDisc.forEach((disk) => {
                    disk.position.x -= 1.5
                })}}
        }
animate()

let lastKey = ""
window.addEventListener("keydown", (e) => {
    switch (e.key) {
        case "w":
            keys.w.pressed = true
            lastKey ="w"
            break
        case "a":
            keys.a.pressed = true
            lastKey ="a"
            break
        case "s":
            keys.s.pressed = true
            lastKey ="s"
            break
        case "d":
            keys.d.pressed = true
            lastKey ="d"
            break
        case "m":    
            if (canShowMap) {
                mapMode = !mapMode
            keys.m.pressed = true
            
            if (mapMode) {
                canMove = false
                showHelpDragImage = true
                elementsPositionsBeforeMapMode = {
                    background: { x: background.position.x, y: background.position.y },
                    player: { x: player.position.x, y: player.position.y },
                    foreground: { x: foreground.position.x, y: foreground.position.y },
                    cage: { x: cage.position.x, y: cage.position.y },
                    disc1: { x: disc1.position.x, y: disc1.position.y },
                    disc2: { x: disc2.position.x, y: disc2.position.y },
                  };
                  
                  boundaries.forEach((boundary, index) => {
                    elementsPositionsBeforeMapMode[`boundary${index}`] = {
                      x: boundary.position.x,
                      y: boundary.position.y,
                    };
                  });
                    

                mapModefunc()
            }
                else {
                    canMove = true
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
                    showHelpDragImage = false

                }
            }
            break
        case "e":
            keys.e.pressed = true
            pickUpItem()
            break
        case "b":
            keys.b.pressed = true
            break
        case "q":
            
            if (items.includes(items[0]) && canMove) {
                if (stepCount === 0) {
                    
                stepCount = 1
                canShowMap = false
                keys.q.pressed = true
                moveHitMarker()
                showPowerMeter = true 
            break} 
            if (stepCount === 1) {
                stepCount = 2
                    canShowMap = false
                    throwDisc()
            }
        }}
})

window.addEventListener("keyup", (e) => {
    switch (e.key) {
        case "w":
            keys.w.pressed = false
            break
        case "a":
            keys.a.pressed = false
            break
        case "s":
            keys.s.pressed = false
            break
        case "d":
            keys.d.pressed = false
            break
        case "m":
            keys.m.pressed = false
            break
        case "b":
            keys.b.pressed = false
            break
            case "q":     
            keys.q.pressed = false
            break
    }
},)

canvas.addEventListener("mousemove", (event) => {
    if (mapMode) {
        isMouseMoving = true;
    mouseX = event.clientX - canvas.getBoundingClientRect().left;
    mouseY = event.clientY - canvas.getBoundingClientRect().top;
        if (keys.mouseLeft.pressed) {
            showHelpDragImage = false
            // Calculate the delta between the current and initial mouse positions
            const deltaX = mouseX - initialMouseX;
            const deltaY = mouseY - initialMouseY;
        MoveMap(deltaX, deltaY)
        initialMouseX = mouseX;
        initialMouseY = mouseY;
    }}
    
    if (mouseDragging && !isThrowing && items.includes(disc1)) {
        const currentMouseX = event.clientX - canvas.getBoundingClientRect().left;
        const currentMouseY = event.clientY - canvas.getBoundingClientRect().top;
    
        const deltaX = currentMouseX - (canvas.width / 2);
        const deltaY = currentMouseY - (canvas.height / 2);
        const distanceFromCenter = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

        const DeltaX2 = currentMouseX - controlpoint3.position.x
        const DeltaY2 = currentMouseY - controlpoint3.position.y
        const distancefromctrl3 = Math.sqrt(DeltaX2 * DeltaX2 + DeltaY2 * DeltaY2);

        const DeltaX3 = currentMouseX - controlpoint2.position.x
        const DeltaY3 = currentMouseY - controlpoint2.position.y
        const distancefromctrl2 = Math.sqrt(DeltaX3 * DeltaX3 + DeltaY3 * DeltaY3);

        const DeltaX4 = currentMouseX - controlpoint.position.x
        const DeltaY4 = currentMouseY - controlpoint.position.y
        const distancefromctrl = Math.sqrt(DeltaX4 * DeltaX4 + DeltaY4 * DeltaY4);

        const DeltaX5 = currentMouseX - controlpoint4.position.x
        const DeltaY5 = currentMouseY - controlpoint4.position.y
        const distancefromctrl4 = Math.sqrt(DeltaX5 * DeltaX5 + DeltaY5 * DeltaY5);
       

        

    
        disc1.position.x = currentMouseX - 7.5;
        disc1.position.y = currentMouseY - 7.5;
    
        if (initialAngle === null) {
            initialAngle = Math.atan2(deltaY, deltaX);
        }

        if (initialAngle2 === null) {
            initialAngle2 = Math.atan2(deltaY, deltaX) + Math.PI / 2;
        }

        if (initialAngle3 === null) {
            initialAngle3 = Math.atan2(deltaY, deltaX) - (Math.PI / 2);
        }

        if (initialAngle4 === null) {
            initialAngle4 = Math.atan2(deltaY, deltaX)
        }
        
        controlpoint.position.x = canvas.width / 2 + distancefromctrl2 * Math.cos(initialAngle);
        controlpoint.position.y = canvas.height / 2 + distancefromctrl2 * Math.sin(initialAngle);

        controlpoint2.position.x = canvas.width / 2 + distancefromctrl * Math.cos(initialAngle2);
        controlpoint2.position.y = canvas.height / 2 + distancefromctrl * Math.sin(initialAngle2);

        controlpoint3.position.x = canvas.width / 2 + distancefromctrl4 * Math.cos(initialAngle3);
        controlpoint3.position.y = canvas.height / 2 + distancefromctrl4 * Math.sin(initialAngle3);

        controlpoint4.position.x = canvas.width / 2 + distancefromctrl3 * Math.cos(initialAngle4);
        controlpoint4.position.y = canvas.height / 2 + distancefromctrl3 * Math.sin(initialAngle4);
        
        const maxTurn = 150
        const maxPower = 150

        if (distancefromctrl3 < distancefromctrl2) {
        controlpoint2.position.x = canvas.width / 2
        controlpoint2.position.y = canvas.height / 2
        const scaleFactor = 0.0001;
        turn = (Math.min(distancefromctrl4, maxTurn)) * scaleFactor 
    }
        if (distancefromctrl2 < distancefromctrl3) {
            controlpoint3.position.x = canvas.width / 2
            controlpoint3.position.y = canvas.height / 2
            const scaleFactor = 0.0001;
            turn = ((Math.min(distancefromctrl, maxTurn)) * scaleFactor) * -1
            
            }

        
        if (distancefromctrl2 < distancefromctrl3) {
        power = Math.min(distancefromctrl2, maxPower) * 0.03;
        
        
    }
        else {
            power = Math.min(distancefromctrl3, maxPower) * 0.03; 
            }
           
    }
})

canvas.addEventListener("mouseup", (event) => {
    keys.mouseLeft.pressed = false;
    if (event.button === 0 && !isThrowing && items.includes(disc1) && !mapMode) {
        isThrowing = true
        charging = false
        isMouseMoving = false
        initialAngle = null
        initialAngle2 = null
        initialAngle3 = null
        initialAngle4 = null
        controlpoint.moving = true
        
        if (mouseDragging && items.includes(disc1))
            {
               items[0].position.x = (canvas.width / 2) - 7.5
               items[0].position.y = (canvas.height / 2) - 7.5
               mouseDragging = false
        canShowMap = false
        aimLineTurn = angleDifference(startanglecharge, aimLine.angle) * 0.01
        elementsPositionsBeforeMapMode = {
            background: { x: background.position.x, y: background.position.y },
            player: { x: player.position.x, y: player.position.y },
            foreground: { x: foreground.position.x, y: foreground.position.y },
            cage: { x: cage.position.x, y: cage.position.y },
            disc1: { x: disc1.position.x, y: disc1.position.y },
            disc2: { x: disc2.position.x, y: disc2.position.y },
          };
          
          boundaries.forEach((boundary, index) => {
            elementsPositionsBeforeMapMode[`boundary${index}`] = {
              x: boundary.position.x,
              y: boundary.position.y,
            };
          });
        if (aimlinePos) {
            aimLineTurn = aimLineTurn * -1
            throwDisc()
        }
        if (!aimlinePos) {
            throwDisc()
        }
        //const releaseAngle = calculateAngle(player.position, getMousePosition(event));
                     
            }
        
    }
});

canvas.addEventListener('mousedown', (event) => {
    if (event.button === 0) {
        if (!mapMode) {
            
      // Left mouse button is pressed, start dragging
      keys.mouseLeft.pressed = true;
      
      if (items.includes(disc1) && !isThrowing) {
        angleInRadians = circleDot.angle;
        charging = true
        canShowMap = false
        mouseDragging = true;
        circleDot.moving = false;
        aimLine.moving = false
        controlpoint.moving = false;
        startanglecharge = circleDot.angle
    }
  
      
    }
    }
  })
