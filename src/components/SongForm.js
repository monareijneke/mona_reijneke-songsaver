import React from "react";

function SongForm(props) {
  console.log(props);
  return (
    <>
      <form>
        <input>Song</input>
        <input>Artist</input>
        <input>Genre</input>
        <input>Rating</input>
      </form>
    </>
  );
}

export default SongForm;
