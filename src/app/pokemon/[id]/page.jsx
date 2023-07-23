import Pokemon from '@/components/Pokemon/Pokemon'

export default function PokemonPage ({ params }) {
  return (
    <>
      <Pokemon id={params.id}/>
    </>
  )
}
