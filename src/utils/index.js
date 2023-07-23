export function capitalize (string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export function randomNumber (min, max) {
  const random = Math.random()
  const range = max - min
  const scaledRandom = random * range
  const roundedRandom = Math.floor(scaledRandom)
  const finalRandom = min + roundedRandom

  return finalRandom
}

export function getMeasure (number, type) {
  const fraction = parseFloat((number * 0.1).toFixed(2))
  const formattedFraction = fraction % 1 === 0 ? fraction.toFixed(0) : fraction

  let measure = ''

  if (type === 0) {
    measure = fraction < 1 ? `${number * 10}cm` : `${formattedFraction}m`
  } else if (type === 1) {
    measure = fraction < 1 ? `${number * 100}g` : `${formattedFraction}kg`
  }

  return measure
}
