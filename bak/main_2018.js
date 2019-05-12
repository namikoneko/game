enchant();

var SCREEN_WIDTH = 320;
var SCREEN_HEIGHT = 320;
var CHARA_IMAGE = "http://enchantjs.com/assets/images/chara1.gif";


window.onload = function(){
    var game = new Game(SCREEN_WIDTH,SCREEN_HEIGHT);
    
    game.preload(CHARA_IMAGE);
    
    game.keybind('Z'.charCodeAt(0),'a');
    
    game.onload = function(){
        var scene = game.rootScene;
        scene.backgroundColor = "black";
        
        /*
        // ラベル
        var label = new Label("hello world");
        scene.addChild(label);
        */
        
        // 画像
        var sprite = new Sprite(32,32);
        sprite.image = game.assets[CHARA_IMAGE];
        sprite.moveTo(50,200);
        //sprite.scaleX = -1;
        sprite.vy = 0;
        
        

             //敵
            var enemy = new Sprite(32,32);
            enemy.image = game.assets[CHARA_IMAGE];
            enemy.frame = 6;
            enemy.scaleX = -1;
            enemy.x = 200;
            enemy.y = 200;
        
            var enemys = [];
        
        for(var i=0; i < 100; i++){
            //enemy.moveTo(200,200);
            enemys[i] = enemy;
        }
        
        //var j = 0;

        
        // エンターフレイム
        sprite.onenterframe = function(){
            var input = game.input;
            if(input.left === true){this.x -= 2;}
            if(input.right === true){this.x += 2;}
            
            if(input.a === true && this.y == 200){
                this.vy = -5;
            }
            
            this.y += this.vy;
            this.vy += 0.25;
            　　
            // 地面についたかを判定
            if(this.y > 200){
                this.y = 200;
                this.vy = 0;
            }

            
            
        };
        
	var j = 0;
        // エンターフレイム
	scene.onenterframe = function(){
            //敵
            if(Math.ceil(Math.random()*16*3) == 1){
            	//i += 1;
            	//enemy.x = 200;
            	//enemy.y = 200;
		j++;
            	scene.addChild(enemys[j]);
            }
	}

        scene.addChild(sprite);
        
        enemy.onenterframe = function(){
            this.x -= 2;
        }
        
        /*
        // 更新イベント1
        sprite.onenterframe = function(){
            this.moveBy(1,1);
        };
        */
        
        /*
        // 更新イベント2
        sprite.addEventListener("enterframe",function(){
            this.moveBy(1,1);
        });
        sprite.addEventListener("enterframe",function(){
            this.rotate(10);
        });
        */
        
        
    };
    game.start();
};
