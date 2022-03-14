function Header({ date }) {
  return (
    <header className="header container">
      <div className="header-text">
        <h1>Cześć</h1>
        <p>
          {date.paragraph.first} <span>{date.span.first}</span>
        </p>
        <p>
          {date.paragraph.second} <span>{date.span.second}</span>
        </p>
      </div>
      <img src={date.imgUrl} alt="svg" />
    </header>
  );
}

export default Header;
