import React, { useState } from "react";
import SongForm from "./components/SongForm";
import SongList from "./components/SongList";

function SongOverview() {
  const [songItems, setSongItems] = useState([]);

  function addSong(event) {
    setSongItems(
      [...songItems].concat([
        {
          id: Date.now(),
          title: event.value.title,
          artist: event.value.artist,
          genre: event.value.genre,
          rating: event.value.rating,
        },
      ])
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    const value = Object.fromEntries(data.entries());
    console.log({ value });
    addSong({ value });
  }

  function deleteSong(id) {
    console.log(id);
    const newList = songItems.filter(song => id !== song.id);
    setSongItems(newList);
  }

  function emptyList() {
    setSongItems([]);
  }

  return (
    <div className="main">
      <header className="App-header">
        <h1>Playlist van Mona Reijneke</h1>
      </header>

      <SongForm handleSubmit={handleSubmit} addSong={addSong} />
      <SongList
        songs={songItems}
        emptyList={emptyList}
        deleteSong={deleteSong}
      />
    </div>
  );
}

export default SongOverview;
