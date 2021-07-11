import { ChangeEventHandler, useState } from 'react'
import classnames from 'classnames'

import SearchIcon from '../icons/search'
import useAppDispatch from '../../hooks/useAppDispatch'
import useAppSelector from '../../hooks/useAppSelector'
import { search, selectSearchOptions } from '../../store/card-search'
import FilterButton from '../filter-button'
import Collapsible from '../collapsible'

import './search-bar.scss'

export interface Props {
  className?: string
}

const SearchBar = ({ className }: Props) => {
  const dispatch = useAppDispatch()
  const { name } = useAppSelector(selectSearchOptions)
  const [showFilters, setShowFilters] = useState<boolean>(false)

  const handleChangeSearchInput: ChangeEventHandler<HTMLInputElement> = ({ target: { value }}) => {
    dispatch(search({ name: value }))
  }

  return (
    <div className={classnames('search-bar', className)}>
      <div className="input-row">
        <SearchIcon />
        <input className="search-bar-input" type="text" placeholder="Search" value={name} onChange={handleChangeSearchInput} />
        <FilterButton value={showFilters} onChange={setShowFilters} />
      </div>
      <Collapsible collapse={!showFilters}>
        Filters
      </Collapsible>
    </div>
  )
}

export default SearchBar
