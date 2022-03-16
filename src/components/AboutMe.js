function AboutMe({ date }) {
  return (
    <section className="about-me container">
      <h2>O mnie</h2>
      <div className="about-me-info">
        <div className="img-test">
          <div className="img">
            <img src={process.env.PUBLIC_URL + date.imgUrl} alt="img-about-me" />
          </div>
        </div>
        <div className="about-me-text">
          <p>{date.description}</p>
          <br />
          <p>{date.description2}</p>
          <br />
          <p>{date.description3}</p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
