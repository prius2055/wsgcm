import { useState } from 'react'
import Button from './Button.jsx'
import './DynamicForm.css'

export default function DynamicForm({ fields, submitLabel, success, note, onSubmit }) {
  const [sent, setSent] = useState(false)
  const submit = (e) => {
    e.preventDefault()
    onSubmit?.(Object.fromEntries(new FormData(e.target))) // connect to your form service here
    setSent(true)
  }
  if (sent) return <div className="dform__done" role="status"><p>{success}</p></div>
  return (
    <form className="dform" onSubmit={submit}>
      {fields.map((f) =>
        f.type === 'checkbox' ? (
          <label key={f.name} className="dform__check">
            <input type="checkbox" name={f.name} required={f.required} /> <span>{f.label}</span>
          </label>
        ) : (
          <label key={f.name} className="dform__field">
            <span>{f.label}{!f.required && <em> (optional)</em>}</span>
            {f.type === 'textarea' ? <textarea name={f.name} rows="5" required={f.required} />
              : f.type === 'select' ? (
                <select name={f.name} required={f.required} defaultValue="">
                  <option value="" disabled>Select an option</option>
                  {f.options.map((o) => <option key={o}>{o}</option>)}
                </select>
              ) : <input type={f.type || 'text'} name={f.name} required={f.required} />}
          </label>
        )
      )}
      {note && <p className="dform__note">{note}</p>}
      <Button type="submit">{submitLabel}</Button>
    </form>
  )
}
