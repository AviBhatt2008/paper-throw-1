class Ground
{
 constructor(x, y)
 {
   var options = 
   {
      isStatic: true
   }
   this.body = Bodies.rectangle(x, y, 1200, 20, options);
   World.add(world, this.body);
 }
 display()
 {
   rectMode(CENTER);
   rect(this.body.position.x, this.body.position.y, 1200, 20);
 }
}