
BasicGame.Game = function (game) {

    //  When a State is added to Phaser it automatically has the following properties set on it, even if they already exist:

    this.game;      //  a reference to the currently running game (Phaser.Game)
    this.add;       //  used to add sprites, text, groups, etc (Phaser.GameObjectFactory)
    this.camera;    //  a reference to the game camera (Phaser.Camera)
    this.cache;     //  the game cache (Phaser.Cache)
    this.input;     //  the global input manager. You can access this.input.keyboard, this.input.mouse, as well from it. (Phaser.Input)
    this.load;      //  for preloading assets (Phaser.Loader)
    this.math;      //  lots of useful common math operations (Phaser.Math)
    this.sound;     //  the sound manager - add a sound, play one, set-up markers, etc (Phaser.SoundManager)
    this.stage;     //  the game stage (Phaser.Stage)
    this.time;      //  the clock (Phaser.Time)
    this.tweens;    //  the tween manager (Phaser.TweenManager)
    this.state;     //  the state manager (Phaser.StateManager)
    this.world;     //  the game world (Phaser.World)
    this.particles; //  the particle manager (Phaser.Particles)
    this.physics;   //  the physics manager (Phaser.Physics)
    this.rnd;       //  the repeatable random number generator (Phaser.RandomDataGenerator)

    //  You can use any of these from any function within this State.
    //  But do consider them as being 'reserved words', i.e. don't create a property for your own game called "world" or you'll over-write the world reference.

};

BasicGame.Game.prototype = {

    create: function () {
        console.log("lancement du jeu");

        this.game.physics.startSystem(Phaser.Physics.ARCADE);
            //music = game.add.audio('music',1,true);
            //music.play();

        //create map
        //this.load.tilemap('map','data/level1ter.json', null, Phaser.Tilemap.TILED_JSON);    
        map = this.game.add.tilemap('map'+level);
        map.addTilesetImage('wall');
        map.addTilesetImage('floor');
        tilesetcarpet= map.addTilesetImage('carpet');
        tilesetpersos= map.addTilesetImage('persos');
        //console.log(tilesetpersos.firstgid);
        //create layer
        solLayer = map.createLayer('sol');
        murLayer = map.createLayer('mur');
        tapisLayer = map.createLayer('tapis');
        persosLayer = map.createLayer('persos');

        //collision on blockedLayer
        map.setCollisionBetween(1, 200, true, 'mur');

        //creation ennemis
        this.persos = new Persos(this.game);
        var tilespersos=persosLayer.getTiles(0,0,600,600);

        for(var j=0;j<tilespersos.length;j++){
            if(tilespersos[j].index-tilesetpersos.firstgid==0) player = this.game.add.sprite(tilespersos[j].left+15, tilespersos[j].top, 'characters');
              else if(tilespersos[j].index-tilesetpersos.firstgid>0){
               this.persos.addEnnemi(tilespersos[j].index-1-tilesetpersos.firstgid,tilespersos[j].left, tilespersos[j].top);
               nbofplayer++;
           }
        }
        this.persos.ennemis.add(player);
        persosLayer.destroy();
        //create player
        //player = this.game.add.sprite(260, 240, 'player');
        //this.persos.addEnnemi(0,180,210);
        //this.persos.addEnnemi(0,180,300);
        //this.persos.addEnnemi(0,420,210);
        
        player.anchor.set(0.5,0.5);
        player.scale.setTo(2,2);
        player.smoothed = false;
        player.direction=6;
        player.countdown=0;
        player.vie=50;

             //player animations
        player.animations.add('face',[0,1,2,3,4,5,4,3,2,1],15);
        player.animations.add('dos',[6,7,8,9,10,11,10,9,8,7],15);
        player.animations.add('profil',[12,13,14,15,16,17],15);
        player.animations.add('dead',[18,19,20,21], 15, true);
        player.animations.add('carpetleft',[15,15,24,24,24,15,15],15);
        player.animations.add('carpetdown'[3,3,22,22,22,3,3],15);
        player.animations.add('carpetup',[10,23,23,23,10],15);

            //player physics
        this.game.physics.enable(player);
        player.body.bounce.x = 0;
        player.body.bounce.y = 0;
        player.body.setSize(10,10,0,20);

        //  Our controls.
        cursors = this.game.input.keyboard.createCursorKeys();

        interscene=this.game.add.sprite(0,0,'interscene');
        interscene.animations.add('go',[12,12,12,13,13,13,13,14,14,14,14,15,15],8,false);
        interscene.frame=12;
        interscene.bringtoTop;
        timer=0;
    },

    update: function () {
    interscene.animations.play('go',6,false,true);

    if(timer>120){
    //level++;
    //this.quitGame();
    this.persos.moveEnnemis();
    player.body.velocity.x = 0;
    player.body.velocity.y = 0;



        //test fin de niveau
    if(this.persos.customerDead()||player.vie==0){
        level+=DEFAITE;
        this.quitGame();
    }

    if(this.persos.allEnnemiDead() && player.vie==50 ){
        level+=VICTOIRE;
        this.quitGame();
    }

    if(player.vie<50){
        player.vie--;
        return;
    }
    



    var stop =false;
            //collision 
    this.game.physics.arcade.collide(player,murLayer,function(){
        switch (player.direction) {
                case 0:
                     player.frame = 9;
                     break;
                case 3:
                    player.frame = 16;
                    break;
                case 6:
                    player.frame = 3;
                    break;
                case 9:
                    player.frame = 16;
                    break;
                default:
        }
        player.animations.stop();
        stop=true;


    },null,this);

    //player management 

    if (cursors.left.isDown){
        //  Move to the left
        player.direction=9; //heure sur une horloge
        player.body.velocity.x = -130;
        if (!stop) player.animations.play('profil');
        if (player.scale.x < 0) player.scale.x*=-1;
    }
    else if (cursors.right.isDown){
        //  Move to the right
        player.direction=3;
        player.body.velocity.x = 130;
        if (player.scale.x>0) player.scale.x*=-1;
        if (!stop) player.animations.play('profil');
    }

    else if (cursors.down.isDown){
        //  Move down
        player.direction=6;
        player.body.velocity.y = 130;
        if (!stop) player.animations.play('face');
    }
    else if (cursors.up.isDown){
        //  Move up
        player.direction=0;
        player.body.velocity.y = -130;

        if (!stop) player.animations.play('dos');
    }

    else if(!cursors.up.isDown&&!cursors.down.isDown&&!cursors.left.isDown&&!cursors.right.isDown&&player.countdown<4*framerate){
        switch (player.direction) {
                case 0:
                     player.frame = 9;
                     break;
                case 3:
                    player.frame = 16;
                    break;
                case 6:
                    player.frame = 3;
                    break;
                case 9:
                    player.frame = 16;
                    break;
                default:
        }
    }

    //procédure de lancement de tapis avec barre espace
    if(this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR).isDown && player.countdown==0){
        var tilex = solLayer.getTileX(player.body.x+player.body.width/2);
        var tiley = solLayer.getTileY(player.body.y+player.body.height/2);
        var worldtilex = map.getTile(tilex,tiley,tapisLayer,true).worldX;
        var worldtiley = map.getTile(tilex,tiley,tapisLayer,true).worldY;        
        var typetileID = tilesetcarpet.firstgid;
        //if (level>3) typetileID+=12;
        //if (level>5) typetileID+=12;
        var halftiletest;
        var ontileID=map.getTile(tilex,tiley,tapisLayer,true).index;
        var ontilex=tilex;
        var ontiley=tiley;
        var tilexbis=tilex;
        var tileybis=tiley;
        switch (player.direction) {
                case 0:
                    halftiletest=player.body.y+player.body.height/2-worldtiley;
                    tiley--;
                    typetileID+=4;
                     break;
                case 3:
                    halftiletest=player.body.x+player.body.width/2-worldtilex;
                    tilex++;
                    typetileID+=5;
                    break;
                case 6:
                    halftiletest=worldtiley+30-player.body.y-player.body.height/2;
                    tiley++;
                    typetileID+=2;
                    break;0
                case 9:
                    halftiletest=worldtilex+30-player.body.x-player.body.width/2;
                    tilex--;
                    typetileID+=3;
                    break;
                default:
        }
             //console.log("tileID cherché="+tileID+" tile ID Réel"+map.getTile(tilex,tiley,tapisLayer,true).index);

        if(map.getTile(tilex,tiley,tapisLayer,true).index == typetileID){ 
           
                       
                        carpetarray.push({"tilex":tilex,"tiley":tiley,"direction":player.direction,"count":framerate,"debut":true});  
                        player.countdown=framerate*6;
            dangeroustile=map.getTile(tilex,tiley,tapisLayer,true);
            switch (player.direction) {
                case 0:
                     player.animations.play('carpetup');
                     break;
                case 3:
                     player.animations.play('carpetleft');
                    break;
                case 6:
                     player.animations.play('carpetdown');
                    break;0
                case 9:
                     player.animations.play('carpetleft');
                    break;
                default:
            }
        }

        if(ontileID==typetileID && halftiletest<7){
            //map.swap(typetileID,typetileID+shiftcarpet,ontilex,ontiley,1,1,tapisLayer);
            carpetarray.push({"tilex":ontilex,"tiley":ontiley,"direction":player.direction,"count":framerate,"debut":true});          
            player.countdown=framerate*6;
            dangeroustile=map.getTile(tilex,tiley,tapisLayer,true);
            switch (player.direction) {
                case 0:
                     player.animations.play('carpetup');
                     break;
                case 3:
                     player.animations.play('carpetleft');
                    break;
                case 6:
                     player.animations.play('carpetdown');
                    break;0
                case 9:
                     player.animations.play('carpetleft');
                    break;
                default:
            }
        }

    }
    else if (player.countdown>0) player.countdown--;

    // avancée tapis
    for (var i=carpetarray.length-1;i>-1;i--){
            var ID= map.getTile(carpetarray[i].tilex,carpetarray[i].tiley,tapisLayer,true).index
            if(carpetarray[i].count==0&&!carpetarray[i].debut){

                
                           if(ID>=shiftcarpet+ tilesetcarpet.firstgid) map.swap(ID,ID-shiftcarpet,carpetarray[i].tilex,carpetarray[i].tiley,1,1,tapisLayer);
                switch (carpetarray[i].direction) {
                    case 0:
                         carpetarray[i].tiley--;
                        break;
                    case 3:
                        carpetarray[i].tilex++;
                        break;
                    case 6:
                        carpetarray[i].tiley++;
                        break;
                    case 9:
                        carpetarray[i].tilex--;
                        break;
                default:
                }

                ID= map.getTile(carpetarray[i].tilex,carpetarray[i].tiley,tapisLayer,true).index
                if(ID<0||(ID+carpetarray[i].direction)%2==0) carpetarray.splice(i,1);

                else if(ID<shiftcarpet+ tilesetcarpet.firstgid) {
                    map.swap(ID,ID+shiftcarpet,carpetarray[i].tilex,carpetarray[i].tiley,1,1,tapisLayer);
                    carpetarray[i].count=framerate;
                }    
            }
            else if(carpetarray[i].count==0&&carpetarray[i].debut)
            {
                map.swap(ID,ID+shiftcarpet,carpetarray[i].tilex,carpetarray[i].tiley,1,1,tapisLayer);
                carpetarray[i].count=framerate;
                carpetarray[i].debut=false;
                console.log("tapis");
            }
            else carpetarray[i].count--;
    }
    var ontile= map.getTile(solLayer.getTileX(player.body.x),solLayer.getTileY(player.body.y),tapisLayer,true)
    //collision player/tapis
    if((ontile.index>=tilesetcarpet.firstgid+shiftcarpet)&&(!ontile==dangeroustile)&&(playercountdown>0)){
        player.animations.play('dead');
        player.vie--;
    }
    //test collision avec ennemi
    this.game.physics.arcade.overlap(player,this.persos.ennemis,function(player,ennemi){
    if(ennemi!=player){
        if(ennemi.vie==50){
            player.animations.play('dead');
            player.vie--;
            ennemi.meurt();
        }

    }},null,this);

    //this.persos.ennemis.sort("y",Phaser.Group.SORT_ASCENDING);
    this.persos.ennemis.sort("y",Phaser.Group.SORT_ASCENDING);
     }
    else {
        timer++;
    }
},
    render: function (pointer){

    //this.game.debug.body(player);
    //this.game.debug.geom(new Phaser.Point(player.body.x+player.body.width/2, player.body.y+player.body.height/2), 'rgb(0,0,250)');
    //this.persos.debug();

    },

    quitGame: function (pointer) {
        console.log("quit level");
        //  Here you should destroy anything you no longer need.
        //  Stop music, delete sprites, purge caches, free resources, all that good stuff.

        //  Then let's go back to the main menu.
        /*solLayer.destroy();
        map.destroy();
        murLayer.destroy();
        tapisLayer.destroy();
        persosLayer.destroy();
        *///player.destroy();
        //this.persos.ennemis.destroy();
        carpetarray=[];
        console.log("en quit level");
        this.game.state.start('Interlevel');

    }

};
