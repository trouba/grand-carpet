var BasicGame = {};

BasicGame.Boot = function (game) {

};

BasicGame.Boot.prototype = {

    init: function () {

        //  Unless you specifically know your game needs to support multi-touch I would recommend setting this to 1
        this.input.maxPointers = 1;

        //  Phaser will automatically pause if the browser tab the game is in loses focus. You can disable that here:
        this.stage.disableVisibilityChange = true;

         //  If you have any desktop specific settings, they can go in here
         this.scale.pageAlignHorizontally = true;
         this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
         this.stage.smoothed = false;
         this.scale.refresh();
         document.getElementsByTagName('canvas')[0].getContext('2d').imageSmoothingEnabled= false;
         this.game.input.keyboard.addKeyCapture([Phaser.Keyboard.SPACEBAR]); 

    },

    preload: function () {

        //  Here we load the assets required for our preloader (in this case a background and a loading bar)
        //this.load.image('preloaderBackground', 'images/preloader_background.jpg');
        //this.load.image('preloaderBar', 'images/preloadr_bar.png');

    },

    create: function () {

        //  By this point the preloader assets have loaded to the cache, we've set the game settings
        //  So now let's start the real preloader going
        //this.state.start('Preloader');
        this.state.start('Preloader');
    }

};