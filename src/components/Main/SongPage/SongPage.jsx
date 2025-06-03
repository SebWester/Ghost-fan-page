import { useParams } from "react-router-dom";
import { lyrics } from "../../../../public/data/lyrics";
import "./SongPageStyle.css";

function SongPage() {
  const { name, track } = useParams();
  const lyric = lyrics[name][track];

  console.log(lyric);

  return (
    // FIXA: Snygg layout för text/video/tabs
    <>
      <h1 style={{ color: "white" }}>{`${track} from ${name}`}</h1>
    </>
  );
}

export default SongPage;
