import './VideoPlaceholder.css'
// Replace the inner <div> with an <iframe> from YouTube/Vimeo, e.g.
// <iframe src="https://www.youtube.com/embed/VIDEO_ID" title="Message" allowFullScreen />
export default function VideoPlaceholder({ label = '[Embed latest sermon/video player here]' }) {
  return (
    <div className="video" role="img" aria-label={label}>
      <div className="video__play" aria-hidden="true" />
      <span className="video__label">{label}</span>
    </div>
  )
}
