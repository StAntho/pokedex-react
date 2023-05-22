import axios from "axios";

export default function Input() {
  axios
    .get("https://pokeapi.co/api/v2/pokemon?limit=151")
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
  return (
    <div>
      <input type="text" placeholder="Search pokemon(s)..." />
    </div>
  );
}
