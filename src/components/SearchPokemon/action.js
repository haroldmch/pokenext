import { capitalize } from '@/utils'
import { findAllPokemon, findPokemon } from '@/services/api-pokemon'

export async function searchPokemon (pokemon) {
  const all = await findAllPokemon()
  const rawResults = all.filter((entry) => entry.name.includes(pokemon) && !entry.name.includes('-'))

  if (rawResults && pokemon) {
    const results = await Promise.all(rawResults.map(async (item) => {
      const pokemon = await findPokemon(item.name)

      return {
        id: pokemon.id,
        name: capitalize(pokemon.name),
        sprite: pokemon.sprites.front_default
      }
    }))

    return results.length > 0 ? results : null
  }
}
