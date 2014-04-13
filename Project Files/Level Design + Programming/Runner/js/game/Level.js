var generator = ["1","2","2","A","B"];

//string of random obstacles
var string1 = "";
var i = 0;
while (i<50){
    string1 = string1.concat(generator[Math.floor(Math.random() * 5)]);
    i++;
};

//another string of random obstacles
var string2 = "";
var j = 0;
while (j<50){
    string2 = string2.concat(generator[Math.floor(Math.random() * 5)]);
    j++;
};

var string3 = "";
var k = 0;
while (k < 5){
    string3 = string3.concat(generator[Math.floor(Math.random() * 5)]);
    k++;
};


var level = [

    {player_speed:0.02},
    {fall_speed:0.005},
    {boost_speed:0.04},

    // //ObstaclesONE
    // {begin_segment:"Some Obstacles"},

    // {time:0, event:"obstacle_frequency", value:500},

    // {time:0, event:"obstacle_pattern", value:string1}, //2A121B21

    // {time:1, event:"obstacle_pattern", value:string1}, //2A121B21

    // {time:2, event:"obstacle_pattern", value:string1}, //2A121B21

    // {time:3, event:"end_segment"},


    //Coins
    {begin_segment:"Coin Line"},

    {time:0, event:"coin_y", value:0.75},

    {time:1, event:"coin_box", size:1},

    {time:1, event:"obstacle_frequency", value:500},
    {time:1, event:"obstacle_pattern", value:string3},

    {time:2, event:"coin_box", size:1},

    {time:2, event:"obstacle_frequency", value:500},
    {time:2, event:"obstacle_pattern", value:string3},

    {time:3, event:"coin_box", size:1},

    {time:1, event:"end_segment"},


    // //ObstaclesTWO
    // {begin_segment:"Some Obstacles"},

    // {time:0, event:"obstacle_frequency", value:700},

    // {time:0, event:"obstacle_pattern", value:string2}, //2A121B21

    // {time:1, event:"obstacle_pattern", value:string2}, //2A121B21

    // {time:2, event:"obstacle_pattern", value:string2}, //2A121B21

    // {time:3, event:"end_segment"},


    
        // // //Obstacle
        // // {begin_segment:"An Obstacle"},

        // // {time:0,     event:"obstacle_frequency",     value:1},

        // // {time:0,     event:"obstacle_pattern",     value:"1"},

        // // {time:1,     event:"end_segment"},


        // //Coin Boxes
        // {begin_segment:"Coin Boxes"},

        // {time:0,     event:"coin_y",             value:0.5},

        // {time:0,     event:"coin_frequency",     value:0},

        // {time:0,     event:"coin_box",           size:1},

        // //{time:2,     event:"coin_box",          size:4},

        // {time: 5,    event:"end_segment"},


        // // //Obstacle
        // // {begin_segment:"Some More Obstacles"},

        // // {time:0,     event:"obstacle_frequency",     value:700},

        // // {time:0,     event:"obstacle_pattern",     value:"12"},

        // // {time:3,     event:"end_segment"},


        // // //Coin Sinewave
        // // {begin_segment:"A Coin Sinewave"},

        // // {time:0,     event:"coin_frequency",     value:0},

        // // {time:0,     event:"coin_frequency",     value:200},

        // // {time:0,     event:"coin_height",     value:0.5},

        // // {time:0,     event:"coin_sinewave",     frequency:4, amplitude:100},

        // // {time:4,    event:"end_segment"},


        // // //Obstacles
        // // {begin_segment:"Even More Obstacles"},

        // // {time:0,     event:"obstacle_frequency",     value:600},

        // // {time:0,     event:"obstacle_pattern",     value:"12A121B21"},

        // // {time:20,    event:"end_segment"},

    
    // The End
    {begin_segment:"END"},
    {time:5,     event:"game_finished"}
];