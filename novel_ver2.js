enchant();

window.onload = function(){
	core = new Core(320,320);
	core.fps = 16;
	//core.preload('betty.png','one_0.mp3','Ready.wav','pad.png','./images/apad.png','./images/icon0.png','./images/font0.png');
//	core.preload('betty.png','one_0.mp3','Ready.wav');
	//core.preload('betty.png');
	//core.enchant.DOMSound.load('betty.png','one_0.mp3');
	//core.preload('betty.png','Ready.wav');
	//core.bgm = Sound.load('one_0.mp3');
	//core.se = Sound.load('Ready.wav');

	core.onload = function(){
		/*
		//音楽
		core.assets['one_0.mp3'].play();
		core.assets['one_0.mp3'].volume = 0.1;
		core.assets['Ready.wav'].play();
		core.assets['Ready.wav'].volume = 0.1;

		//startbuttonを表示する
		var buttonA = new Button();
		buttonA.x = 20;
		buttonA.y = 260;
		buttonA.width = 200;
		buttonA.height = 20;
		buttonA.text = "start";
		core.rootScene.addChild(buttonA);
		*/
		//labelを表示する
		var label00 = new Label();
		label00.x = 60; 
		label00.y = 60; 
		label00.text = "さあ，画面を触りたまえ！"; 
		core.rootScene.addChild(label00);
		//イベント
		core.rootScene.addEventListener('touchstart',function(e){
			core.pushScene(scene01);
		});

		//シーン作成
		var scene01 = new Scene();
		scene01.backgroundColor = "#ffffff";
		//scene01.backgroundColor = "#eeeeee";

		//labelを表示する
		var label01_01 = new Label();
		label01_01.x = 60;label01_01.y = 60; 
		label01_01.text = "君は福井高専の学生だ。"; 
		scene01.addChild(label01_01);
		var label01_02 = new Label();
		label01_02.x = 60;label01_02.y = 80; 
		label01_02.text = "夏休みが始まった。"; 
		scene01.addChild(label01_02);
		var label01_03 = new Label();
		label01_03.x = 60;label01_03.y = 100; 
		label01_03.text = "君は<br>どうする？"; 
		scene01.addChild(label01_03);

		var label01_a = new Label();
		label01_a.x = 60;label01_a.y = 200; 
		label01_a.text = "①福井で勉強する"; 
		scene01.addChild(label01_a);
		//イベント
		label01_a.addEventListener('touchstart',function(e){
			core.pushScene(scene02);
		});

		var label01_b = new Label();
		label01_b.x = 60;label01_b.y = 240; 
		label01_b.text = "②高崎で勉強する"; 
		scene01.addChild(label01_b);
		//イベント
		label01_b.addEventListener('touchstart',function(e){
			core.pushScene(scene02);
		});

		var label01_c = new Label();
		label01_c.x = 60;label01_c.y = 280; 
		label01_c.text = "③高崎で遊ぶ"; 
		scene01.addChild(label01_c);
		//イベント
		label01_c.addEventListener('touchstart',function(e){
			core.pushScene(scene03);
		});
	}
	core.start();
}
