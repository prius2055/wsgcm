import Button from './Button.jsx'
import ImagePlaceholder from './ImagePlaceholder.jsx'
import { CHURCH } from '../data/content.js'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__in">
        <div className="hero__copy">
          <p className="hero__name">{CHURCH.name}</p>
          <h1 className="hero__title">
            <span>Making Disciples.</span>
            <span>Proclaiming Christ.</span>
            <span>Reaching the World.</span>
          </h1>
          <p className="hero__text">
            Jesus Christ has called us to make disciples of all nations. We are a community of believers committed to the death and resurrection of Jesus Christ, sharing the good news of salvation and helping people grow in a living relationship with God.
          </p>
          <div className="hero__actions">
            <Button to="/contact">Plan a Visit</Button>
            <Button to="/messages" variant="ghost">Watch Messages</Button>
            <Button to="/prayer" variant="ghost">Request Prayer</Button>
          </div>
        </div>
        <div className="hero__media">
          <ImagePlaceholder shape="arch" label="Photo: congregation at worship" />
        </div>
      </div>
    </section>
  )
}
