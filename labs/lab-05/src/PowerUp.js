class PowerUp extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, config) {
        super(scene, config.x, config.y, config.type);
        this.depth = 1;

        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.body.velocity.x = -300;
    }
}