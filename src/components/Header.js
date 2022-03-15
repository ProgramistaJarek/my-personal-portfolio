import "animate.css";

function Header({ date }) {
  return (
    <header className="header container">
      <div className="header-flex animate__animated animate__fadeIn animate__delay-1s flex">
        <div className="header-text">
          <h1 className="flex">Cześć </h1>
          <p>
            {date.paragraph.first} <span>{date.span.first}</span>
          </p>
          <p>
            {date.paragraph.second} <span>{date.span.second}</span>
          </p>
        </div>
        <img src={date.imgUrl} alt="svg" />
      </div>
    </header>
  );
}

export default Header;
