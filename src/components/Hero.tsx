import heroImage from "src\assets\pexels-keira-burton-6146960.jpg"

export default function Hero() {
  return (

    <section id="top" className="hero">
      <div className="hero__row">
        <div className="hero__text">
          <h1>
            A university that grew up along the river, one root at a time.
          </h1>
          <p className="hero__motto">Radix et Ramus — root and branch</p>
          <p className="hero__lede">
            Aldercrest University is a residential university of 6,400
            students in Aldercrest, Ohio. Since 1891, our five schools have
            sent teachers, engineers, nurses, and researchers out along the
            Kettering River valley and well beyond it.
          </p>
          <div className="hero__actions">
            <a href="#admissions" className="btn btn--primary">
              Apply now
            </a>
            <a href="#academics" className="btn btn--ghost">
              Explore our programs
            </a>
          </div>
        </div>

        <img
          className="hero__art"
          role="img"
          src={heroImage}
          aria-label="Illustration of a ridge line with alder trees above the university's founders hall"
        />
      </div>
    </section>
  )
}
