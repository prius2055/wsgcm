import Button from './Button.jsx'
import ImagePlaceholder from './ImagePlaceholder.jsx'
import { CHURCH } from '../data/content.js'
import './VisitSection.css'

export default function VisitSection() {
  return (
    <section className="visit">
      <div className="visit__in">
        <div>
          <h2 className="visit__title">Visit us</h2>
          <p className="visit__text">We would love to welcome you to a service. Join us for worship, prayer, fellowship and the teaching of God’s Word.</p>
          <dl className="visit__info">
            <dt>Service times</dt><dd>{CHURCH.times}</dd>
            <dt>Venue</dt><dd>{CHURCH.address}</dd>
          </dl>
          <div className="visit__actions">
            <Button href={CHURCH.directions} target="_blank" rel="noreferrer">Get Directions</Button>
            <Button to="/contact" variant="ghost">Plan a Visit</Button>
          </div>
        </div>
        <ImagePlaceholder shape="wide" label="Map: embed verified church location" />
      </div>
    </section>
  )
}
