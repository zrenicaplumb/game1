//defines the gameArea object
let gamePiece;

const gameArea = {
     //defines the gameArea.canvas property
     canvas: document.createElement("canvas"),
     //defines the gameArea's setup function which calls the other following appropriate functions
     setup() {
          this.setupCanvasDimensions();
          this.setContext();
          this.appendToHtml();
          this.interval();
     },
     setupCanvasDimensions() {
          this.canvas.width = 900;
          this.canvas.height = 650;
          this.canvas.id = "canvas_id";
     },
     setContext() {
          this.context = this.canvas.getContext("2d");
     },
     appendToHtml() {
          document.body.insertBefore(this.canvas, document.body.childNodes[0]);
     },
     interval() {
          setInterval(updateGameArea, 20);
     },
     clear() {
          this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
     },
};

function Component(width, height, color, x, y) {
     this.width = width;
     this.height = height;
     this.color = color;
     this.x = x;
     this.y = y;
     //update the component
     this.update = () => {
          let context = gameArea.context;
          context.fillStyle = color;
          context.fillRect(this.x, this.y, this.width, this.height);
     };
}

function updateGameArea() {
     gameArea.clear();
     gamePiece.x += 1;
     gamePiece.update();
}

//defines the startGame function
const startGame = () => {
     //calls gameArea object's setup method
     gameArea.setup();
     //instantiate gamePiece
     gamePiece = new Component(100, 100, "red", 250, 250);
};
//calls the startGame function

startGame();
