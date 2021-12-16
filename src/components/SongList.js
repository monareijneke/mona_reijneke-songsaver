function SongList(songs) {
  console.log(songs);
  const title = songs.songs.map(song => (
    <tr id={songs.songs.id}>
      <td>{song.title}</td>
      <td>{song.artist}</td>
      <td>{song.genre}</td>
      <td>{song.rating}</td>
      <td className="delsong" onclick={songs.DeleteSong}>
        delete
      </td>
    </tr>
  ));
  return (
    <div>
      <table style={{ width: "100%" }}>
        <thead>
          <tr className="header">
            <th>Song</th>
            <th>Artist</th>
            <th>Genre</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>{title}</tbody>
      </table>
      <br />
      <br />
      <button onClick={songs.EmptyList}>Clear List</button>
    </div>
  );
}

export default SongList;
