import AlbumCard from "./AlbumCard/AlbumCard";
import "./MainContentStyle.css";

function MainContent() {
  return (
    <>
      <div className="main-content">
        <AlbumCard img="/skeleta.avif" name="Skeleta" />
        <AlbumCard img="/impera.jpg" name="Impera" />
        <AlbumCard img="/prequelle.webp" name="Prequelle" />
        <AlbumCard img="/meliora.jpg" name="Meliora" />
        <AlbumCard img="Infestissumam.webp" name="Infestissumam" />
        <AlbumCard img="opus.jpg" name="Opus Eponymous" />
      </div>
    </>
  );
}

export default MainContent;
