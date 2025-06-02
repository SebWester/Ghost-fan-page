import "./Header.css";

function Header() {
  return (
    <>
      <div className="header">
        <div className="logo-div">
          <img
            src="./ghost-logo-updated.webp"
            alt="ghost logo"
            id="top-logo"
            className="img-fluid"
          />
        </div>

        <div className="links-div">
          <a href="https://ghost-official.com/">Official Ghost website</a>
          <a href="https://www.youtube.com/channel/UCAOiVaJJlH0Oduv48NN0mMA">
            Ghost on Youtube
          </a>
          <a href="https://thebandghost.fandom.com/wiki/Main_Page">
            Ghostpedia
          </a>
        </div>
      </div>
    </>
  );
}

export default Header;
