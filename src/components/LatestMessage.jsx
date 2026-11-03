import Button from './Button.jsx'
import VideoPlaceholder from './VideoPlaceholder.jsx'
import './LatestMessage.css'

export default function LatestMessage() {
  return (
    <section className="latest">
      <div className="latest__in">
        <VideoPlaceholder />
        <div>
          <h2 className="latest__title">Latest message</h2>
          <dl className="latest__meta">
            <div><dt>Message title</dt><dd>[Insert title]</dd></div>
            <div><dt>Speaker</dt><dd>[Insert speaker]</dd></div>
            <div><dt>Date</dt><dd>[Insert date]</dd></div>
            <div><dt>Scripture</dt><dd>[Insert Bible passage]</dd></div>
          </dl>
          <Button to="/messages">Watch All Messages</Button>
        </div>
      </div>
    </section>
  )
}
