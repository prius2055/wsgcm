import PageBanner from '../components/PageBanner.jsx'
import Section from '../components/Section.jsx'
import Pillars from '../components/Pillars.jsx'
import ActionBand from '../components/ActionBand.jsx'
import { CONVICTIONS } from '../data/content.js'
import './Beliefs.css'

export default function Beliefs() {
  return (
    <>
      <PageBanner title="What We Believe" text="The biblical convictions that shape our worship and our life together." />
      <Pillars showLink={false} />
      <Section title="Our gospel convictions" intro="The following convictions express the biblical foundations on which we stand.">
        <ul className="creed">
          {CONVICTIONS.map((c) => <li key={c}>{c}</li>)}
        </ul>
        <p className="creed__note">This statement is pending review and approval by church leadership before publication.</p>
      </Section>
      <ActionBand tone="forest" title="Do you believe?" text="Take a moment to consider what the book of Romans says about sin, grace and new life in Christ." to="/salvation" label="Explore Salvation" />
    </>
  )
}
