import Hero from '../components/Hero.jsx'
import Mandate from '../components/Mandate.jsx'
import Welcome from '../components/Welcome.jsx'
import Pillars from '../components/Pillars.jsx'
import LatestMessage from '../components/LatestMessage.jsx'
import ActionBand from '../components/ActionBand.jsx'
import VisitSection from '../components/VisitSection.jsx'

export default function Home() {
  return (
    <>
      <Hero />
      <Mandate />
      <Welcome />
      <Pillars />
      <LatestMessage />
      <ActionBand tone="forest" title="Do you believe?" to="/salvation" label="Learn About Salvation"
        text="God’s invitation is open to you. You can receive new life through Jesus Christ." />
      <ActionBand tone="paper" title="How can we pray with you?" to="/prayer" label="Request Prayer"
        text="You are not alone. Share your prayer request and our team will stand with you in faith." />
      <ActionBand tone="mint" title="Partner with the gospel" to="/give" label="Give"
        text="Your giving helps us proclaim the gospel, make disciples and serve our communities." />
      <VisitSection />
    </>
  )
}
