import Button from './Button.jsx'
import ImagePlaceholder from './ImagePlaceholder.jsx'
import './MessageCard.css'

export default function MessageCard({ title, speaker, date, cat }) {
  return (
    <article className="mcard">
      <ImagePlaceholder shape="wide" label="Thumbnail" />
      <p className="mcard__cat">{cat}</p>
      <h3 className="mcard__title">{title}</h3>
      <p className="mcard__meta">{speaker}, {date}</p>
      <Button variant="ghost" href="#">Watch Now</Button>
    </article>
  )
}
