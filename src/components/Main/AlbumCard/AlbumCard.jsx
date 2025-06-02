import { Link } from "react-router-dom";
import "./AlbumCardStyle.css";

function AlbumCard({ img, name }) {
  return (
    <>
      <Link to={`/${name}`} className="album-link">
        <div className="album-card" style={{ backgroundImage: `url(${img})` }}>
          <h2>{name}</h2>
        </div>
      </Link>
    </>
  );
}

export default AlbumCard;
