import './PageBanner.css'
export default function PageBanner({ title, text }) {
  return (
    <header className="banner">
      <div className="banner__in">
        <h1 className="banner__title">{title}</h1>
        {text && <p className="banner__text">{text}</p>}
      </div>
    </header>
  )
}
