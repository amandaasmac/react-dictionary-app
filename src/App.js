import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <header>
        <h1>Dictionary</h1>
      </header>
      <main>
        <Dictionary default="sunset" />
      </main>

      <footer>
        <small>
          <a
            href="https://github.com/amandaasmac/react-dictionary-app"
            target="_blank"
            rel="noreferrer"
          >
            Code
          </a>{" "}
          by Amanda Machado
        </small>
      </footer>
    </div>
  );
}
