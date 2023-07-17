import Image from 'next/image'
import Link from 'next/link'
import styles from './Nav.module.scss'
import logo from '../../../public/pokenext_logo.png'

// Icons
import { CgPokemon } from 'react-icons/cg'
import { IoMdArrowRoundForward } from 'react-icons/io'

export default function Nav () {
  const generations = [
    { id: 1, name: 'Kanto' },
    { id: 2, name: 'Johto' },
    { id: 3, name: 'Hoenn' },
    { id: 4, name: 'Sinnoh' },
    { id: 5, name: 'Teselia' },
    { id: 6, name: 'Kalos' },
    { id: 7, name: 'Alola' },
    { id: 8, name: 'Galar' },
    { id: 9, name: 'Paldea' }
  ]

  return (
    <>
      <section className={styles.sectionNav}>
        <nav className={styles.nav}>
          <Link href="/" alt="Home" className={styles.logo}>
            <Image src={logo} alt="PokeNext" width="50" height="50"/>
            <h1>Poke<span>Next.js</span></h1>
          </Link>
          <hr/>
          <h2><CgPokemon/> Generations</h2>
          <ul>
          {generations.map((item) => (
            <li key={item.id}>
              <Link href={`/generation/${item.id}`} alt={item.name}>
                {item.name} <IoMdArrowRoundForward/>
              </Link>
            </li>
          ))}
          </ul>
        </nav>
      </section>
    </>
  )
}
