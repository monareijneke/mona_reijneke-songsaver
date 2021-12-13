import React, { useState } from "react";
import SongForm from "./components/SongForm";
import SongList from "./components/SongList";

function SongOverview() {
  const [songItems, setSongItems] = useState([
    { title: "title 1", artist: "Artist 1", Genre: "Pop", rate: "1" },
  ]);
  const [newSong] = useState("");

  function addSong(song) {
    setSongItems(
      [...songItems].concat([
        {
          id: songItems.length + 1,
          title: song.title,
          artist: song.artist,
          genre: song.genre,
          rate: song.rate,
        },
      ])
    );
  }

  return (
    <div>
      <SongForm addSong={addSong} />
      {/* <table style={{ width: "100%" }}>
        <tr className="song-header">
          <th className="song-row__item">Song</th>
          <th className="song-row__item">Artist</th>
          <th className="song-row__item">Genre</th>
          <th className="song-row__item">Rating</th>
        </tr>
      </table> */}
      <SongList
      //   songs={songs}
      />
    </div>
  );
}

export default SongOverview;
