/* eslint-disable react/jsx-no-target-blank */
function MyProjects({ date }) {
  return (
    <section className="my-projects container">
      <h2>Moje projekty</h2>
      <div className="my-projects-cards">
        {date.map((e, index) => (
          <div key={e.imgUrl} className="project ">
            <div className="link-to-webiste">
              <img src={process.env.PUBLIC_URL + e.imgUrl} alt="website" />
              <div className="overlay"></div>
              <div className="buttons">
                <a
                  className="btn"
                  href={e.liveUrl}
                  target="_blank"
                  rel="noopener"
                >
                  Live
                </a>
                <a
                  className="btn"
                  href={e.gitHubUrl}
                  target="_blank"
                  rel="noopener"
                >
                  Github
                </a>
              </div>
            </div>
            <div className="project-information">
              <p>{e.description}</p>
              <div className="project-skill">
                {e.tech.map((e,index) => (
                  <span key={index}>{e} </span>
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
