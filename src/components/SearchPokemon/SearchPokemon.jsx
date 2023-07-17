'use client'

import { useState, useRef, useEffect } from 'react'

import Image from 'next/image'
import Link from 'next/link'
import { searchPokemon } from './action'

import styles from './SearchPokemon.module.scss'
import { HiHashtag } from 'react-icons/hi'

export default function SearchPokemon () {
  const [pokemon, setPokemon] = useState(false)
  const [pokemonNotFound, setPokemonNotFound] = useState(false)
  const [isSearching, setIsSearching] = useState(false)
  const ref = useRef(null)

  const handleAction = (data) => {
    if (pokemon) {
      setPokemon(false)
    }

    setIsSearching(true)
    setPokemonNotFound(false)

    action(data)
  }

  const action = async (data) => {
    try {
      const results = await searchPokemon(data.get('pokemon').toLowerCase())
      setPokemon(results)
      setPokemonNotFound(results === null)
    } catch (error) {
      setIsSearching(false)
      alert(error)
      console.error(error)
    } finally {
      setIsSearching(false)
    }
  }

  const handleSearch = (e) => {
    const inputValue = e.target.value.trim()

    if (inputValue === '') {
      setPokemon(false)
      setPokemonNotFound(false)
      setIsSearching(false)
    }
  }

  const handleLinkClick = () => {
    setPokemon(false)
    setPokemonNotFound(false)
    setIsSearching(false)
  }

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target) && (pokemon || pokemonNotFound || isSearching)) {
        setPokemon(false)
        setPokemonNotFound(false)
        setIsSearching(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [pokemon, pokemonNotFound, isSearching])

  return (
    <section className={styles.searchSection} ref={ref}>
      <form className={styles.searchForm} action={handleAction} >
        <input type="search" name="pokemon" onChange={handleSearch} autoComplete="off" placeholder="Search..."/>
      </form>

      { pokemon && (
        <ul className={styles.searchResults}>
          {pokemon.map((item) => (
          <Link href={`/pokemon/${item.id}`} alt={`${item.name}`} key={item.id} onClick={handleLinkClick}>
            <li>
              <span><HiHashtag/>{item.id} - {item.name}</span>
              <Image src={item.sprite} alt={item.name} width="70" height="70"/>
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
