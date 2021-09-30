import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary-US-English</header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="App-footer">
          <small>
            This project was coded by{" "}
            <a
              href="https://boring-heyrovsky-f3b4e2.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Michaela Šimková
            </a>{" "}
            and it is{" "}
            <a
              href="https://github.com/Michaela298/dictionary-project"
              target="_blank"
              rel="noreferrer"
            >
              open-sourced on Github
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
