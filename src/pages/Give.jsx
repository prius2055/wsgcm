import PageBanner from '../components/PageBanner.jsx'
import Section from '../components/Section.jsx'
import GiveOptions from '../components/GiveOptions.jsx'
import './Give.css'

export default function Give() {
  return (
    <>
      <PageBanner title="Giving" text="Your giving helps us proclaim the gospel, make disciples and serve our communities." />
      <Section narrow title="Partner with us" intro="Every gift supports the work of ministry and helps us reach more people with the message and love of Jesus Christ. We are grateful for your generosity. Give as you purpose in your heart, freely and cheerfully.">
        <h3 className="give-page__h">Give securely</h3>
        <GiveOptions />
        <p className="give-page__note">
          To receive an official receipt, or if you have questions about giving, contact the finance team: [Insert giving/finance contact].
        </p>
      </Section>
    </>
  )
}
