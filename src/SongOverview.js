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

  function DeleteSong(song) {
    console.log(song);
    alert("clicked the delete song button");
  }
  function EmptyList() {
    setSongItems([]);
  }

  return (
    <div>
      <SongForm handleSubmit={handleSubmit} addSong={addSong} />
      <SongList
        songs={songItems}
        EmptyList={EmptyList}
        DeleteSong={DeleteSong}
      />
    </div>
  );
}

export default SongOverview;
