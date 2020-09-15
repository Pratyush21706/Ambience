localStorage.speed = 1 ;
var food,water,sleep,run,qot,nm;
localStorage.name;
localStorage.age;
var talkbox;
var rand;
var a = 2,b=1,s = 1;
            var count =1,karna = 1,h =900;
;
var option1 = false;
var col1="black",col2 = "col1";

var nameInput;
function preload(){
  smile =loadImage("intro.png")
    logo = loadImage("logo.jpg")
    user = loadImage("user.jpg")
        age = loadImage("age.jpg")
            bot = loadImage("bot.png")
dk = loadImage("desktop.png")
    light = loadImage("light.png")
    dark = loadImage("dark.png")
    food = loadImage("food.png")
    water = loadImage("water.png")
    sleep = loadImage("sleep.png")
    run = loadImage("run.png")
    qot = loadImage("qot.png")
    
}
function setup(){
          createCanvas(windowWidth/1.01, windowHeight);
    nm = window.innerHeight/17
col = color(255,255,255,0)
    nextButton = createButton(`→`)
    nextButton.position(width/2.1,-555)
    nextButton.style(`background`,`transparent`);
    nextButton.style(`font-size`,`50px`)
    nextButton.style(`border`,`0px`)
    nextButton.mousePressed(next)
    
   input1 = createInput(``).attribute(`placeholder`,`Username`)
    input1.position(width/4,-555);
    input1.style(`font-size`,`20px`)
        input1.style(`border`,`200px`)
//    input1.style(`bottom border`,`20px solid col1`)
//        input1.style(`padding`,`5px`)
                input1.style(`outline`,`0px`)

    
    input2 = createInput(``).attribute(`placeholder`,`Age`)
    input2.position(width/4,-555);
    input2.style(`font-size`,`20px`)
        input2.style(`border`,`200px`)
//    input1.style(`bottom border`,`20px solid col1`)
//        input2.style(`padding`,`15px`)
            input2.style(`outline`,`0px`)

    
radio = createRadio();
    radio.option(`Male`,`Male`)
        radio.option(`Female`)
    radio.style('width', '800px');
    radio.position(200,-555)

    registerButton = createButton(`Register`)
    registerButton.position(width/2.1,-555)
    registerButton.style(`background-color`,`#27cf3b`);
    registerButton.style(`font-size`,`35px`)
    registerButton.style(`border`,`0px`)
        registerButton.style(`color`,`white`)
        registerButton.style(`padding-left`,`100px`)
            registerButton.style(`padding-right`,`100px`)
                registerButton.style(`padding-top`,`15px`)
                    registerButton.style(`padding-bottom`,`15px`)
                        registerButton.style(`border-radius`,`10px`)
                         registerButton.style(`box-shadow`,`0px 15px 20px rgba(46, 229, 157, 0.9)`)
    registerButton.mousePressed(registerd)
    
//let am = window.innerWidth+"px";
//    console.log(am)
   Health = createButton(`.`)
Health.style(`background-color`,col);
Health.position(15,-555)
Health.style(`border`,`2px`)
   Health.style(`border-radius`,`15px`)
  Health.style(`padding-left`,`15px`)
           Health.style(`padding-right`,`160px`)
               Health.style(`padding-top`,`50px`)
                   Health.style(`padding-bottom`,`10px`)
    
     Goals = createButton(`.`)
Goals.style(`background-color`,col);
Goals.position(width/1.95,-555)
Goals.style(`border`,`2px`)
   Goals.style(`border-radius`,`15px`)
  Goals.style(`padding-left`,`20px`)
           Goals.style(`padding-right`,`160px`)
               Goals.style(`padding-top`,`50px`)
                   Goals.style(`padding-bottom`,`10px`)
    
Bot= createButton(`.`)
Bot.style(`background-color`,col);
    Bot.mousePressed(bring)
Bot.position(15,-555)
Bot.style(`border`,`2px`)
Bot.style(`border-radius`,`15px`)
Bot.style(`padding-left`,`20px`)
Bot.style(`padding-right`,`160px`)
Bot.style(`padding-top`,`50px`)
Bot.style(`padding-bottom`,`10px`)
    
    Reports= createButton(`.`)
Reports.style(`background-color`,col);
Reports.position(width/1.95,-555)
Reports.style(`border`,`2px`)
Reports.style(`border-radius`,`15px`)
Reports.style(`padding-left`,`20px`)
Reports.style(`padding-right`,`160px`)
Reports.style(`padding-top`,`50px`)
Reports.style(`padding-bottom`,`10px`)
    
     talkbox = createInput(``).attribute(`placeholder`,`    Introduction to Ambibot`)
    talkbox.position(width/1.95,-555)

    talkbox.style(`font-size`,`28px`)
  talkbox.style(`padding-right`,`115px`)
talkbox.style("border","40px")
    talkbox.style(`border-radius`,`100px`)
            talkbox.style(`outline`,`0px`)
    talkbox.style(`background-color`,`#E5E5E5`);
    
    send = createButton(``)
    send.position(width/1.133,-555)
    send.mousePressed(tell)
           
    send.style(`background`,`url("send.png")`);
    send.style(`background-size`,`100%`)
//    send.style(`font-size`,`3-px`)
    send.style(`border`,`10000px`)
//        send.style(`border-radius`,`1500px`)
//    send.style(`padding-right`,`60px`)
//        send.style(`padding-bottom`,`350px`)
//        send.style(`padding-top`,`8px`)
    send.style(`padding`,`14px`)
                send.style(`outline`,`0px`)
    
     buttonA = createButton(`Book A Doctor`)
    buttonA.position(width/1.133,-555)
    buttonA.mousePressed(tell)
           
    buttonA.style(`background-color`,`#3744DE`);
    buttonA.style(`background-size`,`100%`)
//    send.style(`font-size`,`3-px`)
    buttonA.style(`border`,`10000px`)
buttonA.style(`padding`,`14px`)
                buttonA.style(`outline`,`0px`)
      buttonA.style(`font-size`,`20px`)
    buttonA.style(`color`,`white`)
buttonA.style(`border-radius`, `15px`)
    
     
     buttonB = createButton(`Medical Tests`)
    buttonB.position(width/1.133,-555)
    buttonB.style(`font-size`,`20px`)
    buttonB.style(`color`,`white`)
    buttonB.mousePressed(tell)
     buttonB.style(`background-color`,`#3744DE`);
    buttonB.style(`background-size`,`100%`)
    buttonB.style(`border-radius`, `15px`)
//    send.style(`font-size`,`3-px`)
    buttonB.style(`border`,`10000px`)
buttonB.style(`padding`,`14px`)
                buttonB.style(`outline`,`0px`)


  see = createButton(``)
    see.position(width/1.133,-5555)
    see.style(`font-size`,`20px`)
    see.style(`color`,`white`)
see.style(`background-color`,`rgba(255, 255, 255, 0.7)`);
    see.style(`border`,`0px`)
    see.style(`background-size`,`100%`)
    see.style(`border-radius`, `15px`)
    see.style(`padding-bottom`,`530px`)
        see.style(`padding-right`,`480px`)
    
      backButton = createButton(`←`)
    backButton.position(width/2.1,-555)
    backButton.style(`background`,`transparent`);
    backButton.style(`font-size`,`30px`)
    backButton.style(`border`,`0px`)
    backButton.mousePressed(back)

//see.style(`padding`,`240px`)
                see.style(`outline`,`0px`)
    nextButton.mousePressed(next)
//    loadJSON("https://favqs.com/api/qotd",loaded)
  
}
//function loaded(data){
//    quotes = data;
//    console.log(quotes)
//}
function bring(){
    localStorage.speed = 35;
}
function registerd(){
  localStorage.name = input1.value();
    localStorage.age = input2.value();
    console.log("Name: "+localStorage.name)
        console.log("Age: "+localStorage.age)
    localStorage.speed = 34;
 input1.position(width/4,-555);
 input2.position(width/4,-555);
 registerButton.position(width/2.1,-555)
//     alert(`You Have Registerd Successfully`)                     
}
function next(){
    a = 2;
}
function draw(){
    background("white");
//    if(deviceOrientation = `landscape`){
//        alert('please rotate your phone')
//    }
    drawSprites();
  
//    if(quotes){
//        b = 2;
//    }
//    if(b===2){
//        better = quotes.body;
//        console.log(better)
//    }
 if(localStorage.speed==1){
     if(a===1){
         
    fill("col1")
          image(smile,width/11,height/8,width/1.1,height/3)
    textSize(60)
     textStyle("bold")
   text("Welcome!",width/5,height/1.8)
          textStyle("normal")

     textSize(21);
    text("We are happy to have you & welcome",width/12,height/1.6)
         text(`you to experience the "Ambience Way"`,width/12,height/1.5)
        text(`towards Holistic Health, far avobe`,width/8,height/1.41)
             text(`weight loss/control`,width/3.5,height/1.34)
     fill("green")
     noStroke();
     rectMode(CENTER)
rect(width/1.9,height/1.28,width/9,3)
    nextButton.position(width/2.1,height/1.2)
     }
     if(a===2){
             nextButton.position(width/2.1,-555)
             input1.position(width/4.5,height/2);
         
    input2.position(width/4.5,height/1.65);
fill("gray")
           noStroke();
     rectMode(CORNER)
rect(width/8,height/1.82,width/1.3,1)
         rect(width/8,height/1.51,width/1.3,1)
          image(logo,width/5,8,width/1.6,height/2)
          image(user,width/7,height/2.1,width/16,height/16,20)
                   image(age,width/7,height/1.7,width/16,height/16)
             registerButton.position(width/8,height/1.3)

     }
}
    if(localStorage.speed==34){
    if(deviceOrientation ==="landscape"){
        alert("rotate your device")
    }

        if(window.innerWidth>550){
                     resizeCanvas(window.innerWidth,window.innerHeight)
            background(dk)
            textSize(width/30);
//            textStyle("bold");
            fill("white")
            text(localStorage.name,width/12,height/12)
Health.style(`padding-left`,`15px`)
           Health.style(`padding-right`,`280px`)
               Health.style(`padding-top`,`80px`)
                   Health.style(`padding-bottom`,`65px`)
 Goals.style(`padding-left`,`20px`)
           Goals.style(`padding-right`,`280px`)
               Goals.style(`padding-top`,`80px`)
                   Goals.style(`padding-bottom`,`65px`)
Bot.style(`padding-left`,`20px`)
Bot.style(`padding-right`,`280px`)
Bot.style(`padding-top`,`80px`)
Bot.style(`padding-bottom`,`65px`)
Reports.style(`padding-left`,`20px`)
Reports.style(`padding-right`,`280px`)
Reports.style(`padding-top`,`80px`)
Reports.style(`padding-bottom`,`65px`)
            Health.position(width/3.5,height/1.4)
Goals.position(width/1.32,height/1.4)
Bot.position(width/20,height/1.4)
Reports.position(width/1.91,height/1.4)
    
            desktop();
            console.log("wjhdw")
      
                

        }else{
                     resizeCanvas(window.innerWidth,window.innerHeight*1.1)

            background(dark)
             fill("white")
        textSize(width/20);
//       text("There is no NOBILITY in fighting",width/6,height/5.2)
//                     textStyle("bold")
        text(localStorage.name,width/5,height/16.5)
//   noFill();
//        stroke("gray")
//        strokeWeight(0.05)
//        rect(15,height/2.6,width/1.1,height/12)
//                rect(15,height/2.1,width/1.1,height/12)
//                        rect(15,height/1.75,width/1.1,height/12)
////                                 strokeWeight(1.1)
//        rect(15,height/1.5,width/1.1,height/12)

//         profile.position(width/12,height/5.4)



//                 textStyle("normal")
//                 textSize(width/36)
//                 text("0 out of 1800 cals consumed",width/5,height/2.2)
//                                  text("0 out of 8 glasses ",width/5,height/1.85)
//                                  text("0 out of 8 hours ",width/5,height/1.55)
//                                  text("Active for 0 hours ",width/5,height/1.35)
//
//      
////                    image(sample,width/2.5,6,width/5,height/10)
//                           image(food,17,height/2.55,width/8,height/15)
//                                                      image(water,17,height/2.06,width/8,height/15)
//                                                      image(sleep,20,height/1.74,width/8,height/15)
//                                                      image(run,17,height/1.49,width/8,height/15)
//                                                      image(qot,15,height/5.2,width/1.1,height/6.8)
//          textSize(width/20)
//text("Today's Status",8,height/2.7)
//
//        noFill();
//        stroke("white")
//        strokeWeight(3)
//        circle(width/2,height/17,width/5,height/40)
//        
//         fill("red")
//         circle(width/2,height/17,width/5,height/40)
//         fill("green")
//        
//         fill("white")
//textSize(width/27);
//textStyle("bold")
//        noStroke();
//text("There is no NOBILITY in fighting",width/7,height/4)
//text("Sometimes it is best to SMILE and",width/7,height/3.6)
//text("move on",width/2.5,height/3.25)
count = 0;
            Health.position(15,height/1.26)
Goals.position(width/1.95,height/1.26)
Bot.position(15,height/1.11)
Reports.position(width/1.95,height/1.11)
        }

    
         buttonA.position(width/9,-555);
                                buttonB.position(width/2,-555);
        backButton.position(200,-555);
        talkbox.position(200,-555);
       
      
//        profile.position(width/5,12)
     
see.position(200,-5555)
    }
//console.log(localStorage.login)
        if(localStorage.speed==35){
         resizeCanvas(window.innerWidth,window.innerHeight)
Health.position(15,-555)
Goals.position(width/1.95,-555)
Bot.position(15,-555)
Reports.position(width/1.95,-555)
    background(bot)
            
            backButton.position(15,3)
             fill("white")
            rect(0,0,width,height/15)
            strokeWeight(0.2)
            fill(col1)
            textSize(width/27)
            textStyle("bold")
            text("Ambibot",width/2.5,height/25)
           
            
 talkbox.position(20,height/1.08);
fill("#3744DE")
    if(karna===1){
            count++
    }

            if(count>15){
                fill("#3744DE")
            noStroke();     
rect(width/19,height/15,width/3,height/20)
                textSize(width/40);
                console.log(width/30)
                   fill("white")
                text("Hello "+localStorage.name,width/12,height/10)
            }
              if(count>25){
                fill("#3744DE")
            noStroke();     
rect(width/19,height/8,width/2,height/8.5)
                textSize(width/38);
                   fill("white")
                  
                text("I am `Ambibot` your virtual guide",width/12.5,height/6.5)
                                  text("for all your health related queries",width/12.5,height/5.5)
                                                    text("and a coach for you to live a fit and  ",width/12.5,height/4.8)
                   text("a Healthy Life",width/12.5,height/4.25)


            }
              if(count>35){
                    fill(col1)
    textSize(width/30)
    text(window.innerWidth,width/2,height/12)
                fill("#3744DE")
            noStroke();     
rect(width/19,height/3.9,width/1.8,height/20)
                textSize(width/width*15);
                   fill("white")
                text("Tell me how can I help you "+localStorage.name,width/12,height/3.45)
            }
            if(count>40){
                buttonA.position(width/9,height/3);
                                buttonB.position(width/2,height/3);

            }
            
            if(count>40&&karna===1){
                talkbox.attribute(`placeholder`,`Choose One of the options`)
//                 send.position(width/1.2,height/1.075)
            }
            if(option1){
see.position(16,height/10)
                talkbox.position(200,-555)
            }
        }
}

function tell()
{
    count = 0;
    karna = 2;
     buttonA.position(width/9,-555);
                                buttonB.position(width/2,-555);
  option1 = true;
    
    }
function desktop()
{
}

function back(){
    localStorage.speed=34;
}
