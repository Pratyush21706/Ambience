localStorage.speed;
var food,water,sleep,run;
localStorage.name;
localStorage.age;
var a = 1,b=1,quotes;
var nameInput;
function preload(){
  smile =loadImage("intro.png")
    logo = loadImage("logo.jpg")
    user = loadImage("user.jpg")
        age = loadImage("age.jpg")
 header = loadImage("check.jpg")
     header = loadImage("check.jpg")
 sample = loadImage("sample.jpg")
    homebg = loadImage("homebg.png")
    food = loadImage("food.png")
    water = loadImage("water.png")
    sleep = loadImage("sleep.png")
    run = loadImage("run.png")
        heart = loadImage("heart.png")
    goal = loadImage("goal.png");
        report = loadImage("report.png")
}
function setup(){
          createCanvas(windowWidth, windowHeight);
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
//    input1.style(`bottom border`,`20px solid black`)
//        input1.style(`padding`,`5px`)
                input1.style(`outline`,`0px`)

    
    input2 = createInput(``).attribute(`placeholder`,`Age`)
    input2.position(width/4,-555);
    input2.style(`font-size`,`20px`)
        input2.style(`border`,`200px`)
//    input1.style(`bottom border`,`20px solid black`)
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
    registerButton.mousePressed(registerd)
//let am = window.innerWidth+"px";
//    console.log(am)
   profile = createButton(`.`)
profile.style(`background-color`,`aqua`);
profile.position(width/6,-555)
profile.style(`border`,`2px`)
   profile.style(`border-radius`,`15px`)
  profile.style(`padding-left`,`100px`)
           profile.style(`padding-right`,`225px`)
               profile.style(`padding-top`,`85px`)
                   profile.style(`padding-bottom`,`5px`)
//    loadJSON("https://favqs.com/api/qotd",loaded)

}
//function loaded(data){
//    quotes = data;
//    console.log(quotes)
//}
function registerd(){
  localStorage.name = input1.value();
    localStorage.age = input2.value();
    console.log("Name: "+localStorage.name)
        console.log("Age: "+localStorage.age)
    localStorage.speed = 34;
 input1.position(width/4,-555);
 input2.position(width/4,-555);
 registerButton.position(width/2.1,-555)
     alert(`You Have Registerd Successfully`)                     
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
 if(localStorage.speed==null){
     if(a===1){
    fill("black")
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
    if(localStorage.login==34){
         resizeCanvas(window.innerWidth,window.innerHeight*1.1)

    background(homebg)
        fill("white")
        textSize(20);
       go=  text("Good Morning, ",width/5,height/7.05)
       text("There is no NOBILITY in fighting",width/6,height/5.2)
        textStyle("bold")
        text(localStorage.name+"!!",width/1.9,height/7)
//        profile.position(width/5,12)
        noFill();
        stroke("gray")
        strokeWeight(0.05)
        rect(15,height/2.6,width/1.1,height/12)
                rect(15,height/2.1,width/1.1,height/12)
                        rect(15,height/1.75,width/1.1,height/12)
//                                 strokeWeight(1.1)
        rect(15,height/1.5,width/1.1,height/12)
       
//         profile.position(width/12,height/5.4)

        fill("black");
        
        textSize(18);
text("Health",width/5.4,height/1.2)
text("Monitoring",width/5.4,height/1.16)
text("Goals",width/1.35,height/1.18)
text("Dr. Bot",width/5,height/1.05)
text("Reports",width/1.3,height/1.05)
textSize(20);
text("Food",width/5,height/2.35)
text("Water",width/5,height/1.95)
text("Sleep",width/5,height/1.62)
text("Activity",width/5,height/1.4)



                 textStyle("normal")
                 textSize(18)
                 text("0 out of 1800 cals consumed",width/5,height/2.2)
                                  text("0 out of 8 glasses ",width/5,height/1.85)
                                  text("0 out of 8 hours ",width/5,height/1.55)
                                  text("Active for 0 hours ",width/5,height/1.35)

        textSize(25)
text("Today's Status",8,height/2.7)

//                    image(sample,width/2.5,6,width/5,height/10)
                           image(food,17,height/2.55,width/8,height/15)
                                                      image(water,17,height/2.06,width/8,height/15)
                                                      image(sleep,20,height/1.74,width/8,height/15)
                                                      image(run,17,height/1.49,width/8,height/15)
                                                      image(heart,17,height/1.24,width/8,height/15)
                                                      image(goal,width/1.7,height/1.24,width/8,height/15)

                                                      image(report,width/1.7,height/1.1,width/8,height/15)

        noFill();
        stroke("white")
        strokeWeight(3)
        circle(width/2,height/17,width/5,height/40)
        
         fill("red")
         circle(width/2,height/17,width/5,height/40)
         fill("green")
         fill("aqua")
         circle(width/6,height/4.29,width/5,height/40)
         circle(width/1.15,height/3.5,width/5,height/40)
fill("aqua")
                 noStroke();
                rect(width/11,height/5,width/1.2,height/8)

         fill("black")
textSize(18);
textStyle("bold")
text("There is no NOBILITY in fighting",width/7,height/4)
text("Sometimes it is best to SMILE and",width/7,height/3.6)
text("move on",width/2.5,height/3.25)


    }
//console.log(localStorage.login)
}