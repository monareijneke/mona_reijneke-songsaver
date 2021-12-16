import "./App.css";
import SongOverview from "./SongOverview";

function App() {
  return (
    <div className="App">
      <nav>
        <a href="#home" className="active">
          Home
        </a>
        <a href="#news">About me</a>
      </nav>
      <header className="App-header">
        <h1>Playlist van Mona Reijneke</h1>
      </header>

      <main className="App-main">
        <SongOverview />
      </main>
    </div>
  );
}

export default App;
