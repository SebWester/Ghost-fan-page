import "./AlbumCardStyle.css";

function AlbumCard({ img, name }) {
  return (
    <>
      <div className="album-card" style={{ backgroundImage: `url(${img})` }}>
        <h2>{name}</h2>
      </div>
    </>
  );
}

export default AlbumCard;
