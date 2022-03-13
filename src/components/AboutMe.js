function AboutMe({ date }) {
  return (
    <section className="about-me container">
      <h2>About me</h2>
      <div className="about-me-info">
        <div className="img-test">
          <div className="img"></div>
        </div>
        <p>{date.description}</p>
      </div>
    </section>
  );
}

export default AboutMe;
