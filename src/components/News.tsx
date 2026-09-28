const STORIES = [
  {
    date: 'Sept 22, 2026',
    title: 'Engineering students place first in regional robotics championship',
    excerpt:
      "A team of five seniors from the School of Engineering & Applied Science took first place at the Great Lakes Robotics Invitational, beating out eleven other schools.",
  },
  {
    date: 'Sept 10, 2026',
    title: 'New wing of Alderwood Library opens to students',
    excerpt:
      'The addition adds 200 study seats and a dedicated map and archives room, funded by a gift from the class of 1976.',
  },
  {
    date: 'Sept 2, 2026',
    title: 'Foresters athletics opens the season with Homecoming set for October',
    excerpt:
      'Fall sports begin their conference schedules this month, with Homecoming weekend confirmed for October 17–18.',
  },
]

export default function News() {
  return (
    <section id="news" className="section news">
      <div className="section__inner">
        <h2>From around campus</h2>

        <div className="news__list">
          {STORIES.map((story) => (
            <article className="news__item" key={story.title}>
              <time className="news__date">{story.date}</time>
              <h3>{story.title}</h3>
              <p>{story.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
