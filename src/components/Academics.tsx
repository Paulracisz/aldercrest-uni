const SCHOOLS = [
  {
    name: 'College of Arts & Sciences',
    majors: '24 majors',
    description:
      "The university's founding college. Literature, history, biology, and the physical sciences share a single building, Founders Hall, built in 1891.",
  },
  {
    name: 'School of Engineering & Applied Science',
    majors: '6 majors',
    description:
      'Civil, mechanical, and computer engineering, organized around a required year-long capstone completed with a community partner in the river valley.',
  },
  {
    name: 'School of Business',
    majors: '5 majors',
    description:
      'Finance, accounting, and management coursework, taught in part through a student-run trading lab endowed by the class of 1987.',
  },
  {
    name: 'School of Nursing & Health Sciences',
    majors: '4 majors',
    description:
      'Clinical rotations begin in the sophomore year at four partner hospitals along the Kettering River valley.',
  },
  {
    name: 'School of Education',
    majors: '3 majors',
    description:
      'One of the oldest teacher-preparation programs in Ohio. More than nine in ten graduates are placed within a year.',
  },
]

export default function Academics() {
  return (
    <section id="academics" className="section academics">
      <div className="section__inner">
        <h2>Five schools, one campus</h2>
        <p className="section__intro">
          Every undergraduate takes their first-year writing seminar in
          Founders Hall, regardless of school — a shared starting point
          before students specialize.
        </p>

        <ul className="academics__list">
          {SCHOOLS.map((school) => (
            <li className="academics__item" key={school.name}>
              <div className="academics__heading">
                <h3>{school.name}</h3>
                <span className="academics__majors">{school.majors}</span>
              </div>
              <p>{school.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
