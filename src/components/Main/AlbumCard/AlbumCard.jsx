import { Link } from "react-router-dom";
import "./AlbumCardStyle.css";

function AlbumCard({ img, name }) {
  return (
    <>
      <div className="album-card" style={{ backgroundImage: `url(${img})` }}>
        <Link to={`/${name}`}>
          <h2>{name}</h2>
        </Link>
      </div>
    </>
  );
}

export default AlbumCard;
