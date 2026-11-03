import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import { NAV, CHURCH } from '../data/content.js'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="ftr">
      <div className="ftr__in">
        <div className="ftr__brand">
          <span className="ftr__logo"><img src={logo} alt={CHURCH.name} width="110" height="81" /></span>
          <p>{CHURCH.tagline}</p>
        </div>
        <nav aria-label="Footer">
          <h2 className="ftr__h">Quick links</h2>
          <ul>{NAV.filter(([to]) => to !== '/').map(([to, l]) => <li key={to}><Link to={to}>{l}</Link></li>)}</ul>
        </nav>
        <div>
          <h2 className="ftr__h">Contact</h2>
          <ul>
            <li>{CHURCH.phone}</li><li>{CHURCH.email}</li><li>{CHURCH.address}</li>
          </ul>
          <h2 className="ftr__h ftr__h--gap">Follow us</h2>
          <ul className="ftr__social">{CHURCH.socials.map(([n, u]) => <li key={n}><a href={u}>{n}</a></li>)}</ul>
        </div>
      </div>
      <div className="ftr__base">
        <p>© {new Date().getFullYear()} {CHURCH.name}. All rights reserved.</p>
        <p><a href="#">Privacy Notice</a> <a href="#">Safeguarding / Child Protection Policy</a></p>
      </div>
    </footer>
  )
}
