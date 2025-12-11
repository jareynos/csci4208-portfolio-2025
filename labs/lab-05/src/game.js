const config = new Object();

config.width = 640; //Width of viewport
config.height = 480; //Height of viewport
config.scene = [PlayScene]; //Scenes for this game
config.physics = { default: 'arcade' }; //Physics for collisions


const game = new Phaser.Game(config); //New game with configs