function MyProjects({ date }) {
  return (
    <section className="my-projects container">
      <h2>My Projects</h2>
      <div className="my-projects-cards">
        {date.map((e, index) => (
          <div key={index} className="project">
            <div className="link-to-webiste">
              <img src={e.imgUrl} alt="website" />
              <div className="overlay"></div>
              <div className="buttons">
                <a
                  className="btn"
                  href={e.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Live
                </a>
                <a
                  className="btn"
                  href={e.gitHubUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
              </div>
            </div>
            <p>{e.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MyProjects;

// eslint-disable-next-line no-lone-blocks
{
  /* <button className="btn" type="button">
                <a href={e.liveUrl} target="_blank" rel="noreferrer">
                  Live
                </a>
              </button> */
}
