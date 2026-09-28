import Crest from './Crest'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <Crest className="footer__crest" />
          <p>
            Aldercrest University
            <br />
            118 River Road, Aldercrest, OH 44601
          </p>
        </div>

        <nav className="footer__col" aria-label="Academics">
          <h4>Academics</h4>
          <a href="#academics">Arts &amp; Sciences</a>
          <a href="#academics">Engineering</a>
          <a href="#academics">Business</a>
          <a href="#academics">Nursing</a>
          <a href="#academics">Education</a>
        </nav>

        <nav className="footer__col" aria-label="Campus">
          <h4>Campus</h4>
          <a href="#campus-life">Housing</a>
          <a href="#campus-life">Athletics</a>
          <a href="#campus-life">Dining</a>
          <a href="#news">News</a>
        </nav>

        <nav className="footer__col" aria-label="Admissions">
          <h4>Admissions</h4>
          <a href="#admissions">How to apply</a>
          <a href="#admissions">Tuition &amp; aid</a>
          <a href="#admissions">Visit campus</a>
        </nav>
      </div>

      <div className="footer__base">
        <p>&copy; 2026 Aldercrest University. A fictional university built as a design sample.</p>
      </div>
    </footer>
  )
}
