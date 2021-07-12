const pokémon = Object.freeze([
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
]);

const bListPkmn = pokémon.filter( p => p.name[0] === "B" );
const pkmnIds = pokémon.map( p => p.id )

// 1 
const divasableByThree = pokémon.filter( p => p.id % 3 === 0 );
//2 
const firePoke = pokémon.filter( p => p.types == "fire" );
//3  types is an array
const moreThan1Type = pokémon.filter( p => p.types.length>1);
//4 
const names = pokémon.map( p => p.name );
//5
const namesGreater99 = pokémon.filter(p=>p.id >99).map( p => p.name );
//6
const namesTypePoison = pokémon.filter(p=>p.types == "poison").map(p=>p.name);
//7 
const type2Flying =  pokémon.filter(p=>p.types[1] === "flying").map(p=>p.name);
//8 
const count = pokémon.filter(p=>p.types == "normal").length;
console.log(divasableByThree);
console.log(firePoke); 
console.log(moreThan1Type);
console.log(names);
console.log(namesGreater99);
console.log(namesTypePoison);
console.log(type2Flying);
console.log(count);