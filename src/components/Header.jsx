import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'
import Button from './Button.jsx'
import { NAV, CHURCH } from '../data/content.js'
import './Header.css'

export default function Header() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)
  return (
    <header className="hdr">
      <div className="hdr__in">
        <Link to="/" className="hdr__brand" onClick={close} aria-label={`${CHURCH.short} home`}>
          <img src={logo} alt={CHURCH.name} width="120" height="89" />
        </Link>
        <button className="hdr__toggle" aria-expanded={open} aria-controls="main-nav" onClick={() => setOpen(!open)}>
          <span className="hdr__bars" aria-hidden="true" />
          <span className="hdr__sr">Menu</span>
        </button>
        <nav id="main-nav" className={`hdr__nav${open ? ' is-open' : ''}`} aria-label="Main">
          <ul>
            {NAV.map(([to, label]) => (
              <li key={to}><NavLink to={to} end={to === '/'} onClick={close}>{label}</NavLink></li>
            ))}
          </ul>
          <Button to="/give" onClick={close}>Give</Button>
        </nav>
      </div>
    </header>
  )
}
