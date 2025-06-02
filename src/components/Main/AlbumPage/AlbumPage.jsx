import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { albums } from "../../../../public/data/discography.js";

function AlbumPage() {
  const { name } = useParams();
  const album = albums[name];
  console.log(album);

  return (
    <>
      <div className="album-info">
        <h1 style={{ color: "White" }}>{album.title}</h1>
        {album.tracks.map((track) => (
          <p key={track} style={{ color: "White" }}>
            {track}
          </p>
        ))}
      </div>
    </>
  );
}

export default AlbumPage;
