import React, { useState } from "react";
import SongForm from "./components/SongForm";
import SongList from "./components/SongList";

function SongOverview() {
  const [songItems, setSongItems] = useState([]);

  function addSong(event) {
    setSongItems(
      [...songItems].concat([
        {
          id: songItems.length + 1,
          title: event.value.title,
          artist: event.value.artist,
          genre: event.value.genre,
          rating: event.value.rating,
          done: false,
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
    // setSong("");
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
    <div>
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
