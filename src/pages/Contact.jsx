import PageBanner from '../components/PageBanner.jsx'
import Section from '../components/Section.jsx'
import Button from '../components/Button.jsx'
import DynamicForm from '../components/DynamicForm.jsx'
import ImagePlaceholder from '../components/ImagePlaceholder.jsx'
import { CHURCH } from '../data/content.js'
import './Contact.css'

const FIELDS = [
  { name: 'name', label: 'Name', required: true },
  { name: 'contact', label: 'Email or phone', required: true },
  { name: 'subject', label: 'Subject', required: true },
  { name: 'message', label: 'Message', type: 'textarea', required: true },
  { name: 'reply', label: 'Preferred response method', type: 'select', options: ['Email', 'Phone call', 'WhatsApp'] },
]

export default function Contact() {
  return (
    <>
      <PageBanner title="Contact Us" text="Planning a visit, have a question about the Christian faith, or need prayer? Please get in touch." />
      <Section>
        <div className="contact">
          <div>
            <h2 className="contact__h">Contact details</h2>
            <dl className="contact__info">
              <dt>Church address</dt><dd>{CHURCH.address}</dd>
              <dt>Phone / WhatsApp</dt><dd>{CHURCH.phone}</dd>
              <dt>Email</dt><dd>{CHURCH.email}</dd>
              <dt>Service times</dt><dd>{CHURCH.times}</dd>
              <dt>Social media</dt><dd>{CHURCH.socials.map(([n, u]) => <a key={n} href={u}>{n}</a>)}</dd>
            </dl>
            <Button href={CHURCH.whatsapp} target="_blank" rel="noreferrer">Chat with Us</Button>
          </div>
          <div>
            <h2 className="contact__h">Send a message</h2>
            <DynamicForm fields={FIELDS} submitLabel="Send Message" success="Thank you. Your message has been received and a member of our team will respond." />
          </div>
        </div>
      </Section>
      <Section tone="mint" title="Find us">
        <ImagePlaceholder shape="wide" label="Map: embed verified church location" />
        <p className="contact__dir"><Button href={CHURCH.directions} target="_blank" rel="noreferrer" variant="ghost">Get Directions</Button></p>
      </Section>
    </>
  )
}
