class Ninja{
    constructor(name,health){
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    } 
    sayName() {
        console.log("Name of ninja is  " + this.name )
    }
    showStats(){
        console.log("Name is " + this.name + "Ninja Health : " +this.health + " , Strength is " + this.strength + " , Speed " + this.speed)
    }
    drinkSake(){
        this.health += 10;

    }
    
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats(); // health gives us undefined because we didn't pass it! we only passed the name attribute ! 
class Sensei extends Ninja {
    constructor(name){
    super(name,200,10,10);
        this.wisdome = 10;
    }
    speakWisdom(){
        console.log("What one programmer can do in one month, two programmers can do in two months.")
    }
    drinkSake(){
    }

}
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"