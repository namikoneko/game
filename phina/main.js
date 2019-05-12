phina.globalize();

phina.define('MainScene',{
	superClass: 'CanvasScene',
	init: function(){
		this.superInit();
		this.backgroundColor = '#444';

		this.label = Label('hello,phina.js').addChildTo(this);
		this.label.x = this.gridX.center();
		this.label.y = this.gridY.center();
		this.label.fill = 'white';
		//this.label.fill = 'black';
		var shape = StarShape().addChildTo(this);
		//shape.setPosition(320,480);
		shape.x = 300;
		shape.y = 450;
	},
});

phina.main(function(){
	var app = GameApp({
		startLabel: 'main',
	});
	app.run();
});
