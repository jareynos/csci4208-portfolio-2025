class PlayScene extends Phaser.Scene {
    //construct new scene
    constructor() {
        super('play'); //set this scene's id within superclass constructor
        this.top_score = 100;
        this.winner = 'Top Score';
    }
    //preload external game assets
    preload() {
        this.load.path = 'assets/'; //Define file path
        this.load.image('background', 'background.png'); //Load tile images
        this.load.image('player', 'player.png'); //Load player image
        this.load.image('enemy', 'enemy.png'); //Load enemy image
        this.load.image('player-0', 'player-0.png'); //Load walk frame 0
        this.load.image('player-1', 'player-1.png'); //Load walk frame 1
        this.load.image('enemy-0', 'enemy-0.png'); //Load walk frame 0
        this.load.image('enemy-1', 'enemy-1.png'); //Load walk frame 1
        this.load.image('projectile', 'projectile.png'); //Load projectile image
        this.load.image('powerup-projectile', 'powerup-1.png');
        this.load.image('powerup-slay', 'powerup-2.png');

    }
    //create game data
    create() {
        this.create_map(); // create level
        this.create_hud(); //create hud
        this.create_projectiles(); //create projectiles
        this.create_animations(); //create animations
        this.create_player();
        this.create_enemies(); //helper method: create enemies
        this.create_collisions(); //create physics-related behaviors
        this.create_powerups();

    }
    create_enemies() {
        this.enemies = [];

        const event = new Object();
        event.delay = 200;
        event.callback = this.spawn_enemy;
        event.callbackScope = this;
        event.loop = true;
        this.time.addEvent(event, this);
    }
    spawn_enemy() {
        const position = {};                        // choose random position
        position.x = 640 + 32;
        position.y = Phaser.Math.Between(0, 480);

        const monster = new Enemy(this, position);  // create new enemy
        this.enemies.push(monster);                 // create instance

        this.score += 1;
    }
    slay_enemy(projectile, enemy) {
        enemy.destroy();
        projectile.destroy();
    }
    //Update game data
    update(time) {
        //update game state
        this.update_player(time);
        this.update_enemies(time);
        this.update_background();
        this.update_score();
    }

    update_background() {
        this.background.tilePositionX += 3;
    }
    update_score() {
        this.score_text.setText("Score: " + this.score);
        this.top_score_text.setText(`${this.winner}: ${this.top_score}`);

    }
    //update game state
    update_player(time) {
        this.player.move();
        this.player.attack(time);

    }
    update_enemies(time) {
        this.enemies.forEach(enemy => enemy.attack(time));
    }

    create_projectiles() {
        this.player_projectiles = [];
        this.enemy_projectiles = [];
    }

    //Load level
    create_map() {
        this.background = this.add.tileSprite(640 / 2, 480 / 2, 640, 480, 'background');
    }
    create_player() {
        this.player = new Player(this); //create player
    }
    //sets up overlap collisions behaviors
    create_collisions() {
        this.physics.add.overlap(this.player, this.enemies, this.game_over, null, this);
        this.physics.add.overlap(this.player_projectiles, this.enemies, this.slay_enemy, null, this);
        this.physics.add.overlap(this.enemy_projectiles, this.player, this.game_over, null, this);
        this.physics.add.overlap(this.player, this.powerups_slay, this.get_powerup_slay, null, this);
        this.physics.add.overlap(this.player, this.powerups_projectiles, this.get_powerup_projectile, null, this);
    }

    //create animations
    create_animations(scene) {
        if (!this.anims.exists('player-move')) {
            const anim_player_move = new Object();
            anim_player_move.key = 'player-move'; //key to register into phaser
            anim_player_move.frames = [{ key: 'player-0' }, { key: 'player-1' }]; //list of image keys for anim
            anim_player_move.frameRate = 6; //speed to play animation
            anim_player_move.repeat = -1; //-1 for infinite loop

            this.anims.create(anim_player_move); //facotory creates anim obj
        }

        if (!this.anims.exists('enemy-move')) {
            const anim_enemy_move = new Object();
            anim_enemy_move.key = 'enemy-move'; //key to register into phaser
            anim_enemy_move.frames = [{ key: 'enemy-0' }, { key: 'enemy-1' }]; //list of image keys for anim
            anim_enemy_move.frameRate = 6; //speed to play animation
            anim_enemy_move.repeat = -1; //-1 for infinite loop

            this.anims.create(anim_enemy_move); //facotory creates anim obj
        }
    }
    create_hud() {
        this.score = 0;
        this.score_text = this.add.text(32, 32, "");
        this.score_text.depth = 3;
        this.score_text.setColor('rgb(255,255,255)');

        this.top_score_text = this.add.text(600, 32, ""); //on a 640x480 size scene
        this.top_score_text.depth = 3;
        this.top_score_text.setOrigin(1, 0);
    }

    create_powerups() {
        this.powerups_projectiles = [];
        this.powerups_slay = [];

        var event = new Object();
        event.delay = 3000;
        event.callback = this.spawn_powerup;
        event.callbackScope = this;
        event.loop = true;

        this.time.addEvent(event, this);
    }
    spawn_powerup() {
        if (Phaser.Math.Between(0, 4) === 0) {
            const config = new Object();
            config.y = Phaser.Math.Between(0, 480);
            config.x = 640 + 32;
            config.type = 'powerup-projectile'

            const potion = new PowerUp(this, config);
            this.powerups_projectiles.push(potion);
        } else if (Phaser.Math.Between(0, 4) === 0) {
            const config = new Object();
            config.y = Phaser.Math.Between(0, 480);
            config.x = 640 + 32;
            config.type = 'powerup-slay'

            const potion = new PowerUp(this, config);
            this.powerups_slay.push(potion);
        }
    }
    get_powerup_slay(player, powerup) {
        this.enemies.forEach(monster => monster.destroy());
        this.enemy_projectiles.forEach(bullet => bullet.destroy());
        powerup.destroy();
        this.cameras.main.flash();
    }

    get_powerup_projectile(player, powerup) {
        this.player.bulletScale = Math.min(this.player.bulletScale + 1, 3);
        powerup.destroy();
    }
    game_over() {
        if (this.score >= this.top_score) {
            this.top_score = this.score;
            this.physics.pause();
            this.winner = prompt("Winner! Enter your name: ") ?? "Top Score";
            this.input.keyboard.keys = [];
        }
        this.cameras.main.flash();
        this.scene.restart();
    }
}