import { ChangeEventHandler } from 'react'
import classnames from 'classnames'

import SearchIcon from '../icons/search'

import './search-bar.scss'

import { getCards } from '../../services/deck-builder'

export interface Props {
  className?: string
}

const SearchBar = ({ className }: Props) => {

  const handleChangeSearchInput: ChangeEventHandler<HTMLInputElement> = (event) => {
    fetchCards(event.target.value)
  }

  const fetchCards = async (name: string) => {
    const cards = await getCards(name)
    console.log(cards)
  }

  return (
    <div className={classnames('search-bar', className)}>
      <SearchIcon />
      <input className="search-bar-input" type="text" placeholder="Search" onChange={handleChangeSearchInput} />
    </div>
  )
}

export default SearchBar
