import Pokemon from '@/components/Pokemon/Pokemon'
import { randomNumber } from '@/utils'

export default function Home () {
  const id = randomNumber(1, 1010)
  // const id = 10 // Bug +
  // const id = 570 // Dark +
  // const id = 371 // Dragon +
  // const id = 25 // Electric +
  // const id = 35 // Fairy +
  // const id = 106 // Fighting +
  // const id = 4 // Fire +
  // const id = 18 // Flying +
  // const id = 92 // Ghost +
  // const id = 1 // Grass +
  // const id = 27 // Ground +
  // const id = 144 // Ice +
  // const id = 399 // Normal +
  // const id = 24 // Poison +
  // const id = 282 // Psychic +
  // const id = 74 // Rock +
  // const id = 208 // Steel +
  // const id = 7 // Water +

  return (
    <>
      <Pokemon id={id} cache="false" />
    </>
  )
}
