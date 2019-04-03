import React from "react";
import BeyCard from './BeyCard'

export default class Favorites extends React.Component {
  render() {
    let favArr = this.props.favoriteList.map(favBey => (
      <BeyCard key={favBey.id} beyond={favBey} handleClick={this.props.handleClick} />
    ))
    // console.log(this.props.favoriteList)
    return (
      <div className="favorites">
        <h1>Favorites</h1>
        {favArr}
      </div>
    );
  }
}
