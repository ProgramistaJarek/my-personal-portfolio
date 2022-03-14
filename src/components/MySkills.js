import {
  FaHtml5,
  FaCss3,
  FaSass,
  FaReact,
  FaGitSquare,
  FaGithubSquare,
  FaFigma,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTailwindcss, SiVisualstudiocode } from "react-icons/si";

function MySkills() {
  return (
    <section className="my-skills container">
      <h2>Moje umiejętności</h2>
      <div className="skills">
        <div className="skill-card">
          <FaHtml5 className="skill-icon" />
          <p>HTML5</p>
        </div>
        <div className="skill-card">
          <FaCss3 className="skill-icon" />
          <p>CSS3</p>
        </div>
        <div className="skill-card">
          <IoLogoJavascript className="skill-icon" />
          <p>JS</p>
        </div>
        <div className="skill-card">
          <FaSass className="skill-icon" />
          <p>Sass</p>
        </div>
        <div className="skill-card">
          <SiTailwindcss className="skill-icon" />
          <p>Tailwindcss</p>
        </div>
        <div className="skill-card">
          <FaReact className="skill-icon" />
          <p>Reactjs</p>
        </div>
        <div className="skill-card">
          <FaGitSquare className="skill-icon" />
          <p>Git</p>
        </div>
        <div className="skill-card">
          <FaGithubSquare className="skill-icon" />
          <p>Github</p>
        </div>
        <div className="skill-card">
          <SiVisualstudiocode className="skill-icon" />
          <p>VSCode</p>
        </div>
        <div className="skill-card">
          <FaFigma className="skill-icon" />
          <p>Figma</p>
        </div>
      </div>
    </section>
  );
}

export default MySkills;
