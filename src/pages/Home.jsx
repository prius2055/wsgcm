import Hero from '../components/Hero.jsx'
import Mandate from '../components/Mandate.jsx'
import Welcome from '../components/Welcome.jsx'
import Pillars from '../components/Pillars.jsx'
import LatestMessage from '../components/LatestMessage.jsx'
import ActionBand from '../components/ActionBand.jsx'
import VisitSection from '../components/VisitSection.jsx'
import Button from '../components/Button.jsx'
import './Home.css'

const salvationVerses = [
  ['Romans 3:23', 'For all have sinned and fall short of the glory of God.'],
  ['Romans 6:23', 'For the wages of sin is death, but the gift of God is eternal life in Christ Jesus our Lord.'],
  ['Romans 5:8', 'But God demonstrates His own love toward us, in that while we were still sinners, Christ died for us.'],
  ['Romans 10:9', 'If you confess with your mouth the Lord Jesus and believe in your heart that God has raised Him from the dead, you will be saved.'],
]

function SalvationSection() {
  return (
    <section className="home-salvation" id="salvation" aria-labelledby="salvation-title">
      <div className="home-salvation__image" role="img" aria-label="A cross at sunrise, representing the hope of the resurrection" />
      <div className="home-salvation__content">
        <p className="eyebrow">The good news</p>
        <h2 id="salvation-title">Have you received the gift of new life?</h2>
        <p className="home-salvation__intro">Salvation is God’s gift of grace through faith in Jesus Christ. He died for our sins and rose again so that we can be forgiven, reconciled to God and live in the hope of eternal life.</p>
        <div className="home-salvation__verses">
          {salvationVerses.map(([reference, verse]) => <article key={reference}><h3>{reference}</h3><p>“{verse}” <span>(NKJV)</span></p></article>)}
        </div>
        <div className="home-salvation__response">
          <h3>Would you like to put your trust in Jesus?</h3>
          <p>If you have made a decision to follow Christ, or would like to speak with someone about salvation, we would be glad to walk alongside you.</p>
          <Button to="/contact">I’ve made a decision</Button>
          <Button to="/contact" variant="ghost">Speak with someone</Button>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <Mandate />
      <Welcome />
      <Pillars />
      <LatestMessage />
      <SalvationSection />
      <ActionBand tone="paper" title="How can we pray with you?" to="/prayer" label="Request Prayer"
        text="You are not alone. Share your prayer request and our team will stand with you in faith." />
      <ActionBand tone="mint" title="Partner with the gospel" to="/give" label="Give"
        text="Your giving helps us proclaim the gospel, make disciples and serve our communities." />
      <VisitSection />
    </>
  )
}
