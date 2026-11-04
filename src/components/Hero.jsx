import Button from './Button.jsx'
import { CHURCH } from '../data/content.js'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero hero--image">
      <div className="hero__in">
        <div className="hero__copy">
          <p className="hero__name">Welcome to {CHURCH.name}</p>
          <h1 className="hero__title">
            <span>Making Disciples.</span>
            <span>Proclaiming Christ.</span>
            <span>Reaching the World.</span>
          </h1>
          <p className="hero__text">A Christ-centred community of believers, committed to sharing the good news of Jesus and helping people grow in a living relationship with God.</p>
          <div className="hero__actions">
            <Button to="/contact" variant="gold">Plan a Visit</Button>
            <Button to="/messages" variant="light">Watch Messages</Button>
          </div>
        </div>
      </div>
      <div className="hero__scroll">A community rooted in Christ <span>↓</span></div>
    </section>
  )
}
