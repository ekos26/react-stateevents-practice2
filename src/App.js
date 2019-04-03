import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BeyContainer from './BeyContainer';
import Favorites from './Favorites';

class App extends Component {

  state = {
    beyArr: []
  }

  componentDidMount() {
    console.log("App did mount");
    fetch("http://localhost:4000/beys")
    .then(res => res.json())
    .then(beys => this.setState({beyArr: beys}))
  }

  handleClick = (clickedBeyonce) => {
    let newArr = [...this.state.beyArr];
    let bey = newArr.find(beyonce => {
      return beyonce.id === clickedBeyonce.id
    })
    bey.favorite = !bey.favorite;
    this.setState({beyArr: newArr})
    console.log(bey)
  }

  favoriteCollector = () => {
    return this.state.beyArr.filter((oneBey) => oneBey.favorite === true)
  }

  render() {
    return (
      <div className="container">
        <BeyContainer beybeys={this.state.beyArr} handleClick={this.handleClick}/>
        <Favorites favoriteList={this.favoriteCollector()} handleClick={this.handleClick} />
      </div>
    );
  }
};

export default App;
