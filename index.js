//defines the gameArea object
let movingSquarePiece;

const gameArea = {
     //defines the gameArea.canvas property
     canvas: document.createElement("canvas"),
     //defines the gameArea's setup function which calls the other following appropriate functions
     setup: function () {
          this.canvas.width = 900;
          this.canvas.height = 650;
          this.canvas.id = "canvas_id";
          this.context = this.canvas.getContext("2d");
          document.body.insertBefore(this.canvas, document.body.childNodes[0]);
          setInterval(updateGameArea, 20);
     },

     clear: function () {
          this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
     },
};

const gamePad = {
     setup: function () {
          this.listeners();
     },
     listeners: function () {
          document
               .querySelector("#button_up")
               .addEventListener("click", this.moveUp);
          document
               .querySelector("#button_left")
               .addEventListener("click", this.moveLeft);
          document
               .querySelector("#button_right")
               .addEventListener("click", this.moveRight);
          document
               .querySelector("#button_down")
               .addEventListener("click", this.moveDown);
     },
     moveUp: function () {
          movingSquarePiece.speedY -= 1;
     },
     moveLeft: function () {
          movingSquarePiece.speedX -= 1;
     },
     moveRight: function () {
          movingSquarePiece.speedX += 1;
     },
     moveDown: function () {
          movingSquarePiece.speedY += 1;
     },
};

function MovingSquarePiece(width, height, color, x, y) {
     this.width = width;
     this.height = height;
     this.speedX = 0;
     this.speedY = 0;
     this.x = x;
     this.y = y;
     this.update = function () {
          context = gameArea.context;
          context.fillStyle = color;
          context.fillRect(this.x, this.y, this.width, this.height);
     };
     this.newPos = function () {
          this.x = this.speedX;
          this.y = this.speedY;
     };
}

function updateGameArea() {
     gameArea.clear();
     movingSquarePiece.newPos();
     movingSquarePiece.update();
}

//defines the startGame function
const startGame = () => {
     //calls gameArea object's setup method
     gameArea.setup();
     gamePad.setup();
     //instantiate movingSquarePiece
     movingSquarePiece = new MovingSquarePiece(100, 100, "red", 250, 250);
};
//calls the startGame function

startGame();
