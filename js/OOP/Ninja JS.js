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