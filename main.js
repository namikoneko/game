enchant();

window.onload = function(){
	var core = new Core(320,320);
	core.fps = 24;
	core.preload("./images/chara1.png","./images/start.png","./images/gameover.png");
	
	core.onload = function(){
		
	var createGameScene = function(){
		var GROUND_LINE = 250;
		var scene = core.rootScene;
		scene.backgroundColor = '#8cc820';

		var kuma = new Sprite(32,32);
		kuma.image = core.assets['./images/chara1.png'];
		kuma.x = 80;
		kuma.y = GROUND_LINE - kuma.height;

		scene.on('enterframe',function(){
			kuma.frame ++;
			if(kuma.frame > 2){
				kuma.frame = 0;
			}
		});

		scene.on('touchstart',function(e){
			kuma.tl.moveBy(0,-120,12,enchant.Easing.CUBIC_EASEOUT).moveBy(0,120,12,enchant.Easing.CUBIC_EASEIN);
		});

		scene.addChild(kuma);

		var scroll = 0;
		var scoreLabel = new Label("");
		scoreLabel.color = "#fff"; 
		scene.addChild(scoreLabel);
		SCROLL_SPEED = 1;
		scene.on("enterframe",function(){
			scroll += SCROLL_SPEED;
			scoreLabel.text = scroll.toString();
		});

	};


	createGameScene();
	};
	core.start();
};

