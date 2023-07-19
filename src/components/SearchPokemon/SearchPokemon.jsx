'use client'

import { useState, useRef, useEffect } from 'react'

import Image from 'next/image'
import Link from 'next/link'
import { searchPokemon } from './action'

import styles from './SearchPokemon.module.scss'
import { HiHashtag } from 'react-icons/hi'

export default function SearchPokemon () {
  const [searchState, setSearchState] = useState({
    results: [],
    notFound: false,
    searching: false
  })
  const ref = useRef(null)

  const handleAction = (data) => {
    setSearchState((prevState) => ({
      ...prevState,
      searching: true,
      notFound: false
    }))
    action(data)
  }

  const action = async (data) => {
    try {
      const results = await searchPokemon(data.get('pokemon').toLowerCase())
      setSearchState({
        results: results || [],
        notFound: results === null,
        searching: false
      })
    } catch (error) {
      console.error(error)
    } finally {
      setSearchState((prevState) => ({
        ...prevState,
        searching: false
      }))
    }
  }

  const handleSearch = (e) => {
    const inputValue = e.target.value.trim()

    if (inputValue === '') {
      setSearchState({
        results: [],
        notFound: false,
        searching: false
      })
    }
  }

  const handleLinkClick = () => {
    setSearchState({
      results: [],
      notFound: false,
      searching: false
    })
  }

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target) && (searchState.results.length || searchState.notFound || searchState.searching)) {
        setSearchState({
          results: [],
          notFound: false,
          searching: false
        })
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [searchState])

  return (
    <section className={styles.searchSection} ref={ref}>
      <form className={styles.searchForm} action={handleAction} >
        <input type="search" name="pokemon" onChange={handleSearch} autoComplete="off" placeholder="Search..."/>
      </form>

      { searchState.results.length > 0 && (
        <ul className={styles.searchResults}>
          {searchState.results.map((item) => (
          <Link href={`/pokemon/${item.id}`} alt={`${item.name}`} key={item.id} onClick={handleLinkClick}>
            <li>
              <span><HiHashtag/>{item.id} - {item.name}</span>
              <Image src={item.sprite} alt={item.name} width="70" height="70"/>
            </li>
          </Link>
          ))}
        </ul>
      )}

      { searchState.searching && (
        <div className={styles.searchLoading}>
          <p><i className="fad fa-spinner-third fa-spin"></i> Loading, please wait</p>
        </div>
      )}

      { searchState.notFound && (
        <div className={styles.notFound}>
          <p>Pokemon not Found</p>
        </div>
      )}
    </section>
  )
}
