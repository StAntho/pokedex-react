import logo from "./pokedex.png";
import "./App.css";
import Input from "./components/input";
import axios from "axios";

function App() {
  const list = axios
    .get("https://pokeapi.co/api/v2/pokemon?limit=15")
    .then((response) => {
      console.log(response.data.results);
    })
    .catch((error) => {
      console.log(error);
    });
  return (
    <div className="App">
      <img src={logo} alt="logo" />
      <a
        className="App-link"
        href="https://pokeapi.co/"
        target="_blank"
        rel="noopener noreferrer"
      >
        PokéAPI
      </a>
      <Input />
      <div className="list">
        {list.map((pokemon) => (
          <p>{pokemon.name}</p>
        ))}
      </div>
    </div>
  );
}

export default App;
