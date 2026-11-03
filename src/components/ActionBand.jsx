import Button from './Button.jsx'
import './ActionBand.css'
export default function ActionBand({ title, text, to, label, tone = 'mint', secondary }) {
  return (
    <section className={`band band--${tone}`}>
      <div className="band__in">
        <div>
          <h2 className="band__title">{title}</h2>
          <p className="band__text">{text}</p>
        </div>
        <div className="band__actions">
          <Button to={to} variant={tone === 'forest' ? 'gold' : 'primary'}>{label}</Button>
          {secondary && <Button to={secondary[0]} variant={tone === 'forest' ? 'light' : 'ghost'}>{secondary[1]}</Button>}
        </div>
      </div>
    </section>
  )
}
