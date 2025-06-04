import { Link } from "react-router-dom";
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
      <h1 style={{ color: "white" }} className="song-title">{`${track} `}</h1>
      <div className="song-container">
        <div style={{ color: "white" }} className="lyrics-container">
          {lyric.map((section, sectionIndex) => (
            <div key={sectionIndex} style={{ marginBottom: "1em" }}>
              {section.map((line, lineIndex) => (
                <p key={lineIndex}>{line}</p>
              ))}
            </div>
          ))}
        </div>

        <div className="tabs-container">
          <div>Guitar tabs</div>
          <div>Bass tabs</div>
          {/* Embedded video ? */}
        </div>
      </div>

      {/* FIXA STYLING */}
      <Link to={`/${name}`}>Back to {name}</Link>
      <Link to={`/`}>Back to start</Link>
    </>
  );
}

export default SongPage;
