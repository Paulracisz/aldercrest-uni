import Crest from './Crest'

const DEADLINES = [
  { date: 'Nov 1', label: 'Early action deadline' },
  { date: 'Jan 15', label: 'Regular decision deadline' },
  { date: 'Feb 1', label: 'Financial aid priority date' },
  { date: 'Mar 15', label: 'Decisions released' },
]

export default function Admissions() {
  return (
    <section id="admissions" className="admissions">
      <Crest className="admissions__watermark" />
      <div className="section__inner admissions__inner">
        <div className="admissions__copy">
          <h2>Apply to Aldercrest</h2>
          <p>
            We read every application by hand. There is no minimum test
            score to submit — about a third of last year's admitted class
            applied test-optional.
          </p>
          <div className="hero__actions">
            <a
              href="https://www.commonapp.org"
              className="btn btn--primary"
              target="_blank"
              rel="noreferrer"
            >
              Start your application
            </a>
            <a href="#" className="btn btn--ghost btn--on-dark">
              Schedule a campus visit
            </a>
          </div>
        </div>

        <dl className="admissions__timeline">
          {DEADLINES.map((d) => (
            <div className="admissions__deadline" key={d.label}>
              <dt>{d.date}</dt>
              <dd>{d.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
