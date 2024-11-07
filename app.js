const pokemon = require('./data.js')
const game = {
  party: [],
  gyms: [
    { location: 'Pewter City', completed: false, difficulty: 1 },
    { location: 'Cerulean City', completed: false, difficulty: 2 },
    { location: 'Vermilion City', completed: false, difficulty: 3 },
    { location: 'Celadon City', completed: false, difficulty: 4 },
    { location: 'Fuchsia City', completed: false, difficulty: 5 },
    { location: 'Saffron City', completed: false, difficulty: 6 },
    { location: 'Cinnabar Island', completed: false, difficulty: 7 },
    { location: 'Viridian City', completed: false, difficulty: 8 }
  ],
  items: [
    { name: 'potion', quantity: 4 },
    { name: 'pokeball', quantity: 8 },
    { name: 'rare candy', quantity: 99 }
  ]
}
console.dir(pokemon, { maxArrayLength: null })
//Exercise 2
console.log(game)

//Exercise 3 here:
game.difficulty = 'medium'
console.log(game)

//Exercise 4
const starterPokemon = pokemon.find((poke) => poke.starter === true)
game.party.push(starterPokemon)
console.log(game)

//Exercise 5
const choosePokemon = [pokemon[7], pokemon[38], pokemon[4]]
choosePokemon.forEach((pokemon) => game.party.push(pokemon))
console.dir(game.party)

//Solve Exercise 6
game.gyms.forEach((gym) => {
  if (gym.difficulty < 3) {
    gym.completed = true
  }
})
console.dir(game.gyms)

//Solve Exercise 7
const party = [' Jigglypuff', 'Charmeleon', 'Wartortle', 'Bulbasaur']
const Evolve = party.splice(
  0,
  4,
  'Charizard',
  'Wigglytuff',
  'Ivysaur',
  'Blastoise'
)

console.log(party)
//Exercise 8
const pokemonParty = [pokemon[1], pokemon[5], pokemon[39], pokemon[8]]
pokemonParty.forEach((pokemon) => {
  console.log(pokemon.name)
})

//Exercise 9
const starters = pokemon.filter((p) => p.starter)
starters.forEach((starter) => console.log(starter.name))

//Exercise 10
//Exercise 11
//Exercise 12
//Exercise 13
//Exercise 14

//Exercise 15
game.gyms.forEach((gym) => {
  if (gym.difficulty < 8) {
    gym.completed = true
  }
})
console.dir(game.gyms)
//Exercise 16
console.log(game)
