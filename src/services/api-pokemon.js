export async function findAllPokemon () {
  try {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=2000') || {}
    const pokedex = await res.json()

    return pokedex.results
  } catch (error) {
    return false
  }
}

export async function findPokemon (id) {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`) || {}
    const pokemon = await res.json()
    return pokemon
  } catch (error) {
    return false
  }
}

export async function findFlavorPokemon (id) {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`) || {}
    const pokemon = await res.json()
    return pokemon
  } catch (error) {
    return false
  }
}
