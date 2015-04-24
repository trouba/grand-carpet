
BasicGame.MainMenu = function (game) {

	this.playButton = null;

};

BasicGame.MainMenu.prototype = {

	create: function () {
		/*
		//	We've already preloaded our assets, so let's kick right into the Main Menu itself.
		//	Here all we're doing is playing some music and adding a picture and button
		//	Naturally I expect you to do something significantly better :)

		this.music = this.add.audio('titleMusic');
		this.music.play();

		this.add.sprite(0, 0, 'titlepage');

		this.playButton = this.add.button(400, 600, 'playButton', this.startGame, this, 'buttonOver', 'buttonOut', 'buttonOver');
		*/
		this.game.musique.stop();
		timer=0;
		scene=0;
		lifes=3;
		interscene=this.game.add.sprite(0,0,'interscene');
		interscene2=this.game.add.sprite(0,0,'interscene');
		interscene2.frame=1;
		interscene2.alpha=0;
		interscene2.animations.add('bellring',[1,2,3,4,4,3,2,1],15,false);
		//this.state.start('Interlevel');
		//startGame();
	},

	update: function () {
		//	Do some nice funky main menu effect here
		interscene2.alpha=timer/20;
		timer++;
		if(timer>20&&scene<2){
			
			this.game.input.keyboard.onDownCallback = function(e) {
   //for demonstration, next line prints the keyCode to console
   			//console.log(e);
   			interscene2.animations.play('bellring',15,false,true);
   			this.game.clochette.play();
   			//console.log(clochette);
   			interscene.frame=5;
   			scene=2; 
  			}
  		}
  		if(scene==2){
  			this.game.input.keyboard.onDownCallback = function(e) {
  				this.game.input.keyboard.onDownCallback = null;
   //for demonstration, next line prints the keyCode to console
   			//console.log(e);
   			level=1;
   			interscene.frame=7;
   			scene=3;
   			}
   		 }
		if(scene==3){
  			this.game.input.keyboard.onDownCallback = function(e) {
  				this.game.input.keyboard.onDownCallback = null;
   //for demonstration, next line prints the keyCode to console
   			//console.log(e);
   			interscene.frame=6;
   			scene=4;
   			}
   		}	
   		if(scene==4){
  			this.game.input.keyboard.onDownCallback = function(e) {
  				this.game.input.keyboard.onDownCallback = null;
   //for demonstration, next line prints the keyCode to console
   			//console.log(e);
   			//interscene.frame=7;
   			scene=5;
   			}	
  		}
  		if (scene==5) {
  		interscene.kill();
		//	Ok, the Play Button has been clicked or touched, so let's stop the music (otherwise it'll carry on playing)
		//this.music.stop();
		scene=0;
		//	And start the actual game
		this.game.musique.play();
    	this.state.start('Interlevel');


  		}
	//console.log(scene);
	},


	startGame: function (pointer) {
	interscene.kill();
		//	Ok, the Play Button has been clicked or touched, so let's stop the music (otherwise it'll carry on playing)
		//this.music.stop();

		//	And start the actual game
    this.state.start('Interlevel');

	}

};
