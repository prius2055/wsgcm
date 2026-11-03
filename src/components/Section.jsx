import './Section.css'
export default function Section({ id, tone = 'paper', title, intro, narrow, children }) {
  return (
    <section id={id} className={`sec sec--${tone}`}>
      <div className={`sec__in${narrow ? ' sec__in--narrow' : ''}`}>
        {title && <h2 className="sec__title">{title}</h2>}
        {intro && <p className="sec__intro">{intro}</p>}
        {children}
      </div>
    </section>
  )
}
