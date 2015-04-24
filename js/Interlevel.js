
BasicGame.Interlevel = function (game) {

};

BasicGame.Interlevel.prototype = {
    create: function () {
        /*
        //  We've already preloaded our assets, so let's kick right into the Main Menu itself.
        //  Here all we're doing is playing some music and adding a picture and button
        //  Naturally I expect you to do something significantly better :)

        this.music = this.add.audio('titleMusic');
        this.music.play();
        
        this.add.sprite(0, 0, 'titlepage');

        this.playButton = this.add.button(400, 600, 'playButton', this.startGame, this, 'buttonOver', 'buttonOut', 'buttonOver');
        */

        //pour la version jam (pas d'ajout d'inter-titre), décommenter les lignes ci-dessous
        /*if (level>DEFAITE) level=0;
        else if (level>VICTOIRE) level++;
        level %=VICTOIRE;*/


        this.txtDebug = "";
        interscene3=this.game.add.sprite(0,0,'interscene');

        if (level == nbLevels) {
            // ici on affiche interscene finale
            this.txtDebug = "Victoire complète! Space to restart";
            level -= level%VICTOIRE;
        }
        else if (level>DEFAITE) {
            if (lifes==0) {
                // ici on affiche interscene game over
                this.txtDebug = "défaite complète, Space to restart";
                level -= level%VICTOIRE;
            } else {
                lifes--;
                //ici on affiche interscene tu perds une vie
                this.txtDebug = "perdu! Vie(s) restante(s) : "+lifes;
            }
        } else if (level>VICTOIRE) {
            // ici on afiche interscene tu montes d'un niveau
            this.txtDebug = "Victoire!";
            level++;
        } 




        //this.state.start('Interlevel');
        //startGame();
    },

    update: function () {
        //  By this point the preloader assets have loaded to the cache, we've set the game settings
        //  So now let's start the real preloader going
        //this.state.start('Preloader');

        switch(level){
                case 0:

                     this.state.start('MainMenu');
                     break;
                case debutMonde2:
                    interscene3.frame=9;
                    this.game.input.keyboard.onDownCallback = function(e) {
                        this.game.input.keyboard.onDownCallback = null;
   //for demonstration, next line prints the keyCode to console
            //console.log(e);
            this.game.input.keyboard.onDownCallback = null;
                    console.log(e);
                    scene=6; 
                    };
                    if(scene==6){
                    interscene3.frame=8;
                    this.game.input.keyboard.onDownCallback = function(e) {
                        this.game.input.keyboard.onDownCallback = null;
   //for demonstration, next line prints the keyCode to console
                    //console.log(e);
                    scene=7; 
                    } ;  
                    }   
                    if (scene==7) this.state.start('Game');
                    break;
                case debutMonde3:
                    interscene3.frame=11;
                    this.game.input.keyboard.onDownCallback = function(e) {
                        this.game.input.keyboard.onDownCallback = null;
   //for demonstration, next line prints the keyCode to console
            //console.log(e);
                    //console.log(e);
                    scene=8; 
                    };
                    if(scene==8){
                    interscene3.frame=10;
                    this.game.input.keyboard.onDownCallback = function(e) {
                        this.game.input.keyboard.onDownCallback = null;
   //for demonstration, next line prints the keyCode to console
                    //console.log(e);
                    scene=9; 
                    } ;  
                    }   
                    if (scene==9) this.state.start('Game');

                    break;
                case 7:
                    level=0;
                    break;
                default:
                    if (level<VICTOIRE) {this.state.start('Game');
                } else if (this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR).isDown){
                     level %=VICTOIRE;
                }
        }

        
        },

    render: function() {
        this.game.debug.text(this.txtDebug, 32, 32);
    }

};
