import SearchPokemon from '@/components/SearchPokemon/SearchPokemon'
import { MdCatchingPokemon } from 'react-icons/md'

export default function Home () {
  return (
    <>
      <nav>
        <h2>PokeNext <MdCatchingPokemon /></h2>
        <SearchPokemon/>
      </nav>
    </>
  )
}
