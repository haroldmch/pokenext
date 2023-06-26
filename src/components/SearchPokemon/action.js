'use server'

export async function findPokemon (pokemon) {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`) || {}
    const results = await res.json()

    return results
  } catch (error) {
    return {
      message: '404 Pokemon not Found'
    }
  }
}
