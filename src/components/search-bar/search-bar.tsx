import { ChangeEventHandler } from 'react'
import classnames from 'classnames'

import SearchIcon from '../icons/search'
import useAppDispatch from '../../hooks/useAppDispatch'
import useAppSelector from '../../hooks/useAppSelector'
import { search, selectSearchOptions } from '../../store/slices/cardSearch'

import './search-bar.scss'

export interface Props {
  className?: string
}

const SearchBar = ({ className }: Props) => {
  const dispatch = useAppDispatch()
  const { name } = useAppSelector(selectSearchOptions)

  const handleChangeSearchInput: ChangeEventHandler<HTMLInputElement> = ({ target: { value }}) => {
    dispatch(search({ name: value }))
  }

  return (
    <div className={classnames('search-bar', className)}>
      <SearchIcon />
      <input className="search-bar-input" type="text" placeholder="Search" value={name} onChange={handleChangeSearchInput} />
    </div>
  )
}

export default SearchBar
