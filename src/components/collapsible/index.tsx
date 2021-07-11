import { useRef, useEffect, useState, ReactNode } from 'react'

import classnames from 'classnames'
import './collapsible.scss'

export interface Props {
  children: ReactNode,
  collapse?: boolean,
  className?: string,
  flat?: boolean
}

const Collapsible = ({ children, collapse, className, flat = false }: Props) => {
  const content = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState<number>(0)

  useEffect(() => {
    setHeight(content.current?.clientHeight || 0)
  }, [])

  const onResize = () => {
    setHeight(content.current?.clientHeight || 0)
  }

  useEffect(() => {
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [content])

  const classes = classnames('collapsible', className, { collapsed: collapse, flat })

  const style = {
    height: collapse ? 0 : height
  }

  return (
    <div className={classes} style={style}>
      <div className="content" ref={content}>
        {children}
      </div>
    </div>
  )
}

export default Collapsible
