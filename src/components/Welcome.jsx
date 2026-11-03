import { Link } from 'react-router-dom'
import './Welcome.css'

const LINKS = [
  ['/about', 'Who We Are', 'Discover our story, mission and ministry.'],
  ['/what-we-believe', 'What We Believe', 'Read the biblical convictions that shape our worship and life.'],
  ['/messages', 'Messages', 'Watch teachings and revisit recent services.'],
  ['/prayer', 'Prayer & Counselling', 'Let us know how we can stand with you in prayer.'],
  ['/give', 'Give', 'Support the work of the gospel and the ministry of the church.'],
]

export default function Welcome() {
  return (
    <section className="welcome">
      <div className="welcome__in">
        <div>
          <h2 className="welcome__title">A place to grow in Christ</h2>
          <p className="welcome__text">
            Whether you are exploring the Christian faith, returning to church, or looking for a community in which to grow, you are welcome here. Our desire is to help you know Jesus, understand His Word, experience the work of the Holy Spirit and live out your faith every day.
          </p>
        </div>
        <ul className="welcome__list" aria-label="Explore the church">
          {LINKS.map(([to, t, d]) => (
            <li key={to}><Link to={to}><strong>{t}</strong><span>{d}</span></Link></li>
          ))}
        </ul>
      </div>
    </section>
  )
}
