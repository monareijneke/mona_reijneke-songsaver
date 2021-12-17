function SongList(songs) {
  console.log(songs.songs);
  const title = songs.songs.map(song =>
    !song.done ? (
      <>
        <tr id={song.id}>
          <td>{song.title}</td>
          <td>{song.artist}</td>
          <td>{song.genre}</td>
          <td>{song.rating}</td>
          <td
            className="delsong"
            onClick={() => {
              songs.deleteSong(song.id);
            }}
          >
            delete
          </td>
        </tr>
      </>
    ) : (
      ""
    )
  );
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
      <button onClick={songs.emptyList}>Clear List</button>
    </div>
  );
}

export default SongList;
