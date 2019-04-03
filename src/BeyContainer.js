import React from "react";
import BeyCard from './BeyCard'

class BeyContainer extends React.Component {

  render() {

    let beyonces = this.props.beybeys.map(beyonceObj => (
      <BeyCard
        key={beyonceObj.id}
        beyond={beyonceObj}
        handleClick={this.props.handleClick}
        />
    ));
    return (
      <div className="index">
        <h1>Index</h1>
        {beyonces}
      </div>
    );
  }
}

export default BeyContainer;
