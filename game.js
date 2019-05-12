enchant();

window.onload = function(){
	core = new Core(320,320);
	core.fps = 16;
	//core.preload('betty.png','one_0.mp3','Ready.wav','pad.png','./images/apad.png','./images/icon0.png','./images/font0.png');
	core.preload('betty.png','one_0.mp3','Ready.wav');
	//core.preload('betty.png');
	//core.enchant.DOMSound.load('betty.png','one_0.mp3');
	//core.preload('betty.png','Ready.wav');
	//core.bgm = Sound.load('one_0.mp3');
	//core.se = Sound.load('Ready.wav');

	core.onload = function(){
		/*
		core.assets['one_0.mp3'].play();
		core.assets['one_0.mp3'].volume = 0.1;
		core.assets['Ready.wav'].play();
		core.assets['Ready.wav'].volume = 0.1;
		*/

		var player = new Sprite(48,48);	
		player.image = core.assets['betty.png'];
		player.frame = 3;
		player.x = 120;
		player.y = 50;
		player.tick = 0;
		core.rootScene.addChild(player);

		var scene01 = new Scene();
		//scene01.backgroundColor = "#dddddd";
		scene01.backgroundColor = "#ffffff";
		var label01 = new Label();
		label01.text = "label01"; 
		scene01.addChild(label01);

		player.addEventListener('enterframe',function(e){


			if(pad.input.left){
				this.x -= 4;
				this.frame = this.tick % 4 * 4 + 1;
				this.tick ++;
			}
			if(pad.input.right){
				this.x += 4;
				this.frame = this.tick % 4 * 4 + 3;
				this.tick ++;
			}
			if(pad.input.up){
				this.y -= 4;
				this.frame = this.tick % 4 * 4 + 2;
				this.tick ++;
			}
			if(pad.input.down){
				this.y += 4;
				this.frame = this.tick % 4 * 4;
				this.tick ++;
			}

			if(core.input.left){
				this.x -= 4;
				this.frame = this.tick % 4 * 4 + 1;
				this.tick ++;
			}
			if(core.input.right){
				this.x += 4;
				this.frame = this.tick % 4 * 4 + 3;
				this.tick ++;
			}
			if(core.input.up){
				this.y -= 4;
				this.frame = this.tick % 4 * 4 + 2;
				this.tick ++;
			}
			if(core.input.down){
				this.y += 4;
				this.frame = this.tick % 4 * 4;
				this.tick ++;

				if(this.tick > 30){
					core.end();
					//core.assets['one_0.mp3'].stop();
					//core.rootScene.removeChild(player);
				}
				/*
				*/
			}
		});

		player.addEventListener('touchmove',function(e){
			this.x = e.x - this.width/2;
			this.y = e.y - this.height/2;
		});

		/*
		var infoLabel = new Label('hoge');
		infoLabel.x = 20;
		infoLabel.y = 0;
		infoLabel.color = '#0000ff';
		//infoLabel.font = '14px sens-serif';
		infoLabel.font = '16px sens-serif';

		*/

		/*
		var button = new Button();
		button.x = 220;
		button.y = 220;

		button.addEventListener('touchstart',function(e){
				core.rootScene.removeChild(player);
		});

		core.rootScene.addChild(button);
		*/
		var pad = new Pad();
		pad.x = 10;
		pad.y = 220;
		core.rootScene.addChild(pad);

		var buttonA = new Button();
		buttonA.x = 260;
		buttonA.y = 260;
		buttonA.width = 20;
		buttonA.height = 20;
		buttonA.text = "A";
		core.rootScene.addChild(buttonA);

		buttonA.addEventListener('touchstart',function(e){
			//core.rootScene.removeChild(player);
			core.pushScene(scene01);
			//label01.text = "modified"; 
		});
		/*
		var buttonB = new Button();
		buttonB.x = 210;
		buttonB.y = 260;
		buttonB.width = 20;
		buttonB.height = 20;
		buttonB.text = "B";
		core.rootScene.addChild(buttonB);
		*/
		//var label01 = new Label();
		//label01.text = "label01"; 
		//scene01.addChild(label01);

	}
	core.start();
}
