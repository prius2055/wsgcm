import { useState } from 'react'
import PageBanner from '../components/PageBanner.jsx'
import Section from '../components/Section.jsx'
import VideoPlaceholder from '../components/VideoPlaceholder.jsx'
import MessageCard from '../components/MessageCard.jsx'
import ActionBand from '../components/ActionBand.jsx'
import { MESSAGES, CATEGORIES } from '../data/content.js'
import './Messages.css'

export default function Messages() {
  const [cat, setCat] = useState('All')
  const list = cat === 'All' ? MESSAGES : MESSAGES.filter((m) => m.cat === cat)
  return (
    <>
      <PageBanner title="Messages" text="Grow in your understanding of God’s Word wherever you are. Watch recent messages and share them with someone who may be encouraged." />
      <Section title="Featured message">
        <div className="msgs__feature">
          <VideoPlaceholder />
          <dl>
            <dt>Message title</dt><dd>[Insert title]</dd>
            <dt>Speaker</dt><dd>[Insert speaker]</dd>
            <dt>Date</dt><dd>[Insert date]</dd>
            <dt>Scripture</dt><dd>[Insert Bible passage]</dd>
          </dl>
        </div>
      </Section>
      <Section tone="mint" title="Recent messages">
        <div className="msgs__filters" role="group" aria-label="Filter messages">
          {CATEGORIES.map((c) => (
            <button key={c} className={`msgs__chip${c === cat ? ' is-on' : ''}`} aria-pressed={c === cat} onClick={() => setCat(c)}>{c}</button>
          ))}
        </div>
        <div className="msgs__grid">
          {list.map((m) => <MessageCard key={m.id} {...m} />)}
        </div>
        {list.length === 0 && <p>No messages in this category yet.</p>}
      </Section>
      <ActionBand tone="paper" title="Have a question about a message?" text="Contact us or send a prayer request. We would be glad to connect with you." to="/contact" label="Contact Us" secondary={['/prayer', 'Request Prayer']} />
    </>
  )
}
