import { ChangeEventHandler } from 'react'
import classnames from 'classnames'

import SearchIcon from '../icons/search'

import './search-bar.scss'

export interface Props {
  className?: string
}

const SearchBar = ({ className }: Props) => {

  const handleChangeSearchInput: ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(event.target.value)
  }

  return (
    <div className={classnames('search-bar', className)}>
      <SearchIcon />
      <input className="search-bar-input" type="text" placeholder="Search" onChange={handleChangeSearchInput} />
    </div>
  )
}

export default SearchBar
