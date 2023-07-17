import '@/styles/global.scss'
import '@/styles/layout.scss'
import { Inter } from 'next/font/google'
import Nav from '@/components/Nav/Nav'
import SearchPokemon from '@/components/SearchPokemon/SearchPokemon'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'PokeNext',
  description: 'Generated by create next app'
}

export default function RootLayout ({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <Nav/>
        </header>
        <main>
          <SearchPokemon/>
          {children}
        </main>
        <footer>
          <hr />
          <a href="https://pokeapi.co/" alt="PokeAPI" target="_blank" rel="noreferrer">
            PokeAPI 2023
          </a>
        </footer>
      </body>
    </html>
  )
}
