const FACTS = [
  { value: '1891', label: 'Founded' },
  { value: '6,400', label: 'Students enrolled' },
  { value: '5', label: 'Schools' },
  { value: '12:1', label: 'Student–faculty ratio' },
  { value: '62%', label: 'Admit rate' },
]

export default function FactsBar() {
  return (
    <section className="facts" aria-label="Aldercrest University at a glance">
      <div className="facts__row">
        {FACTS.map((fact) => (
          <div className="facts__item" key={fact.label}>
            <span className="facts__value">{fact.value}</span>
            <span className="facts__label">{fact.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
