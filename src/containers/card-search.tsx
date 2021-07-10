import Table from '../components/table'
import useAppSelector from '../hooks/useAppSelector'
import { selectCards } from '../store/slices/cardSearch'

const CardSearch = () => {
  const cards = useAppSelector(selectCards)

  return (
    <Table>
      <thead>
        <tr>
          <td>Card Name</td>
          <td>Mana</td>
          <td>Type</td>
          <td>Set</td>
        </tr>
      </thead>
      <tbody>
        {(cards || []).map(card => (
          <tr key={card.id}>
            <td>{card.name}</td>
            <td>{card.manaCost}</td>
            <td>{card.type}</td>
            <td>{card.set}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default CardSearch
