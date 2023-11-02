class Sprite {
    constructor({ position, velocity, image, frames = {max: 1}, sprites }) {
        this.position = position
        this.image = image
        this.frames = {...frames, val: 0, elapsed: 0 }
        this.rotate = 0
        this.image.onload = () => {
        this.width = this.image.width / this.frames.max
        this.height = this.image.height
        }
        this.moving = false
        this.sprites = sprites
        this.pickup = false
    }
    draw() {
        c.rotate(this.rotate);
        c.drawImage(
            this.image, 
            this.frames.val * this.width,
            0,
            this.image.width / this.frames.max,
            this.image.height,
            this.position.x,
            this.position.y,
            this.image.width / this.frames.max,
            this.image.height,
            -this.width / 2, // Adjust the position to center the image
            -this.height / 2, // Adjust the position to center the image
            )

            if(!this.moving) return
            if (this.frames.max > 1) {
                this.frames.elapsed++
            }

            if (this.frames.elapsed % 20 === 0) {
            if (this.frames.val < this.frames.max -1) this.frames.val++
                else this.frames.val = 0
            }
        
}
    }

    class Circle {
        constructor({ position, image, player,}) {
            this.position = position
            this.image = image
            this.moving = true
            this.angle = 0
            this.player = player;
            
        
                this.onMouseMove = (e) => {
                    if (this.moving) {
                    
                        const rect = canvas.getBoundingClientRect();
                        const mouseX = e.clientX - rect.left;
                        const mouseY = e.clientY - rect.top;
                        this.angle = Math.atan2(mouseY - this.position.y, mouseX - this.position.x) + Math.PI;;
                    }
                };
        
                if (this.moving) {
                    window.addEventListener("mousemove", this.onMouseMove);
                }
        }

        draw() {
            c.save();
            c.translate((this.player.position.x + 14), (this.player.position.y + 19))
            c.rotate(this.angle);
            c.drawImage(
                this.image,
        -this.image.width / 2, 
        -this.image.height / 2,
                )
                c.restore();      
    }
}

class Control {
    constructor({ position, image, width, height }) {
        this.position = position; // Store the position separately
        this.image = image;
        this.moving = true;
        this.angle = 0;
        this.width = width
        this.height = height
       
       
    }

    draw() {
        c.save();
        // Draw the Control at its stored position
        c.translate(this.position.x, this.position.y);
        c.rotate(this.angle);
        c.drawImage(
            this.image,
            -this.image.width / 2,
            -this.image.height / 2
        );
        c.restore();
    }
}
class Disc {
    constructor({ position, image, spin, speed, turn, startingspeed, type }) {
      this.position = position;
      this.image = image;
      this.picked = false;
      this.width = 15;
      this.height = 15;
      this.tossed = false;
      this.landed = true;
      this.angle = 0;
      this.type = type
      this.speed = speed;
      this.startingspeed = startingspeed;
      this.turn = turn;
      this.distance = 0;
      this.spin = spin;
      this.velocity = { x: 0, y: 0 };
      this.speedReductionFactor = 0.1;
      // Initialize the spinFactor
      this.spinFactor = 0.01;
  
      this.update = () => {
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
        // Update the angle using this.spinFactor
        this.angle += this.spinFactor;
        // Adjust the spinFactor based on the spin value
        this.spinFactor += this.spin;
      };
    }
  
    reduceSpeed() {
      power *= this.speedReductionFactor;

    }
  
    draw() {
      c.save();
      c.translate(this.position.x + this.width / 2, this.position.y + this.height / 2);
      c.rotate(this.angle);
      c.drawImage(this.image, -this.width / 2, -this.height / 2);
      c.restore();
    }
  }

class Boundary {
    static width = 24
    static height = 24
    constructor({ position }) {
        this.position = position
        this.width = 24
        this.height = 24
    }

    draw() {
        c.fillStyle = "rgba(255, 0, 0, 0)"
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}
class waterBoundary {
    static width = 24
    static height = 24
    constructor({ position }) {
        this.position = position
        this.width = 24
        this.height = 24
    }

    draw() {
        c.fillStyle = "rgba(255, 0, 0, 0)"
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}
class playeronlyBoundary {
    static width = 24
    static height = 24
    constructor({ position }) {
        this.position = position
        this.width = 24
        this.height = 24
    }

    draw() {
        c.fillStyle = "rgba(255, 0, 0, 0)"
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}
class Line {
    constructor({ x1, y1, angle, length, color}) {
      this.x1 = x1;
      this.y1 = y1;
      this.angle = angle;
      this.length = length;
      this.color = color
    }
  
    draw() {
      c.strokeStyle = this.color;
      c.lineWidth = 2;
      c.beginPath();
      c.moveTo(this.x1, this.y1);
      const endX = this.x1 + Math.cos(this.angle) * this.length;
      const endY = this.y1 + Math.sin(this.angle) * this.length;
      c.lineTo(endX, endY);
      c.stroke();
    }
  }