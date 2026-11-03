import { useState } from 'react'
import PageBanner from '../components/PageBanner.jsx'
import Section from '../components/Section.jsx'
import Button from '../components/Button.jsx'
import DynamicForm from '../components/DynamicForm.jsx'
import { ROMANS } from '../data/content.js'
import './Salvation.css'

const FIELDS = [
  { name: 'name', label: 'Name', required: true },
  { name: 'method', label: 'Preferred contact method', type: 'select', required: true, options: ['Phone call', 'WhatsApp', 'Email'] },
  { name: 'contact', label: 'Phone or email', required: true },
  { name: 'support', label: 'How would you like us to support you?', type: 'select', required: true,
    options: ['I have decided to follow Jesus', 'I have questions about salvation', 'I would like someone to contact me'] },
]

export default function Salvation() {
  const [form, setForm] = useState(false)
  return (
    <>
      <PageBanner title="Do you believe?" text="God’s invitation is open to you. You can receive new life through Jesus Christ." />
      <Section narrow title="The good news" intro="Salvation is at the heart of the gospel. Every person needs God’s grace, Jesus died for our sins and rose again, and everyone who turns to Him in faith can receive forgiveness and eternal life.">
        <p className="salv__lead">Consider these passages from the book of Romans. Are these truths reflected in your life?</p>
        <div className="salv__verses">
          {ROMANS.map(([ref, head, verse, note]) => (
            <article key={ref} className="salv__verse">
              <h3>{head}</h3>
              <p className="salv__ref">{ref} (NKJV)</p>
              <blockquote>“{verse}”</blockquote>
              <p>{note}</p>
            </article>
          ))}
        </div>
      </Section>
      <Section tone="forest" narrow title="Would you like to receive Jesus Christ?" intro="If you believe in Jesus and want to place your trust in Him, you can speak to God sincerely in prayer. These words are a guide, not a formula.">
        <div className="salv__prayer">
          <h3>A prayer of faith</h3>
          <p>Lord Jesus, I acknowledge that I have sinned and need Your forgiveness. I believe that You died for my sins and that God raised You from the dead. I turn away from my sin and put my faith in You. Please forgive me, become the Lord of my life and help me follow You. Thank You for Your grace and the gift of eternal life. Amen.</p>
        </div>
      </Section>
      <Section tone="mint" narrow title="Take your next step" intro="If you have made a decision to trust Jesus Christ, or would simply like to understand more about following Him, we would be glad to speak with you. You do not have to take this step alone.">
        <div className="salv__actions">
          <Button onClick={() => setForm(true)}>I Have Made a Decision</Button>
          <Button to="/contact" variant="ghost">Speak to Someone</Button>
        </div>
        {form && (
          <div className="salv__form">
            <DynamicForm fields={FIELDS} submitLabel="Send"
              success="Thank you for reaching out. A member of our team will contact you. We are praying with you."
              note="Your details go to the church team that responds to salvation enquiries: [Insert team/contact workflow]." />
          </div>
        )}
      </Section>
    </>
  )
}
