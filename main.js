 canvas=new fabric.Canvas('myCanvas');

 block_image_width=30;
 block_image_height=30;

 playerx=10;
 playery=10;

 player_object="";

function player_update(){
    fabric.Image.fromURL("player.png",function(img){
        player_object=img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:playery,
            left:playerx
        });     
        canvas.add(player_object);
    })

   
}
 
function new_image(get_image){
    fabric.Image.fromURL(get_image,function(img){
        block_image_object=img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
       block_image_object.set({
            top:playery,
            left:playerx
        });     
        canvas.add(block_image_object);
    })
}

window.addEventListener("keydown" , my_keydown);

function my_keydown(e){
keypress=e.keyCode;
console.log(keypress);
if(e.shiftKey==true && keypress=='80'){
    block_image_width=block_image_width+10;
block_image_height=block_image_height+10;
    document.getElementById("Current-width").innerHTML=block_image_width;
    document.getElementById("Current-height").innerHTML=block_image_height;
}
if(e.shiftKey==true && keypress=='77'){
    block_image_width=block_image_width-10;
    block_image_height=block_image_height-10;
    document.getElementById("Current-height").innerHTML=block_image_height;
    document.getElementById("Current-width").innerHTML=block_image_width;
}
if(keypress=='87'){
    new_image('wall.jpg');
    console.log("W");
}
if(keypress=='71'){
    new_image('ground.png');
    console.log("g");
}
if(keypress=='76'){
    new_image('light_green.png');
    console.log("l");
}
if(keypress=='84'){
    new_image('trunk.jpg');
    console.log("t");
}
if(keypress=='82'){
    new_image('roof.jpg');
    console.log("r");
}
if(keypress=='89'){
    new_image('yellow_wall.png');
    console.log("y");
}
if(keypress=='68'){
    new_image('dark_green.jpg');
    console.log("d");
}
if(keypress=='85'){
    new_image('different.png');
    console.log("u");
}
if(keypress=='38'){
    up();
    console.log("up");
}
if(keypress=='67'){
    new_image('cloud.jpg');
    console.log("c");
}
if(keypress=='40'){
    down();
    console.log("down");
}
if(keypress=='37'){
   left();
    console.log("left");
}
if(keypress=='39'){
    right();
    console.log("right");
}
}

function up(){
    if(playery >=0)
    {
        playery=playery-block_image_height;
        console.log("block image height = " + block_image_height);
        console.log("When up arrow is pressed, x= " + playerx + " , y = "+playery);
        canvas.remove(player_object);
    }   player_update();
}

function down(){
    if(playery <=500)
    {
        playery=playery+block_image_height;
        console.log("block image height = " + block_image_height);
        console.log("When down arrow is pressed, x= " + playerx + " , y = "+playery);
        canvas.remove(player_object);
    }   player_update();
}

function left(){
    if(playerx >=0)
    {
        playerx=playerx-block_image_width;
        console.log("block image width = " + block_image_width);
        console.log("When left arrow is pressed, x= " + playerx + " , y = "+playery);
        canvas.remove(player_object);
    }   player_update();
}

function right(){
    if(playerx <=850)
    {
        playerx=playerx+block_image_width;
        console.log("block image width = " + block_image_width);
        console.log("When right arrow is pressed, x= " + playerx + " , y = "+playery);
        canvas.remove(player_object);
    }   player_update();
}
