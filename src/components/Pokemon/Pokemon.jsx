import { findPokemon } from '@/services/api-pokemon'
import styles from './Pokemon.module.scss'
import Image from 'next/image'
import { capitalize, getMeasure } from '@/utils'
import PokemonType from '@/components/PokemonType/PokemonType'

export default async function Pokemon (props) {
  const id = props.id
  const cache = props.cache || true
  const rawPokemon = await findPokemon(id, cache)

  // Validar que el objeto raw pokemon contenga información
  if (!rawPokemon) {
    return null
  }

  const name = capitalize(rawPokemon.name)
  const sprite = rawPokemon.sprites.other['official-artwork'].front_default
  const type = rawPokemon.types
  const height = getMeasure(rawPokemon.height, 0)
  const weight = getMeasure(rawPokemon.weight, 1)

  return (
    <>
      <section className={styles.pokemonWrapper}>
        <div className={styles.container}>
          <Image src={sprite} alt={name} width="300" height="300"/>
          <h2>{name}</h2>
          <div className={styles.typeContainer}>
            Type: {type.map((item, idx) => (
              <PokemonType key={idx} type={item.type.name} />
          ))}
          </div>
          <p>Height: {height}</p>
          <p>Weight: {weight}</p>
        </div>
      </section>
    </>
  )
}
