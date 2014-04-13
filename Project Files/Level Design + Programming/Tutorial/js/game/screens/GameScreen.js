
GameScreen = function()
{
    GameScreen.superclass.constructor.apply(this,arguments);
    this.backgroundColor = "#039AFF";

	
	
	/*
	//Sprite
   this.rocketSprite = this.addChild(new TGE.Sprite().setup({
        image : "rocket",
        x : 250,
        y : 350,
    }));
    
   */
   
   
    /*
    //SpriteSheetAnimation
    this.catAnimation = this.addChild(new TGE.SpriteSheetAnimation().setup({
        image :"runningCat",
        columns : 2,
        rows : 3,
        totalFrames : 8,
        fps : 5,
        x : 480,
        y : 240,
    }));
    this.catAnimation.play();
	*/	
		

	
}



extend(GameScreen,TGE.Window);