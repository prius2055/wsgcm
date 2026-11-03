import Button from './Button.jsx'
import { PILLARS } from '../data/content.js'
import './Pillars.css'

export default function Pillars({ showLink = true }) {
  return (
    <section className="pillars">
      <div className="pillars__in">
        <h2 className="pillars__title">How we worship</h2>
        <div className="pillars__grid">
          {PILLARS.map(([t, d]) => (
            <article key={t} className="pillars__item">
              <h3>{t}</h3>
              <p>{d}</p>
            </article>
          ))}
        </div>
        {showLink && <Button to="/what-we-believe" variant="ghost">Read what we believe</Button>}
      </div>
    </section>
  )
}
