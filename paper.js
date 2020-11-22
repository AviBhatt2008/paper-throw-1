class Paper
{
 constructor(x, y)
 {
   var options = 
   {
      isStatic: false,
      restitution: 0.3,
      friction: 0.5,
      density: 1.2,
   }
   this.body = Bodies.circle(x, y, 10, options);
   World.add(world, this.body);
 }
 display()
 { 
   push()
   rectMode(CENTER);
   translate(this.body.position.x, this.body.position.y);
   ellipse(0, 0, 20, 20);
   pop()
 }
}