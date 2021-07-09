import { ChangeEventHandler, useEffect, useState } from 'react'
import { getCards } from '../services/deck-builder'

const CardSearch = () => {
  const [searchInput, setSearchInput] = useState('')

  const handleChangeSearchInput: ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearchInput(event.target.value)
  }

  useEffect(() => {
    if (searchInput) {
      getCards(searchInput)
    }
  },  [searchInput])

  return (
    <div>
      <h2>Card Search</h2>
      <input type="text" value={searchInput} onChange={handleChangeSearchInput} />
    </div>
  )
}

export default CardSearch
