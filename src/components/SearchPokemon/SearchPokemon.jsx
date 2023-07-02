'use client'

import { useState } from 'react'
import { searchPokemon } from './action'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/SearchPokemon.module.scss'
import { BiSearchAlt } from 'react-icons/bi'
import { HiHashtag } from 'react-icons/hi'

export default function SearchPokemon () {
  const [pokemon, setPokemon] = useState(null)
  const [pokemonNotFound, setPokemonNotFound] = useState(false)
  const [isSearching, setIsSearching] = useState(false)

  const handleAction = (data) => {
    if (pokemon) {
      setPokemon(null)
    }

    setIsSearching(true)
    setPokemonNotFound(false)

    action(data)
  }

  const action = async (data) => {
    try {
      const results = await searchPokemon(data.get('pokemon'))
      setPokemon(results)
      setPokemonNotFound(results === null)
    } catch (error) {
      setIsSearching(false)
      console.error(error)
    } finally {
      setIsSearching(false)
    }
  }

  const handleSearch = (e) => {
    const inputValue = e.target.value.trim()

    if (inputValue === '') {
      setPokemon(null)
      setPokemonNotFound(false)
      setIsSearching(false)
    }
  }

  return (
    <section className={styles.searchSection}>
      <form className={styles.searchForm} action={handleAction} >
        <input type="search" name="pokemon" onChange={handleSearch} autoComplete="off"/>
        <button type="submit"> <BiSearchAlt/> </button>
      </form>

      { pokemon && (
        <ul className={styles.searchResults}>
          {pokemon.map((item) => (
          <Link href={`/pokemon/${item.id}`} alt={`${item.name}`} key={item.id}>
            <li>
              <span><HiHashtag/>{item.id} - {item.name}</span>
              <Image src={item.sprite} alt={item.name} key={item.id} width="70" height="70"/>
            </li>
          </Link>
          ))}
        </ul>
      )}

      { isSearching && (
        <div className={styles.searchLoading}>
          <p><i className="fad fa-spinner-third fa-spin"></i> Loading, please wait</p>
        </div>
      )}

      { pokemonNotFound && (
        <div className={styles.notFound}>
          <p>Pokemon not Found</p>
        </div>
      )}
    </section>
  )
}
