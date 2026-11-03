import './ImagePlaceholder.css'
export default function ImagePlaceholder({ label = 'Photo placeholder', shape = 'wide' }) {
  return (
    <div className={`imgph imgph--${shape}`} role="img" aria-label={label}>
      <span className="imgph__label">{label}</span>
    </div>
  )
}
