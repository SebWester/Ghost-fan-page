import { useParams } from "react-router-dom";
import { skeletaLyrics } from "../../../../public/data/skeletaLyrics";
import "./SongPageStyle.css";

function SongPage() {
  const { name, track } = useParams();

  // switch här?
  const lyric = skeletaLyrics[name][track];

  console.log(lyric);

  return (
    // FIXA: Snygg layout för text/video/tabs
    // If för intro, pre-chorus osv?
    <>
      <h1 style={{ color: "white" }}>{`${track} from ${name}`}</h1>
      <div style={{ color: "white" }}>{lyric}</div>
    </>
  );
}

export default SongPage;
