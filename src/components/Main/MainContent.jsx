import AlbumCard from "./AlbumCard/AlbumCard";
import "./MainContentStyle.css";

function MainContent() {
  return (
    <>
      <div className="main-content">
        <AlbumCard img="/images/skeleta.avif" name="Skeleta" />
        <AlbumCard img="/images/impera.jpg" name="Impera" />
        <AlbumCard img="/images/prequelle.webp" name="Prequelle" />
        <AlbumCard img="/images/meliora.jpg" name="Meliora" />
        <AlbumCard img="/images/Infestissumam.webp" name="Infestissumam" />
        <AlbumCard img="/images/opus.jpg" name="Opus Eponymous" />
      </div>
    </>
  );
}

export default MainContent;
