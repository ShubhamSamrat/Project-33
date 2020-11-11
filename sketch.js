var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions=[];

var divisionHeight=300;
var score =0;
var particle;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=800; k = k + 80) {
     divisions.push(new Divisions(k, 800-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%50===0){
     particles.push(new Particle(random(width/2-200,width/2+200), 10,10));
     
   }
 
  for (var j = 0; j < particles.length; j++) {

    //if(j.position.x )
    particle = particles[j];
    if(particle.body.position.y > 520 && particle.body.position.y < 528){
      
      if(particle.body.position.x < 90){
        score = score + 1000;    
      }else if(particle.body.position.x > 90 && particle.body.position.x < 170){
        score = score + 900;
      }else if(particle.body.position.x > 170 && particle.body.position.x < 250){
        score = score + 800;
      }else if(particle.body.position.x > 250 && particle.body.position.x < 330){
        score = score + 1200;
      }else if(particle.body.position.x > 330 && particle.body.position.x < 410){
        score = score + 600;
      }else if(particle.body.position.x > 410 && particle.body.position.x < 490){
        score = score + 1100;
      }else if(particle.body.position.x > 490 && particle.body.position.x < 570){
        score = score + 100;
      }else if(particle.body.position.x > 570 && particle.body.position.x < 650){
        score = score + 700;
      }else if(particle.body.position.x > 650 && particle.body.position.x < 730){
        score = score + 300;
      }else if(particle.body.position.x > 730){
        score = score + 1300;
      }  

    }
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   text("Score : " + score,30,40);
   text("1000",15,600);
   text("900",100,600);
   text("800",180,600);
   text("1200",260,600);
   text("600",340,600);
   text("700",420,600);
   text("100",500,600);
   text("1100",580,600);
   text("300",660,600);
   text("1300",740,600);

   text("X : " + mouseX,300,40)
   text("Y : " + mouseY,600,40)
}

