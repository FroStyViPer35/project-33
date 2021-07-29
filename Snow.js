class Snow{
constructor(x,y,radius){
    var options = {

        isStatic : false
        
       
       }
       this.image = loadImage("snow5.webp")
       this.body = Matter.Bodies.circle(x,y,radius,options);
       this.radius = 10 
      Matter. World.add (world,this.body)

}

display(){

 push ()
 translate (this.body.position.x, this.body.position.y)
 image(this.image, 0,0)
 pop ()
 
}


}
