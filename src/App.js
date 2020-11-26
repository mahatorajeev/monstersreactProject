import React from "react"
import './App.css';
import "./components/card-list/card-list"
import { CardList } from "./components/card-list/card-list";
import {SearchBox} from "./components/search-box/search-box"


class App extends React.Component {
  constructor(){
    super();

    this.state = {
      monsters:[],
      searchField:""
    }
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => this.setState({monsters:users}))
  }

render(){

 const {monsters, searchField} = this.state;
 const monsterField = monsters.filter((monster)=>{
 return  monster.name.toLowerCase().includes(searchField.toLowerCase())
 })

  return(
    <div className="App">
    <h1>Monster Rolodex</h1>
    <SearchBox 
    placeholder = "search Monster" 
    handleChange = {e => {this.setState({searchField: e.target.value})
        }
      }
    />
    <CardList monsters = {monsterField}/>
    </div>
  )
}



}

export default App;
