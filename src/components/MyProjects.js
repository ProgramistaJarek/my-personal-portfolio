function MyProjects({ date }) {
  return (
    <section className="my-projects container">
      <h2>Moje projekty</h2>
      <div className="my-projects-cards">
        {date.map((e, index) => (
          <div key={e.imgUrl} className="project ">
            <div className="link-to-webiste">
              <img src={date.imgUrl} alt="website" />
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
            <div className="project-information">
              <p>{e.description}</p>
              <div className="project-skill">
                {e.tech.map((e) => (
                  <span>{e} </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MyProjects;
