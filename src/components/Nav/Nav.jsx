import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/Nav.module.scss'
import logo from '../../../public/pokenext_logo.png'

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
            <Image src={logo} alt="PokeNext" width="70" height="70"/>
            <h1>PokeNext</h1>
          </Link>
          <hr/>
          <h2>Generations</h2>
          <ul>
          {generations.map((item) => (
            <li key={item.id}>{item.id}. {item.name}</li>
          ))}
          </ul>
          <hr/>
        </nav>
      </section>
    </>
  )
}
