import { ReactNode  } from 'react'

import SearchBar from '../search-bar/search-bar'

import './Layout.scss'

export interface Props {
  children?: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <main className="layout">
      <header>Deck Builder</header>
      <SearchBar className="layout--search-bar" />
      <section>
        {children}
      </section>
    </main>
  )
}

export default Layout
