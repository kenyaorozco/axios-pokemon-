import './App.css';
import axios from 'axios';
import {useState} from 'react'


function App() {

  const [pokemon,setPokemon] = useState([])

  const axiosPokemon = ()=> {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
    .then(result =>{
      console.log(result)
      // using axios made it another data entry on its own 
      // have to use the LOG to see where the info is stored in 
      setPokemon(result.data.results)
    })
    .catch(bug => console.log(bug));


  }
  return (
    <div className="App">
      <h2>Lets get some Pokemon</h2>
    
      <button onClick={axiosPokemon}>Fetch Pokemon</button>
      {
        pokemon.map((title,id) => {
          return <ul  key={id}>
                  <li >{title.name}</li>
                  </ul>
        })
      }
    </div>
  );
}

export default App;
