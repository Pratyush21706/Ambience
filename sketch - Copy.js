var tile1,tile2,tile3,touch,world,music;
var first, second, third, fourth;
var ground,a=3;
var group1,group2,group3,group4;
var tileA,tileB,tileC,tileD,vel=11;
var fc1 = 20,fc2 = 25, fc3 = 30,fc4 = 22; 
var hand,score=0;;
function preload(){
    bg1 = loadImage("1.jpg")
        bg2 = loadImage("2.jpg")
    bg3= loadImage("3.jpg")
    cook = loadImage("cook.png")
        heat = loadImage("heat.png")

//    mySound = loadSound('bajana.mp3');
}
function setup(){
    createCanvas(window.innerWidth,window.innerHeight)
    world = createSprite(width/2,height/2,width,height)
    world.depth = 55555555555555555555555555555555;
    world.visible = false;
//    music.play();

    ground = createSprite(width,height,width*88,10)
    group1 = createGroup();
        group2 = createGroup();
    group3 = createGroup();
    group4 = createGroup();
    group5 = createGroup();


    button1 = createButton(` Start `)
    button1.position(width/3,-555);
    button1.mousePressed(handle);
    button1.style(`{background-image:`,`linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,1))`)
    button1.style(`font-size`,`30px`)
    button1.style(`border`,`0px`)
    button1.style(`color`,`white`)
    button1.style(`border-radius`, '12px')
    button1.style(`padding`,`5px`)
 hand = createSprite(200,200,20,20);
    hand.shapeColor = "white";
}
function handle() {
//    mySound.play();
    a=2;
        button1.position(width/3,-555);

}
stopo = function(){
    mySound.stop();
}
change = function(){
    a=1;
}
function draw(){
    //setting The bg
    hand.visible = false;

hand.x = mouseX;
    hand.y = mouseY;
    if(group1.isTouching(ground)){
        a=13;
        group1.setVelocityEach(0,0)
                group2.setVelocityEach(0,0)

                group3.setVelocityEach(0,0)
        group4.setVelocityEach(0,0)
group1.setLifetimeEach(-1);
        group2.setLifetimeEach(-1);
group3.setLifetimeEach(-1);
group4.setLifetimeEach(-1);
group1.bounceOff(ground);

    }
     if(group2.isTouching(ground)){
        a=13;
        group1.setVelocityEach(0,0)
                group2.setVelocityEach(0,0)

                group3.setVelocityEach(0,0)
        group4.setVelocityEach(0,0)
group1.setLifetimeEach(-1);
        group2.setLifetimeEach(-1);
group3.setLifetimeEach(-1);
group4.setLifetimeEach(-1);
group2.bounceOff(ground);
    }
     if(group3.isTouching(ground)){
        a=13;
        group1.setVelocityEach(0,0)
                group2.setVelocityEach(0,0)

                group3.setVelocityEach(0,0)
        group4.setVelocityEach(0,0)
group1.setLifetimeEach(-1);
        group2.setLifetimeEach(-1);
group3.setLifetimeEach(-1);
group4.setLifetimeEach(-1);
group3.bounceOff(ground);

    }
     if(group4.isTouching(ground)){
        a=13;
        group1.setVelocityEach(0,0)
                group2.setVelocityEach(0,0)

                group3.setVelocityEach(0,0)
        group4.setVelocityEach(0,0)
group1.setLifetimeEach(-1);
        group2.setLifetimeEach(-1);
group3.setLifetimeEach(-1);
group4.setLifetimeEach(-1);
group4.bounceOff(ground);

    }
    if(a===2){
    if(hand.isTouching(group1)){
        console.log("Methord1")
        group1.destroyEach();
        hand.visible = true;
score = score+1;

    }
      if(hand.isTouching(group2)){
        console.log("Methord1")
        group2.destroyEach();
                  hand.visible = true;
score = score+1;

    }
      if(hand.isTouching(group3)){
        console.log("Methord1")
        group3.destroyEach();
                  hand.visible = true;
score = score+1;

    }
      if(hand.isTouching(group4)){
        console.log("Methord1")
        group4.destroyEach();
                  hand.visible = true;
score = score+1;
    }
    if(hand.isTouching(group5)){
        console.log("Methord1")
        group5.destroyEach();
                  hand.visible = true;
score = score+1;
    }
    }
    background(bg1)
    
if(frameCount>25&&frameCount<55){
     
    }
   
    console.log(a)

//    calling The functions
    if(a===2){
        if(frameCount>1000){
        background(bg3)
    }
    
     if(frameCount>500&&frameCount<1000){
        background(bg2)
    }
         if(frameCount%100===0){
        vel = vel+0.5
//             fc1= fc1-2;
//                          fc2 = fc2-2;
//             fc3 = fc3-1;
//
//                          fc4 = fc4-1;

        console.log(vel)
    }
tile1();
    tile2();
        tile4();
        tile3();
        tile5();
    }

  drawSprites();
    fill("white")
    if(frameCount>55){
    noStroke();
    rect(width/1.96,-18,2,height*88)
        rect(width/4,-18,2,height*88)
    rect(width/1.3,-18,2,height*88)
    rect(width/1.96,-18,2,height*88)
        rect(-19,height/1.2,width*88,2)
        noFill();
        stroke("white")
        ellipse(width/9,height/1.2,20,20)
                ellipse(width/2.7,height/1.2,20,20)
        ellipse(width/1.6,height/1.2,20,20)
        ellipse(width/1.1,height/1.2,20,20)

    }

     if(frameCount<55){
         
         fill("white")
         textSize(40)
         textStyle("bold")
         noStroke();
         rectMode(CENTER)
         rect(width/2.1,height/2,width/1.2,height/2)
         fill("black")
         text(Math.floor(frameCount-4)*2+"%",width/2.5,height/1.5)
         rectMode(CORNER) 
         noStroke();
         fill("gold")
                  rect(width/5,height/1.45,Math.floor(frameCount-4)*5,5)
         stroke("black");
         noFill();
         rectMode(CORNER)
         rect(width/5,height/1.45,250,5)
//         console.log(Math.floor(frameCount-4)*5)
    }
    if(frameCount>25&&frameCount<55){
                 fill("black")
        noStroke();
            text("Baking The Tiles", width/6,height/1.8)
//        var going = createSprite(width/2,height/3)
//      going.addImage(cook);
//        going.scale =0.2
        image(cook,width/2.6,height/4,width/4,height/4.1)
    }
     if(frameCount<25){
                 fill("black")
                 noStroke();
        image(heat,width/4,height/5.2,width/2,height/2.5)

         textSize(35)
            text("Preheating the Oven", width/6,height/1.8)
    }
    if(frameCount===55){
        change();
    }
    if(a===2||a===13){
       textSize(40)
         textStyle("bold")
         fill("red");
        stroke("yellow");
        text(score,width/2,height/9)
        rect(0,height/8,score,10)
                 noFill();
        rect(0,height/8,width,10)
    }
    if(a===13){
        stopo();
    }
        if(a===1){
              fill("white")
  noStroke();
  rectMode(CENTER)
         rect(width/2.1,height/2,width/1.2,height/3)
               button1.position(width/2.7,height/1.75);
               fill("black")
                image(heat,width/4.2,height/3.5,width/2,height/3.6)
               textSize(30)
         textStyle("bold")
 text("All Set👍  Let's Go!", width/6,height/1.85)
 }
}

tile1 = function(){
    if(frameCount%fc1===0){
 tileA = createSprite(width/8,-100,width/5,height/random(2.5,4));
        tileA.shapeColor = "black";
    tileA.velocityY  =vel;
                tileA.lifetime = 100;
group1.add(tileA)
    }
//    console.log(group1);
}

tile5 = function(){
    if(frameCount%fc1+10===0){
 tileE = createSprite(width/8,-100,width/5,height/random(2.5,4));
        tileE.shapeColor = "black";
    tileE.velocityY  =vel;
                tileE.lifetime = 100;
group5.add(tileE)
    }
//    console.log(group1);
}

tile2 = function(){
    if(frameCount%fc2===0){
    tileB = createSprite(width/2.6,-100,width/5,height/random(2.5,4));
        tileB.shapeColor = "black";
    tileB.velocityY  =vel
                tileB.lifetime = 100;
group2.add(tileB)

    }
}

tile3 = function(){
    if(frameCount%fc3===0){
    tileC = createSprite(width/1.1,-100,width/5,height/random(2.5,4));
        tileC.shapeColor = "black";
    tileC.velocityY  =vel;
                tileC.lifetime = 100;
group3.add(tileC)

    }
}

tile4 = function(){
    if(frameCount%fc4===0){
     tileD = createSprite(width/1.55,-100,width/5,height/random(2.5,4));
        tileD.shapeColor = "black";
    tileD.velocityY  =vel;
        tileD.lifetime = 100;
        group4.add(tileD)

    }
}
 function mousePressed(){
     tileA.destroy();
     console.log("jdfjdgjfgkdsfdh")
}