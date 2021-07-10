import { Color, ColorIdentity } from './color'
import { Legality } from './legality'

export interface ForeignName {
  flavor: string
  imageUrl: string
  language: string
  multiverseid: number
  name: string
  text: string
  type: string
}

export interface Rulling {
  date: string
  text: string
}

export interface Card {
  artist: string,
  cmc: number,
  colorIdentity?: ColorIdentity[],
  colors?: Color[]
  foreignNames: ForeignName[]
  id: string
  imageUrl: string
  layout: string
  legalities: Legality[]
  manaCost: string
  multiverseid: string
  name: string
  number: string
  originalText: string
  originalType: string
  power: string
  printings: string[]
  rarity: string
  rullings?: Rulling[]
  set: string
  setName: string
  subtypes: string[]
  text: string
  toughness: string
  type: string
  types: string[]
  variations: string[]
}
