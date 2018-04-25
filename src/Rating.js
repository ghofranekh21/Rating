import React, { Component } from "react";

class Stars extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0
    };
  }
  onClickStar = (i) => {
    this.setState({
      rating: i + 1
    });
  };

  render() {
    let rating = this.state.rating
    let stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<span onClick={() => this.onClickStar(i)}> ★ </span>);
      } else {
        stars.push(<span onClick={() => this.onClickStar(i)}> ☆ </span>);
      }
    }

    return <div>{stars}</div>;
  };
}
export default Stars;
