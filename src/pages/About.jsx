import PageBanner from '../components/PageBanner.jsx'
import Section from '../components/Section.jsx'
import ImagePlaceholder from '../components/ImagePlaceholder.jsx'
import ActionBand from '../components/ActionBand.jsx'
import './About.css'

const BLOCKS = [
  ['Our mission', 'To proclaim the gospel of Jesus Christ, make disciples, teach believers to obey His Word and demonstrate the love of God through the life and witness of the church.'],
  ['Our vision', 'To see lives transformed by the gospel and communities reached with the truth and love of Jesus Christ, raising disciples who make disciples.'],
  ['Our mandate', 'Our mandate comes from the words of Jesus in Matthew 28:18–20. We are committed to taking the gospel beyond the walls of the church, into homes, neighbourhoods, cities and nations, and helping people become faithful followers of Christ.'],
]

export default function About() {
  return (
    <>
      <PageBanner title="About Us" text="A community of believers, called by Christ to spread the gospel." />
      <Section title="Who we are">
        <div className="about__who">
          <div className="about__copy">
            <p>We are a community of believers who believe in the death and resurrection of Jesus Christ. Called by Him to spread the gospel throughout the world, we begin with our local communities and seek to reach beyond them with the message of salvation.</p>
            <p>We gather to worship God, grow through the teaching of Scripture, encourage one another in faith and serve others in the love of Christ. Our desire is to see people come to know Jesus, become established in the truth of God’s Word and live fruitful lives that bring glory to Him.</p>
          </div>
          <ImagePlaceholder shape="square" label="Photo: church family" />
        </div>
      </Section>
      <Section tone="mint">
        <div className="about__blocks">
          {BLOCKS.map(([t, d]) => (
            <article key={t}><h2>{t}</h2><p>{d}</p></article>
          ))}
        </div>
      </Section>
      <ActionBand title="Come and see" text="Join us for worship, prayer, fellowship and the teaching of God’s Word." to="/contact" label="Plan a Visit" tone="paper" />
    </>
  )
}
