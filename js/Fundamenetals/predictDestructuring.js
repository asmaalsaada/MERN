//---

const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar) // "Tesla"
console.log(otherRandomCar) // "Mercedes"

//----

const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
console.log(name); // would give us a refference error: name is not defined
console.log(otherName); //would log the value of the key name in employee object "Elon" but it doesn't reach it 

//-----
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345'; 
const { password: hashedPassword } = person;  
//Predict the output
console.log(password); // logs '12345'
console.log(hashedPassword); // undefined

//------

const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers; // give us 2 numbers[1]
const [,,,second] = numbers; // give us 5 numbers[3]
const [,,,,,,,,third] = numbers; //give us 2 numbers[8] 
//Predict the output
console.log(first == second);  // 2 == 3 ? logs false 
console.log(first == third); // 2 == 2 ? logs true 
//---------
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest; 
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key); //  gives us 'value'
console.log(secondKey); // gives us  [1, 5, 1, 8, 3, 3]
console.log(secondKey[0]); // gives us 1
console.log(willThisWork);  // gives us 5 






