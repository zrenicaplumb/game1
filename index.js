//defines the gameArea object
const gameArea = {
     //defines the gameArea.canvas property
     canvas: document.createElement("canvas"),
     //defines the gameArea's setup function which calls other appropriate functions
     setup() {
          debugger;
          this.setupCanvasDimensions();
          this.setContext();
          this.appendToHtml();
     },
     setupCanvasDimensions() {
          this.canvas.width = "800px";
          this.canvas.height = "600px";
     },
     setContext() {
          this.context = this.canvas.getContext("2d");
     },
     appendToHtml() {
          document.body.insertBefore(this.canvas, document.body.childNodes[0]);
     },
};

//defines the startGame function
const startGame = () => {
     //calls gameArea object's setup method
     gameArea.setup();
};
//calls the startGame function
console.log(gameArea);

startGame();
