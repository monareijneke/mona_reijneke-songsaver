import "./App.css";
import SongOverview from "./SongOverview";
import Nav from "./components/Nav";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" exact element={<SongOverview />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
      {/* <header className="App-header">
        <h1>Playlist van Mona Reijneke</h1>
      </header>

      <main className="App-main">
        <SongOverview />
      </main> */}
    </div>
  );
}

export default App;
