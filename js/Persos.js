var decalX = 14;
var decalAnchorY = 9;

var Persos = function (jeu) {
	this.ennemis = jeu.add.group();
	this.clients = jeu.add.group();
	this.game = jeu;
  this.eNb = 0;
  this.clientsPasContents=false;
}

Persos.prototype = {
	addEnnemi: function (type, setX, setY) {
		var newEnnemi;
		switch(type) {
			case 0:
				newEnnemi = this.game.add.sprite(setX+decalX, setY-decalAnchorY, 'characters');
        newEnnemi.animations.add('face',[25,26,27,28,29,30,29,28,27,26], 15, true);
        newEnnemi.animations.add('dos',[31,32,33,34,35,36,35,34,33,32], 15, true);
        newEnnemi.animations.add('profil',[37,38,39,40,41,42], 15, true);
        newEnnemi.animations.add('dead',[43,44,45,46], 15, true);
        newEnnemi.deplacement = this.deplacementAlea;
        newEnnemi.frame = 25;
        //newEnnemi.deplacement = this.deplacementPerpendiculaire;
        //newEnnemi.deplacement = this.deplacementHuit;
        newEnnemi.vitesse =1;
        //
        newEnnemi.compteur = 5;
				break;
    case 1:
        newEnnemi = this.game.add.sprite(setX+decalX, setY-decalAnchorY, 'characters');
        newEnnemi.animations.add('face',[47,48,49,50,51,50,49,48], 15, true);
        newEnnemi.animations.add('dos',[52,53,54,55,56,55,54,53], 15, true);
        newEnnemi.animations.add('profil',[57,58,59,60], 15, true);
        newEnnemi.animations.add('dead',[61], 15, true);
        newEnnemi.frame = 47;
        //newEnnemi.deplacement = this.deplacementAlea;
        newEnnemi.deplacement = this.deplacementPerpendiculaire;
        //newEnnemi.deplacement = this.deplacementHuit;
        newEnnemi.vitesse =1;
        //
        newEnnemi.compteur = 5;
        break;
    case 3:
        newEnnemi = this.game.add.sprite(setX+decalX, setY-decalAnchorY, 'characters');
        newEnnemi.animations.add('face',[68,69,70,71,72,73,72,71,70,69], 15, true);
        newEnnemi.animations.add('dos',[74,75,76,77,78,79,78,77,76,75], 15, true);
        newEnnemi.animations.add('profil',[80,81,82,83,84,85], 15, true);
        newEnnemi.animations.add('dead',[86,87,88,89], 15, true);
        newEnnemi.frame = 68;
        //newEnnemi.deplacement = this.deplacementAlea;
        //newEnnemi.deplacement = this.deplacementPerpendiculaire;
        newEnnemi.deplacement = this.deplacementHuit;
        newEnnemi.vitesse =1;
        //
        newEnnemi.compteur = 5;
        break;
    case 9:
        newEnnemi = this.game.add.sprite(setX+decalX, setY-decalAnchorY, 'characters');
        newEnnemi.animations.add('face',[90,91,92,93,94,95,94,93,92,91], 15, true);
        newEnnemi.animations.add('dos',[96,97,98,99,100,101,100,99,98,97], 15, true);
        newEnnemi.animations.add('profil',[102,103,104,105,106,107], 15, true);
        newEnnemi.animations.add('dead',[108,109,110,111], 15, true);
        newEnnemi.frame = 90;
        //newEnnemi.deplacement = this.deplacementAlea;
        //newEnnemi.deplacement = this.deplacementPerpendiculaire;
        newEnnemi.deplacement = this.deplacementHuit;
        newEnnemi.vitesse =1;
        //
        newEnnemi.compteur = -2;
        break;
    case 4:
        newEnnemi = this.game.add.sprite(setX+decalX, setY-decalAnchorY, 'characters');
        newEnnemi.animations.add('face',[112,113,114,115,116,117,116,115,114,113], 15, true);
        newEnnemi.animations.add('dos',[118,119,120,121,122,123,122,121,120,119], 15, true);
        newEnnemi.animations.add('profil',[124,125,126,127,128,129], 15, true);
        newEnnemi.animations.add('dead',[130,131,132,133], 15, true);
        newEnnemi.frame = 112;
        //newEnnemi.deplacement = this.deplacementAlea;
        newEnnemi.deplacement = this.deplacementPerpendiculaire;
        //newEnnemi.deplacement = this.deplacementHuit;
        newEnnemi.vitesse =1;
        //
        newEnnemi.compteur = 5;
        break;
    case 5:
        newEnnemi = this.game.add.sprite(setX+decalX, setY-decalAnchorY, 'characters');
        newEnnemi.animations.add('face',[134,135,136,137,138,139,138,137,136,135], 15, true);
        newEnnemi.animations.add('dos',[140,141,142,143,144,145,144,143,142,141], 15, true);
        newEnnemi.animations.add('profil',[146,147,148,149,150,151], 15, true);
        newEnnemi.animations.add('dead',[152,153,154,155], 15, true);
        newEnnemi.frame = 134;
        newEnnemi.deplacement = this.deplacementAlea;
        //newEnnemi.deplacement = this.deplacementPerpendiculaire;
        //newEnnemi.deplacement = this.deplacementHuit;
        newEnnemi.vitesse =1;
        //
        newEnnemi.compteur = 5;
        break;
    case 6:
        newEnnemi = this.game.add.sprite(setX+decalX, setY-decalAnchorY, 'characters');
        newEnnemi.animations.add('face',[156,157,158,159,160,161,160,159,158,157], 15, true);
        newEnnemi.animations.add('dos',[162,163,164,165,166,167,166,165,164,163], 15, true);
        newEnnemi.animations.add('profil',[168,169,170,171,172,173], 15, true);
        newEnnemi.animations.add('dead',[174,175,176,177], 15, true);
        newEnnemi.frame = 156;
        //newEnnemi.deplacement = this.deplacementAlea;
        newEnnemi.deplacement = this.deplacementPerpendiculaire;
        //newEnnemi.deplacement = this.deplacementHuit;
        newEnnemi.vitesse =1;
        //
        newEnnemi.compteur = 5;
        break;
    case 7:
        newEnnemi = this.game.add.sprite(setX+decalX, setY-decalAnchorY, 'characters');
        newEnnemi.animations.add('face',[178,179,180,181,182,183,182,181,180,179], 15, true);
        newEnnemi.animations.add('dos',[184,185,186,187,188,189,188,187,186,185], 15, true);
        newEnnemi.animations.add('profil',[190,191,192,193,194,195], 15, true);
        newEnnemi.animations.add('dead',[196,197,198,199], 15, true);
        newEnnemi.frame = 178;
        newEnnemi.deplacement = this.deplacementAlea;
        //newEnnemi.deplacement = this.deplacementPerpendiculaire;
        //newEnnemi.deplacement = this.deplacementHuit;
        newEnnemi.vitesse =1;
        //
        newEnnemi.compteur = 5;
        break;
    case 8:
        newEnnemi = this.game.add.sprite(setX+decalX, setY-decalAnchorY, 'characters');
        newEnnemi.animations.add('face',[200,201,202,203,204,205,204,203,202,201], 15, true);
        newEnnemi.animations.add('dos',[206,207,208,209,210,211,210,209,208,207], 15, true);
        newEnnemi.animations.add('profil',[212,213,214,215,216,217], 15, true);
        newEnnemi.animations.add('dead',[218,219,220,221], 15, true);
        newEnnemi.frame = 200;
        //newEnnemi.deplacement = this.deplacementAlea;
        //newEnnemi.deplacement = this.deplacementPerpendiculaire;
        newEnnemi.deplacement = this.deplacementHuit;
        newEnnemi.vitesse =1;
        //
        newEnnemi.compteur = -2;
        break;
    case 2:
        newEnnemi = this.game.add.sprite(setX+decalX, setY-decalAnchorY, 'characters');
        newEnnemi.animations.add('face',[222,223,224,225,226,227,226,225,224,223], 15, true);
        newEnnemi.animations.add('dos',[228,229,230,231,232,233,232,231,230,229], 15, true);
        newEnnemi.animations.add('profil',[234,235,236,237,238,239], 15, true);
        newEnnemi.animations.add('dead',[240,241,242,243], 15, true);
        newEnnemi.frame = 222;
        //newEnnemi.deplacement = this.deplacementAlea;
        //newEnnemi.deplacement = this.deplacementPerpendiculaire;
        newEnnemi.deplacement = this.deplacementHuit;
        newEnnemi.vitesse =1;
        //
        newEnnemi.compteur = 5;
        break;

			default:
				break;
		}

    newEnnemi.typeP= type;
    newEnnemi.direction = 0;
    newEnnemi.papa = this;
    this.game.physics.enable(newEnnemi);
    newEnnemi.anchor.set(0.5,0.5);
    newEnnemi.body.setSize(12,12,0,20);
    newEnnemi.body.bounce.x=0;
    newEnnemi.body.bounce.y=0;
    this.game.physics.enable(newEnnemi);
    newEnnemi.scale.setTo(2,2);
    newEnnemi.smoothed = false;
    newEnnemi.vie = 50;

    newEnnemi.meurt = function() {
      if (this.type <3){
        newEnnemi.play('dead');
        newEnnemi.vie--;
      }
    }
    newEnnemi.deplacement(newEnnemi,murLayer.getTileX(newEnnemi.x), murLayer.getTileY(newEnnemi.y+decalAnchorY));
		this.ennemis.add(newEnnemi);
    if (type<4)this.eNb++;
	},
  
  deplacementAlea: function (perso, tilex, tiley) {     
      var choix=0;

      var dir = perso.papa.getDirs(tilex,tiley);
      for (var i =0;i<4;i++) {
        if (dir[i]==null) choix++;
      }
      if (choix>2 && perso.compteur>3) {perso.compteur=0; dir[perso.direction] = 1;}
      perso.compteur--;
      if (perso.compteur==0) {dir[perso.direction] = 1;}
      while (dir[perso.direction] !=null) {
        perso.compteur =4;;
        perso.direction = Math.floor(4*Math.random()); }
        //console.log("perso.direction : "+perso.direction);
  },
  
  deplacementPerpendiculaire: function(perso, tilex,tiley) {
    var nbchoix=0;
    var dir = perso.papa.getDirs(tilex,tiley);
    for (var i =0;i<4;i++) {
        if (dir[i]==null) nbchoix++;
    }
    var choix = [];
    if (nbchoix>2||dir[perso.direction]!=null) {
      console.log ("choix!");
        var idTab= (perso.direction+1)%4;
       if (dir[idTab] == null) choix.push(idTab);
       idTab = (idTab+2)%4;
       if (dir[idTab]== null) choix.push(idTab);
      choix.push ((perso.direction+2)%4);
      if (dir[perso.direction] == null) choix.push (perso.direction);
      var rand = Math.floor(Math.random()*40);
      if (rand<18 || choix.length==1) {perso.direction = choix[0];
      } else if (rand<36 || choix.length==2) {perso.direction = choix[1];
      } else if (rand<38 || choix.length==3) {perso.direction = choix[2];
      } else {perso.direction = choix[3];}
    }
    //console.log("direction : "+perso.direction+" ; new direction : "+choix[0]+" ou "+choix[1]);
  },

  deplacementHuit: function (perso, tilex, tiley){
    var nbchoix=0;
    var dir = perso.papa.getDirs(tilex,tiley);
    for (var i =0;i<4;i++) {
        if (dir[i]==null) nbchoix++;
    }

    var signe = 1;
    if (perso.compteur<0) signe = -1;
    var newChoix = perso.direction;
    if (nbchoix>2 && dir[perso.direction] == null) {
      perso.compteur--;
      //console.log ("(perso.compteur%2) : "+(perso.compteur%2));
      if ((perso.compteur*signe)%2) newChoix = (newChoix+signe)%4;   
    }
    if (newChoix<0) newChoix = 3;
    while (dir[newChoix]!=null) {
      newChoix = (newChoix+signe)%4;
      if (newChoix<0) newChoix = 3;
    }
    perso.direction = Math.abs(newChoix);

    if (perso.compteur == 0) perso.compteur = 6;
    if (perso.compteur == -8) perso.compteur = -2;
  },

  getDirs: function (tilex,tiley) {
      return [map.getTile(tilex,tiley-1,murLayer),
              map.getTile(tilex+1,tiley,murLayer),
              map.getTile(tilex,tiley+1,murLayer),
              map.getTile(tilex-1,tiley,murLayer)];
  },

	moveEnnemis: function () {
		this.ennemis.forEach(function(item) {
        if (item!= player){
          if (item.vie<50) {
            item.vie--;
            //item.alpha =item.vie%2;
            if (item.vie == 0) {
              
              if (item.typeP <4){ item.papa.eNb--;
              } else { item.papa.clientsPasContents=true;} 
              item.kill();
            }
          } else {
            switch(item.direction) {
              case 0:
                item.y -= item.vitesse;
                item.animations.play('dos');
                break;
              case 1:
                item.x += item.vitesse;
                item.animations.play('profil');
                if (item.scale.x > 0) item.scale.x*=-1;
                break;
              case 2:
                item.y += item.vitesse;
                item.animations.play('face');
                break;
              case 3:
                item.x -= item.vitesse;
                item.animations.play('profil');
                if (item.scale.x < 0) item.scale.x*=-1;
                break
              default:

            }
            var tilex = murLayer.getTileX(item.x);
            var tiley = murLayer.getTileY(item.y+decalAnchorY);
            var iDtile = map.getTile(tilex,tiley,tapisLayer);
            if (iDtile!=null && iDtile.index >= tilesetcarpet.firstgid+shiftcarpet && iDtile.index<=tilesetcarpet.firstgid+shiftcarpet*2) {
                item.meurt();
            } else {if ((item.x-decalX)%30==0 && (item.y+decalAnchorY)%30==0) {item.deplacement(item, tilex, tiley);}}
	        }
        }
    	});

	},

  customerDead: function() {
    return this.clientsPasContents;
  },

  allEnnemiDead: function() {
    if (this.eNb>0) return false;
    return true;
  },

  debug: function(){
    this.ennemis.forEach(function(item) {
      if (item!=player) item.papa.game.debug.body(item);
    });
  }
}