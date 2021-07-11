var hello;
console.log(hello);    // logs "world"                                
hello = 'world';                                 
////////////----

var needle;
needle = 'haystack'; 
function test(){
    var needle; //local variable
    console.log(needle); 
    needle = 'magnet'; //we will get this in the console
    }
test(); //magnet 
//--------

var brendan;
brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan); 
} // wouldn't run because it wasn't called
console.log(brendan); // will log the global variable

//------

var food; 
food = 'chicken';
console.log(food); // logs 'chicken'
eat(); //  logs 'half-chicken'
function eat(){
    var food;
    food = 'half-chicken';
    console.log(food);
    food = 'gone';
}

//------
var mean;
mean(); // referrence error 
console.log(food);  // food is not defined 
mean = function() {
    food = "chicken"; 
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);  // food is not defined 
///-----
var genre;
console.log(genre);
genre = "disco";
rewind(); // Logs
function rewind() {
    var genre;
    genre = "rock";
    console.log(genre); // "rock"
    genre = "r&b";
    console.log(genre); // "r&b"
}
console.log(genre); // logs 'disco'

///----- 
dojo = "san jose";
console.log(dojo); // logs "san jose"
learn();  // referrence error
function learn() { 
    var dojo;
    dojo = "seattle";  
    console.log(dojo); // logs "seattle"
    dojo = "burbank";
    console.log(dojo); // logs "burbank "
}
console.log(dojo); // logs "san jose"
//--------
console.log(makeDojo("Chicago", 65)); // {name:"Chicago",students:65,hiring:true}
console.log(makeDojo("Berkeley", 0)); // wouldn't log
function makeDojo(name, students){
    const dojo = {}; 
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){ // would give us 
        dojo.hiring = true;
    } 
    else if(dojo.students <= 0){
        dojo = "closed for now"; //can't be reassigned to a different type of data
    }
    return dojo;
}








