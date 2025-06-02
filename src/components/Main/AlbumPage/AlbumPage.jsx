import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { albums } from "../../../../public/data/discography.js";
import "./AlbumPageStyle.css";

function AlbumPage() {
  const { name } = useParams();
  const album = albums[name];
  let albumCover;

  switch (name) {
    case "Skeleta":
      albumCover = "/images/AlbumCovers/ghost-skeleta.jpg";
      break;
    case "Impera":
      albumCover = "/images/AlbumCovers/ghost-impera.jpg";
      break;
    case "Prequelle":
      albumCover = "/images/AlbumCovers/ghost-prequelle.jpg";
      break;
    case "Meliora":
      albumCover = "/images/AlbumCovers/ghost-meliora.jpg";
      break;
    case "Infestissumam":
      albumCover = "/images/AlbumCovers/ghost-infestissumam.jpg";
      break;
    case "Opus Eponymous":
      albumCover = "/images/AlbumCovers/ghost-opus.jpg";
      break;
  }

  return (
    <>
      <div className="album-container">
        <h1 className="album-title">{album.title}</h1>
        <div className="album">
          <div
            className="album-background"
            style={{ backgroundImage: `url(${albumCover})` }}
          ></div>
          {album.tracks.map((track, index) => (
            <p key={track} className="album-track">
              {index + 1}. {track}
            </p>
          ))}
        </div>
      </div>

      <Link to="/" id="go-back">
        &larr; Back
      </Link>
    </>
  );
}

export default AlbumPage;
