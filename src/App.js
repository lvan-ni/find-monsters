import { useState, useEffect } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

const App = () => {

  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, [])

  useEffect(() => {
    setFilteredMonsters(monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    }));
  }, [monsters, searchField])

  const onSearchChange = (e) => {
    const searchFieldString = e.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  }

  return (
    <div className='App'>
      <h1 className='app-title'>Monsters Rolodex</h1>
      <SearchBox 
        className='search-box-monster'
        placeholder='search monsters' 
        onChange={onSearchChange} 
      />
      <CardList monsters={ filteredMonsters } />
    </div>
  )
}


// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: '',
//     };
//   }

   
//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response) => response.json())
//       .then((users) => 
//         this.setState(
//           () => {
//             return { monsters: users };
//           },
//         )
//       );
//   }


//   onSearchChange = (e) => {
//      const searchField = e.target.value.toLocaleLowerCase();

//      this.setState(() => {
//      return { searchField };
//      });
//   }
  
  
//   render() {
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;
//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     });

//     return (
//       <div className='App'>
//         <h1 className='app-title'>Monsters Rolodex</h1>
//         <SearchBox 
//           className='search-box-monster'
//           placeholder='search monsters' 
//           onChange={onSearchChange} 
//         />
//         <CardList monsters={ filteredMonsters } />
//       </div>
//      );
    
//   }

// }


export default App;
