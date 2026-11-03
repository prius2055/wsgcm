import { useState } from 'react'
import Button from './Button.jsx'
import './GiveOptions.css'

export default function GiveOptions() {
  const [show, setShow] = useState(false)
  return (
    <div className="give">
      <div className="give__buttons">
        <Button href="#">Give Online</Button>
        <Button variant="ghost" aria-expanded={show} aria-controls="bank" onClick={() => setShow(!show)}>
          {show ? 'Hide Bank Details' : 'Bank Transfer Details'}
        </Button>
        <Button variant="ghost" href="#">International Giving</Button>
      </div>
      <p className="give__hint">Give Online will open the church’s verified payment checkout page: [Connect approved payment gateway].</p>
      {show && (
        <dl id="bank" className="give__bank">
          <dt>Bank Name</dt><dd>[Bank Name]</dd>
          <dt>Account Name</dt><dd>[Official Church Account Name]</dd>
          <dt>Account Number</dt><dd>[Verified Account Number]</dd>
          <dt>Bank / Branch</dt><dd>[If applicable]</dd>
        </dl>
      )}
    </div>
  )
}
