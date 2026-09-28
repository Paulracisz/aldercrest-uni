function IconDorm() {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true">
      <rect x="6" y="14" width="28" height="22" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M6 14 L20 4 L34 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M13 22h4v4h-4zM23 22h4v4h-4zM13 30h4v6h-4zM23 30h4v6h-4z" fill="currentColor" />
    </svg>
  )
}

function IconAthletics() {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true">
      <path
        d="M12 6h16v8c0 5-3.5 9-8 9s-8-4-8-9V6z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path d="M12 8H6v3c0 4 3 7 6 7M28 8h6v3c0 4-3 7-6 7" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M20 23v6M15 35h10l-2-6h-6z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  )
}

function IconOrgs() {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true">
      <circle cx="14" cy="13" r="5" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="27" cy="13" r="5" fill="none" stroke="currentColor" strokeWidth="2" />
      <path
        d="M5 34c0-6 4-10 9-10s9 4 9 10M18 34c0-6 4-10 9-10s9 4 9 10"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  )
}

function IconDining() {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true">
      <path d="M11 5v14M8 5v9a3 3 0 006 0V5M14 5v30M26 5c-3 0-5 4-5 9s2 7 5 7M26 5v30" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export default function CampusLife() {
  return (
    <section id="campus-life" className="section campus">
      <div className="section__inner">
        <h2>Life along the river</h2>
        <p className="section__intro">
          Most of campus sits within a ten-minute walk, bounded by the
          Kettering River on one side and the tree line of Aldercrest Woods
          on the other.
        </p>

        <div className="campus__grid">
          <div className="campus__tile campus__tile--feature">
            <IconDorm />
            <h3>Residential life</h3>
            <p>
              12 residence halls house first- and second-year students, who
              live on campus by default while they find their footing.
            </p>
          </div>

          <div className="campus__tile campus__tile--orgs">
            <IconOrgs />
            <h3>120+ student organizations</h3>
            <p>A club forms whenever nine students and an advisor ask for one.</p>
          </div>

          <div className="campus__tile campus__tile--dining">
            <IconDining />
            <h3>Three dining halls</h3>
            <p>
              The newest, The Depot, serves meals inside a restored 1920s
              rail station at the edge of campus.
            </p>
          </div>

          <div className="campus__tile campus__tile--athletics">
            <IconAthletics />
            <h3>Aldercrest Foresters</h3>
            <p>
              18 varsity teams compete in NCAA Division III, alongside 14
              club sports open to any enrolled student.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
