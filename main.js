enchant();

window.onload = function(){

    core = new Core(320,320);
    core.fps = 16;

    //core.preload('images/chara1.png','images/map2.png','images/timeup.png');
    core.preload('images/chara1.png','images/map2.png','images/gameover.png','images/icon0.png');

    core.score = 0;
    //core.limitTime = 60;
    core.limitTime = 30;
    core.keybind(88,'a');


    core.onload = function(){
    
	bg  = new Sprite(640,320);
	bg.backgroundColor = '#4abafa';
	bg.buttonMode = 'a';

	var image = new Surface(320,320);
	//var image = new Surface(640,320);

	/*
	*/
	//for(var i = 0;i < 10;i++){
	for(var i = 0;i < 20;i++){
		image.draw(core.assets['images/map2.png'],0,0,16,16,i * 16,16 * 12,16,16);
	}
	//image.draw(core.assets['images/chara1.png']);

	bg.image = image;

	bg.addEventListener('enterframe',function(){
	    this.x -= 4;
	    if(this.x < -320)this.x = 0;
	
	});

	core.rootScene.addChild(bg);
	
	player = new Sprite(32,32);
	player.image = core.assets['images/chara1.png'];
	player.x = 120;
	player.y = 160;
	player.frame = 0;

	player.isJump = false;
	player.vy = 0;

	player.addEventListener('enterframe',function(e){
		this.frame = core.frame % 3;
	/*ジャンプ

	if(core.input.a){
	    this.vy = -64;
	    this.isJump = true;
	}
	if(this.y < 160){
	    this.vy = 4;
	    this.isJump = false;
	}
	if(this.isJump == false && this.y == 160)this.vy = 0

	this.y += this.vy;
	*/
	if(core.input.a === true && this.y == 160){
		//this.vy = -5;
		this.vy = -10;
	}
	    	this.y += this.vy; 
	    	//this.vy += 0.25; 
	    	this.vy += 1; 

	    if(this.y > 160){
	    	this.y = 160;
	    	this.vy = 0;
	    }

	});

	core.rootScene.addChild(player);

	core.rootScene.addEventListener('enterframe',function(e){
	    if(core.limitTime == 0){
	        core.end(null,null,core.assets['images/gameover.png'])
	    }

	    if(core.frame % core.fps == 0){
	        core.score += 10;
		core.limitTime --;
		timeLabel.text = 'TIME:' + core.limitTime;
		scoreLabel.score = core.score;
	    }
	    var bom_height = 0;
	    //if(core.frame % 36 == 0){
	    //if(core.frame % 18 == 0){
	    if(core.frame % 12 == 0){
		var bom_height_rand = rand(6);
		switch(bom_height_rand){
		    case 1:
			bom_height_rand = 150;
			break;
		    case 2:
			bom_height_rand = 150;
			break;
		    case 3:
			bom_height_rand = 176;
			break;
		    case 4:
			bom_height_rand = 176;
			break;
		    case 5:
			bom_height_rand = 176;
			break;
		    case 6:
			bom_height_rand = 176;
			break;
		}
		var obstacle = new Obstacle(384,bom_height_rand);
			//if(rand(100) < 80){
				//var obstacle = new Obstacle(384,176);
				//var obstacle = new Obstacle(384,100);
		//}
	    }
	});//ルートシーンのイベントリスナ

	    var timeLabel = new MutableText(10,0);
	    timeLabel.text = 'TIME:' + core.limitTime;
	    core.rootScene.addChild(timeLabel);

	    var scoreLabel = new ScoreLabel(160,0);
	    scoreLabel.score = 0;
	    scoreLabel.easing = 0;
	    core.rootScene.addChild(scoreLabel);
	/*
	*/


    
    }

    core.start();

}
var Obstacle = enchant.Class.create(enchant.Sprite,{
	initialize: function(x,y,mode){
		enchant.Sprite.call(this,16,16);
	    	this.image = core.assets['images/icon0.png'];
	    	this.x = x;
	    	this.y = y;
	    	this.frame = 24;
	    	this.addEventListener('enterframe',function(e){
			//this.x -= 4;
			this.x -= 8;
		    	if(this.x < -16)this.remove();
		    	if(this.within(player,16)){
	        		core.end(null,null,core.assets['images/gameover.png'])
				//core.score -= 50;
			    	//this.remove();
			}
		});
	core.rootScene.addChild(this);
	},
    remove: function(){
	core.rootScene.removeChild(this);
    	delete this;
    }
});

var rand = function(n){
	return Math.floor(Math.random() * n) + 1;
};
/*
*/
