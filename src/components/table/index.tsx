import { ReactNode } from 'react'
import './table.scss'

export interface Props {
  children?: ReactNode
}

const Table = ({ children }: Props) => {
  return (<table className="table">{children}</table>)
}

export default Table
