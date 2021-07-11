import FilterIcon from '../icons/filter'
import './filter-button.scss'

export interface Props {
  value?: boolean,
  onChange?: (value: boolean) => void
}

const DEFAULT_COLOR = 'rgba(0, 0, 0, .6)'
const ACTIVE_COLOR = '#6200e8'

const FilterButton = ({ value = false, onChange }: Props) => {
  const handlePress = () => {
    onChange?.(!value)
  }

  return (
    <button className="filter-button" onClick={handlePress}>
      <FilterIcon color={value ? ACTIVE_COLOR : DEFAULT_COLOR}/>
    </button>
  )
}

export default FilterButton
