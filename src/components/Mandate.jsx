import './Mandate.css'
export default function Mandate() {
  return (
    <section className="mandate" aria-labelledby="mandate-h">
      <div className="mandate__in">
        <h2 id="mandate-h" className="mandate__label">Our mandate</h2>
        <figure>
          <blockquote className="mandate__quote">
            “All authority has been given to Me in heaven and on earth. Go therefore and make disciples of all the nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, teaching them to observe all things that I have commanded you; and lo, I am with you always, even to the end of the age. Amen.”
          </blockquote>
          <figcaption className="mandate__cite">Matthew 28:18–20 (NKJV)</figcaption>
        </figure>
        <p className="mandate__text">
          This is more than a statement of purpose; it is the commission that guides our life and ministry. We seek to share the gospel faithfully, nurture believers through the teaching of God’s Word, and serve our communities with the love of Christ.
        </p>
      </div>
    </section>
  )
}
