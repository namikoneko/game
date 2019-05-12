enchant();

window.onload = function(){
	core = new Core(320,320);
	core.fps = 16;
	//core.preload('betty.png','one_0.mp3','Ready.wav','pad.png','./images/apad.png','./images/icon0.png','./images/font0.png');
	core.preload('one_0.mp3','Ready.wav');
	//core.preload('betty.png');
	//core.enchant.DOMSound.load('betty.png','one_0.mp3');
	//core.preload('betty.png','Ready.wav');
	//core.bgm = Sound.load('one_0.mp3');
	//core.se = Sound.load('Ready.wav');

	core.onload = function(){
		//音楽
		core.assets['one_0.mp3'].play();
		core.assets['one_0.mp3'].volume = 0.1;
		/*
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
		label00.x = 60; label00.y = 60; 
		label00.text = "さあ，画面を触りたまえ！"; 
		core.rootScene.addChild(label00);
		//イベント
		core.rootScene.addEventListener('touchstart',function(e){
			core.pushScene(scene01);
		});
//シーン01**************************************************
		//シーン作成
		var scene01 = new Scene();
		scene01.backgroundColor = "#ffffff";

		//labelを表示する
		var label01 = new Label();
		label01.x = 40;label01.y = 60; 
		label01.text = "君は福井高専の学生だ。<br>夏休みが始まった。<br>君はどうする？"; 
		scene01.addChild(label01);

		//buttonAを表示する
		var button01A = new Button();
		button01A.x = 40; button01A.y = 180;
		button01A.width = 200; button01A.height = 20;
		button01A.text = "福井で勉強する。";
		scene01.addChild(button01A);
		//イベント
		button01A.addEventListener('touchstart',function(e){
			core.pushScene(scene02);
		});

		//buttonBを表示する
		var button01B = new Button();
		button01B.x = 40; button01B.y = 220;
		button01B.width = 200; button01B.height = 20;
		button01B.text = "高崎で勉強する。";
		scene01.addChild(button01B);
		//イベント
		button01B.addEventListener('touchstart',function(e){
			core.pushScene(scene03);
		});

//シーン02**************************************************
		//シーン作成
		var scene02 = new Scene(); scene02.backgroundColor = "#ffffff";

		//labelを表示する
		var label02 = new Label(); label02.x = 40;label02.y = 60; 
		label02.text = "しかし，君はマイケルをもふりたくなり<br>高崎に行くことにした"; 
		scene02.addChild(label02);

		//buttonAを表示する
		var button02A = new Button(); button02A.x = 40; button02A.y = 180; button02A.width = 200; button02A.height = 20;
		button02A.text = "高崎に行く";
		scene02.addChild(button02A);
		//イベント
		button02A.addEventListener('touchstart',function(e){
			core.pushScene(scene03);
		});

		//buttonBを表示する
		var button02B = new Button(); button02B.x = 40; button02B.y = 220; button02B.width = 200; button02B.height = 20;
		button02B.text = "高崎で勉強する。";
		//scene02.addChild(button02B);
		//イベント
		button02B.addEventListener('touchstart',function(e){
			core.pushScene(scene03);
		});

//シーン03**************************************************
		//シーン作成
		var scene03 = new Scene(); scene03.backgroundColor = "#ffffff";

		//labelを表示する
		var label03 = new Label(); label03.x = 40;label03.y = 60; 
		label03.text = "高崎へ来た。<br>ばあちゃんが勉強しろ<br>と言っている"; 
		scene03.addChild(label03);

		//buttonAを表示する
		var button03A = new Button(); button03A.x = 40; button03A.y = 180; button03A.width = 200; button03A.height = 20;
		button03A.text = "勉強する";
		scene03.addChild(button03A);
		//イベント
		button03A.addEventListener('touchstart',function(e){
			core.pushScene(scene04);
		});

		//buttonBを表示する
		var button03B = new Button(); button03B.x = 40; button03B.y = 220; button03B.width = 200; button03B.height = 20;
		button03B.text = "遊ぶ";
		scene03.addChild(button03B);
		//イベント
		button03B.addEventListener('touchstart',function(e){
			core.pushScene(scene05);
		});
//シーン04**************************************************
		//シーン作成
		var scene04 = new Scene(); scene04.backgroundColor = "#ffffff";

		//labelを表示する
		var label04 = new Label(); label04.x = 40;label04.y = 60; 
		label04.text = "しかし高崎は天国だった"; 
		scene04.addChild(label04);

		//buttonAを表示する
		var button04A = new Button(); button04A.x = 40; button04A.y = 180; button04A.width = 200; button04A.height = 20;
		button04A.text = "遊ぶ";
		scene04.addChild(button04A);
		//イベント
		button04A.addEventListener('touchstart',function(e){
			core.pushScene(scene05);
		});

		//buttonBを表示する
		var button04B = new Button(); button04B.x = 40; button04B.y = 220; button04B.width = 200; button04B.height = 20;
		button04B.text = "遊ぶ";
		//scene04.addChild(button04B);
		//イベント
		button04B.addEventListener('touchstart',function(e){
			core.pushScene(scene07);
		});
//シーン05**************************************************
		//シーン作成
		var scene05 = new Scene(); scene05.backgroundColor = "#ffffff";

		//labelを表示する
		var label05 = new Label(); label05.x = 40;label05.y = 60; 
		label05.text = "おじちゃんが「数学の宿題をしよう」<br>と言っている"; 
		scene05.addChild(label05);

		//buttonAを表示する
		var button05A = new Button(); button05A.x = 40; button05A.y = 180; button05A.width = 200; button05A.height = 20;
		button05A.text = "数学の宿題をする";
		scene05.addChild(button05A);
		//イベント
		button05A.addEventListener('touchstart',function(e){
			core.pushScene(scene06);
		});

		//buttonBを表示する
		var button05B = new Button(); button05B.x = 40; button05B.y = 220; button05B.width = 200; button05B.height = 20;
		button05B.text = "遊ぶ";
		scene05.addChild(button05B);
		//イベント
		button05B.addEventListener('touchstart',function(e){
			core.pushScene(scene07);
		});
//シーン06**************************************************
		//シーン作成
		var scene06 = new Scene(); scene06.backgroundColor = "#ffffff";

		//labelを表示する
		var label06 = new Label(); label06.x = 40;label06.y = 60; 
		label06.text = "しかし，おじちゃんは週末しか<br>いなかった"; 
		scene06.addChild(label06);

		//buttonAを表示する
		var button06A = new Button(); button06A.x = 40; button06A.y = 180; button06A.width = 200; button06A.height = 20;
		button06A.text = "遊ぶ";
		scene06.addChild(button06A);
		//イベント
		button06A.addEventListener('touchstart',function(e){
			core.pushScene(scene07);
		});

		//buttonBを表示する
		var button06B = new Button(); button06B.x = 40; button06B.y = 220; button06B.width = 200; button06B.height = 20;
		button06B.text = "遊ぶ";
		//scene06.addChild(button06B);
		//イベント
		button06B.addEventListener('touchstart',function(e){
			core.pushScene(scene07);
		});
//シーン07**************************************************
		//シーン作成
		var scene07 = new Scene(); scene07.backgroundColor = "#ffffff";

		//labelを表示する
		var label07 = new Label(); label07.x = 40;label07.y = 60; 
		label07.text = "君は思い切り遊び夏休みを満喫した。<br>しかし宿題はどうする？"; 
		scene07.addChild(label07);

		//buttonAを表示する
		var button07A = new Button(); button07A.x = 40; button07A.y = 180; button07A.width = 200; button07A.height = 20;
		button07A.text = "宿題をする";
		scene07.addChild(button07A);
		//イベント
		button07A.addEventListener('touchstart',function(e){
			core.pushScene(scene08);
		});

		//buttonBを表示する
		var button07B = new Button(); button07B.x = 40; button07B.y = 220; button07B.width = 200; button07B.height = 20;
		button07B.text = "宿題は提出しない";
		scene07.addChild(button07B);
		//イベント
		button07B.addEventListener('touchstart',function(e){
			core.pushScene(scene09);
		});
//シーン08**************************************************
		//シーン作成
		var scene08 = new Scene(); scene08.backgroundColor = "#ffffff";

		//labelを表示する
		var label08 = new Label(); label08.x = 40;label08.y = 60; 
		label08.text = "君は頑張って宿題をして<br>提出した"; 
		scene08.addChild(label08);

		//labelを表示する
		var label08_2 = new Label(); label08_2.x = 40;label08_2.y = 110; 
		label08_2.text = "君は2年に進学できた。<br>HAPPY END!"; 
		label08_2.color = "#ff0000"; 
		scene08.addChild(label08_2);

		//labelを表示する
		var label08_03 = new Label(); label08_03.x = 40;label08_03.y = 160; 
		label08_03.text = "（再読込でリスタート）"; 
		scene08.addChild(label08_03);
		/*
		//buttonAを表示する
		var button08A = new Button(); button08A.x = 40; button08A.y = 180; button08A.width = 200; button08A.height = 20;
		button08A.text = "宿題をする";
		scene08.addChild(button08A);
		//イベント
		button08A.addEventListener('touchstart',function(e){
			core.pushScene(scene08);
		});

		//buttonBを表示する
		var button08B = new Button(); button08B.x = 40; button08B.y = 220; button08B.width = 200; button08B.height = 20;
		button08B.text = "宿題は提出しない";
		scene08.addChild(button08B);
		//イベント
		button08B.addEventListener('touchstart',function(e){
			core.pushScene(scene09);
		});
		*/
//シーン09**************************************************
		//シーン作成
		var scene09 = new Scene(); scene09.backgroundColor = "#ffffff";

		//labelを表示する
		var label09 = new Label(); label09.x = 40;label09.y = 60; 
		label09.text = "君は宿題を提出せず<br>留年した"; 
		scene09.addChild(label09);

		//labelを表示する
		var label09_2 = new Label(); label09_2.x = 40;label09_2.y = 110; 
		label09_2.text = "BAD END!"; 
		label09_2.color = "#0000ff"; 
		scene09.addChild(label09_2);

		//labelを表示する
		var label09_03 = new Label(); label09_03.x = 40;label09_03.y = 160; 
		label09_03.text = "（再読込でリスタート）"; 
		scene09.addChild(label09_03);
		/*
		//buttonAを表示する
		var button09A = new Button(); button09A.x = 40; button09A.y = 180; button09A.width = 200; button09A.height = 20;
		button09A.text = "宿題をする";
		scene09.addChild(button09A);
		//イベント
		button09A.addEventListener('touchstart',function(e){
			core.pushScene(scene08);
		});

		//buttonBを表示する
		var button09B = new Button(); button09B.x = 40; button09B.y = 220; button09B.width = 200; button09B.height = 20;
		button09B.text = "宿題は提出しない";
		scene09.addChild(button09B);
		//イベント
		button09B.addEventListener('touchstart',function(e){
			core.pushScene(scene09);
		});
		*/


	}
	core.start();
}
