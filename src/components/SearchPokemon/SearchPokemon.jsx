'use client'

import { useState } from 'react'
import { findPokemon } from './action'

export default function SearchPokemon () {
  const [pokemon, setPokemon] = useState()

  const action = async (data) => {
    setPokemon(await findPokemon(data.get('pokemon')))
  }

  return (
    <>
      <form action={action}>
        <input type="text" name="pokemon" placeholder="Name / ID" />
        <button type="submit">Search</button>
      </form>

      { pokemon &&
      <>
        <p>{pokemon.name}</p>
      </>}

    </>
  )
}
