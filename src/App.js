import { useState, useEffect } from "react";
import CardList from "./components/card-lists/Card-List";
import SearchBox from "./components/searchbox/SearchBox";
import "./App.css";


const App = () => {
  const [searchedMonster, setSearchedMonster] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters , setFilteredMonster] = useState(monsters);


  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => setMonsters(data));
  } , [])

  useEffect(() => {
    const newfilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchedMonster);
    });

    setFilteredMonster(newfilteredMonsters);

  },[monsters, searchedMonster])


  const onSearchChange = (e) => {
    const searchedMonsterString = e.target.value.toLowerCase();
    setSearchedMonster(searchedMonsterString);
  };

//This fetch will allow react to render again and again due to which it'll end up into infinite re-rendering.
//To avoid this we need to use a hook:useEffect 

// fetch("https://jsonplaceholder.typicode.com/users")
// .then((res) => res.json())
// .then((data) => setMonsters(data));

  return (
    <div>
      <h1 className="app-title">Monsters Rolodex</h1>

      <SearchBox onChangeHandler={onSearchChange} />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

//   Class Component

// class App extends Component {
//   constructor() {

//     super();

//     this.state = {
//       monsters: [],
//       searchedMonster: ''
//     };
//   }

// When a component is first loaded in the DOM , componentDidMount lifecycle method is used

// componentDidMount() {
//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then((res) => res.json())
//     .then((data) =>
//       this.setState(
//         () => {
//           return { monsters: data }
//         },
//       )
//     );
// }

//   onSearchChange = (e) => {
//     const searchedMonster = e.target.value.toLowerCase();
//     this.setState(() =>{
//       return { searchedMonster }
//     })
//   }

//   render() {
//     // console.log('render from app')

//     const { monsters , searchedMonster } = this.state ;
//     const { onSearchChange } = this ;

//     const filteredMonsters = monsters.filter((monster) =>{
//       return monster.name.toLowerCase().includes(searchedMonster)
//     });

//     return (
//  <div>
//   <h1 className="app-title">Monsters Rolodex</h1>

//   <SearchBox  onChangeHandler= {onSearchChange} />
//   <CardList monsters={filteredMonsters}/>
//  </div>

//     );
//   }
// }

export default App;
