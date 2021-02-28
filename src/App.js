import React, {Component} from 'react';
import Navbar from './components/layout/Navbar'
import Users from "./components/users/Users";
import Search from "./components/users/Search";
import './App.css';

class App extends Component{
  state = {
    users: [],
    loading: false
  }
  /* async componentDidMount(){
    this.setState({loading: true})
    //const res = await fetch(`https://api.github.com/users?client_id=${REACT_APP_GITHUB_CLIENT_ID}&client_secret=${REACT_APP_GITHUB_CLIENT_SECRET}`)
    const res = await fetch('https://api.github.com/users')
    const data = await res.json()
    console.log(data)
    this.setState({users: data, loading: false})
    
   // fetch("https://api.github.com/users").then(res => res.json()).then(data => this.setState({users: data.data, loading: false}))
  } */

  searchUsers =async (text) => {
    //const res = await fetch(`https://api.github.com/users?client_id=${REACT_APP_GITHUB_CLIENT_ID}&client_secret=${REACT_APP_GITHUB_CLIENT_SECRET}`)
    const res = await fetch(`https://api.github.com/search/users?q=${text}`)
    const data = await res.json()
    console.log(data)
    this.setState({users: data.items, loading: false})
    
   // fetch("https://api.github.com/users").then(res => res.json()).then(data => this.setState({users: data.data, loading: false}))
  } 
  render (){
    return (<div className="App">
      
      <Navbar title = 'Github Finder' icon = "fab fa-github"></Navbar>
      <div className="container">
        <Search searchUsers = {this.searchUsers}/>
      <Users loading ={this.state.loading} users={this.state.users}></Users>
      </div>
     
    
  </div>);
  }
    
  
}


export default App;
