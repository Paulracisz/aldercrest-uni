import { useState } from 'react'
import Crest from './Crest'

const LINKS = [
  { href: '#academics', label: 'Academics' },
  { href: '#campus-life', label: 'Campus life' },
  { href: '#admissions', label: 'Admissions' },
  { href: '#news', label: 'News' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="nav">
      <div className="nav__row">
        <a href="#top" className="nav__brand">
          <Crest className="nav__crest" />
          <span>
            Aldercrest <span className="nav__brand-sub">University</span>
          </span>
        </a>

        <nav className="nav__links" aria-label="Primary">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#admissions" className="nav__cta">
          Apply now
        </a>

        <button
          className="nav__toggle"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          <span className="nav__toggle-bar" />
          <span className="nav__toggle-bar" />
          <span className="nav__toggle-bar" />
        </button>
      </div>

      {open && (
        <nav id="mobile-menu" className="nav__mobile" aria-label="Primary">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href="#admissions" className="nav__mobile-cta" onClick={() => setOpen(false)}>
            Apply now
          </a>
        </nav>
      )}
    </header>
  )
}
