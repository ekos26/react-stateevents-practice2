import React from "react";

class BeyCard extends React.Component {
  render() {
    // console.log("here", this.props.beyond)
    return (
      <div>
        <h3>{this.props.beyond.name}</h3>
        <img src={this.props.beyond.img} alt="" onClick={() => this.props.handleClick(this.props.beyond)} />
      </div>
    );
  }
};

export default BeyCard;

// {this.state.clicked ? <Favorites carters={this.props.beyond}/> : null}
