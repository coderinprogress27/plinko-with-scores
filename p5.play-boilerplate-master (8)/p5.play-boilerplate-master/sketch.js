const Engine = Matter.Engine
const Bodies = Matter.Bodies
const World = Matter.World
var division1
var division2
var division3
var division4
var division5
var division6
var ground
var plinko
var particles
var engine
var world
var plinkos = []
var fallingobjects = []
var turn
var line_of_judgement;
var score;
var gameState=0;
function setup() {
  createCanvas(500,500);
  background("white")
engine = Engine.create()
world = engine.world

division1 = new Division(0,450,20,1000)
          division2 = new Division(80,450,20,150)
          division3 = new Division(160,450,20,150)
          division4 = new Division(240,450,20,150)
          division5 = new Division(320,450,20,150)
          division6 = new Division(400,450,20,150)
          division7 = new Division(500,450,20,1000)
          ground = new Ground(250,500,500,20)
       score = 0;
          for(var j = 40; j <=width; j=j+50){
            plinkos.push(new Plinko(j,45))
              }
          for(var j = 40; j <=width; j=j+50){
           plinkos.push(new Plinko(j,145))
              }
              for(var j = 40; j <=width; j=j+50){
               plinkos.push(new Plinko(j,245))
                  }
              for(var j = 40; j <=width; j=j+50){
               plinkos.push(new Plinko(j,345))
          
        }
      }
        function draw(){
          background("blue")
          Engine.update(engine)
          text("score:"+score,30,30)
          text("500",30,400)
          text("500",110,400)
          text("200",190,400)
          text("200",270,400)
          text("100",350,400)
          text("100",420,400)
          
          drawSprites();
          //if(frameCount%100===0){
            // fallingobjects.push(new Particle(random(0,width-10), 10,10))
           //}
           if(particles!=null){
            particles.display();
            if(particles.body.position.y>380){
              if(particles.body.position.x<160){
                score=score+500
                particles=null
                if(count>=5)gameState="end"
              }
            }
          }
          if(particles!=null){
            particles.display();
            if(particles.body.position.y>380){
              if(particles.body.position.x<320){
                score=score+500
                particles=null
                if(count>=5)gameState="end"
              }
            }
          }
          if(particles!=null){
            particle.display();
            if(particles.body.position.y>380){
              if(particles.body.position.x<500){
                score=score+500
                particles=null
                if(count>=5)gameState="end"
              }
            }
          }
           drawSprites();
           division1.display();
           division2.display();
           division3.display();
           division4.display();
           division5.display();
           division6.display();
           division7.display();
           ground.display();
           
          for(var i = 0;i<plinkos.length;i++){
          plinkos[i].display();
            }
            //for(var d = 0;d<fallingobjects.length;d++){
              //fallingobjects[d].display();
              //}
                   }

function mousepressed(){
  if(gameState!=="end"){
    count++;
    particle=new Particle(mouseX, 10, 10, 10)
  }
}

          
        
        
        
        
        
        
        
                   