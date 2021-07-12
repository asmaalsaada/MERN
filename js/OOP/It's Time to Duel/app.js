class Card {
    constructor(name,cost){
        this.name =name;
        this.cost = cost;
    }
}
class Unit extends Card{
    constructor(name,cost,power,resiliance){
        super(name,cost)
        this.power = power;
        this.resiliance=resiliance;
    }
    attack(target){
        target.resiliance -= this.power;
        console.log(`${this.name} reduced ${target.name}'s resiliance by ${this.power}`)
    }
}
class Effects extends Card{
    constructor(name,cost,stat,magnitude){
        super(name,cost);
        this.stat = stat; 
        this.magnitude = magnitude; 
    }
    play( target ) {
        if( target instanceof Unit ) {
            // access key inside var stat
            target[this.stat] += this.magnitude;
            let changeable = "increase";

            if(this.magnitude < 0) {
                changeable = "decrease";

            }  
                console.log(`${changeable} target's ${this.stat} by ${Math.abs(this.magnitude)}`)
            console.log(target);
        } else {
            throw new TypeError( "Target must be a unit!" );
        }
    }
}

const redBeltNinja = new Unit("Red Belt Ninja",3,3,4);
const blackBeltNinja = new Unit("Black Belt Ninja",4,5,4);
const hardAlgo = new Effects("Hard  Algo",2,"resiliance",3);
const unhandeledPromiseRegection = new Effects("Unhandled Promise Rejection",1,"resiliance",-2);
const pairProgramming = new Effects("Pair Programming",3,"power",2);

hardAlgo.play(redBeltNinja);
unhandeledPromiseRegection.play(redBeltNinja);
pairProgramming.play(blackBeltNinja);
redBeltNinja.attack(blackBeltNinja);
pairProgramming.play(hardAlgo); //throws an error