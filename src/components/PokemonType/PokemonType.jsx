import styles from './PokemonType.module.scss'
import { capitalize } from '@/utils'
import { AiFillBug } from 'react-icons/ai'
import { CgDarkMode, CgTerrain, CgShapeCircle } from 'react-icons/cg'
import { SiDungeonsanddragons } from 'react-icons/si'
import { MdOutlineElectricBolt, MdWaterDrop, MdBrightness7 } from 'react-icons/md'
import { GiPunchBlast, GiLibertyWing, GiHighGrass, GiRollingEnergy, GiStoneBlock } from 'react-icons/gi'
import { RiGhost2Fill } from 'react-icons/ri'
import { FaSnowflake, FaSkull } from 'react-icons/fa'
import { BsGearFill, BsFire } from 'react-icons/bs'

const iconMappings = {
  bug: <AiFillBug/>,
  dark: <CgDarkMode/>,
  dragon: <SiDungeonsanddragons/>,
  electric: <MdOutlineElectricBolt/>,
  fairy: <MdBrightness7/>,
  fighting: <GiPunchBlast/>,
  fire: <BsFire/>,
  flying: <GiLibertyWing/>,
  ghost: <RiGhost2Fill/>,
  grass: <GiHighGrass/>,
  ground: <CgTerrain/>,
  ice: <FaSnowflake/>,
  normal: <CgShapeCircle/>,
  poison: <FaSkull/>,
  psychic: <GiRollingEnergy/>,
  rock: <GiStoneBlock/>,
  steel: <BsGearFill/>,
  water: <MdWaterDrop/>
}

export default function PokemonType (props) {
  const type = props.type
  const capiType = capitalize(type)
  const icon = iconMappings[type]

  return (
    <div className={`${styles.wrapper} ${styles[type]}`}>
      <div className={styles.icon}>{icon}</div>
      <span className={styles.name}>{capiType}</span>
    </div>
  )
}
