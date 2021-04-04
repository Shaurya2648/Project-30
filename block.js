class Block  {
    constructor(x,y,width,height)  {
        var options={
            isStatic:false
        }
        this.width = width
        this.height = height
        this.body = Bodies.rectangle(x,y,width,height,options)
        

        World.add(world,this.body)

    }
    display()  {
        if(this.body.speed<7){
            this.pos=this.body.position;
           push();
           translate(this.pos.x,this.pos.y)
           rectMode(CENTER);
           fill("lightBlue")
           rect(0,0,30,40);
           pop();
       }
       else{
           World.remove(world,this.body);
           push();
           tint(255,this.visibility);
           this.visibility=this.visibility-5;
           pop();
       }
   }
 }