TeachingTemplate = function()
{
    TeachingTemplate.superclass.constructor.call(this);




	//Images we want in the game
    this.assetManager.addAssets("required",[
    
        {id : 'rocket',   		url : 'rocket.png'},
        {id : 'runningCat',		url : 'runningCat.png'},
        {id : 'background',		url : 'background.jpg'},
        {id : 'middleground',	url : 'middleground.png'},
        {id : 'foreground',		url : 'foreground.png'},
        
      ]);




    TGE.FirstGameWindow = GameScreen;
};

extend(TeachingTemplate,TGE.Game);

