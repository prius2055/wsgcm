import PageBanner from '../components/PageBanner.jsx'
import Section from '../components/Section.jsx'
import DynamicForm from '../components/DynamicForm.jsx'
import './Prayer.css'

const FIELDS = [
  { name: 'name', label: 'Full name' },
  { name: 'contact', label: 'Email address or phone number', required: true },
  { name: 'type', label: 'What would you like support with?', type: 'select', required: true, options: ['Prayer', 'Counselling', 'Spiritual guidance', 'Other'] },
  { name: 'message', label: 'Your prayer request or message', type: 'textarea', required: true },
  { name: 'when', label: 'Preferred way and time to be contacted' },
  { name: 'consent', type: 'checkbox', required: true, label: 'I agree that the church’s authorised pastoral team may contact me about this request.' },
]

export default function Prayer() {
  return (
    <>
      <PageBanner title="Prayer & Counselling" text="You are not alone. Whatever you are facing, we invite you to share it with us." />
      <Section title="How can we pray with you?" intro="Our prayer team would be honoured to stand with you in faith and bring your request before God. Whether you need prayer, spiritual guidance, encouragement or someone to talk to, please reach out. We will treat your request with care and handle it respectfully.">
        <div className="prayer">
          <DynamicForm fields={FIELDS} submitLabel="Submit Request"
            success="Thank you for reaching out. Your request has been received. A member of our team will contact you if you have requested a response. We are praying with you." />
          <aside className="prayer__aside">
            <h3>Privacy and safeguarding</h3>
            <p>Requests are received by [Insert who can access requests] and stored [Insert how and for how long]. We cannot promise absolute confidentiality where we have legal or safeguarding obligations.</p>
            <p><strong>In an emergency, please contact your local emergency services</strong> rather than using this form.</p>
          </aside>
        </div>
      </Section>
    </>
  )
}
