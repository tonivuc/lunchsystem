import LunchWishForm from "../components/lunchWishForm";
import Container from "react-bootstrap/Container";
import React from "react";

class LunchWishes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {lunchWishes: []};
  }

  onSubmitLunchWish = (lunchWish) => {
    this.setState((state, props) => ({
      lunchWishes: [...state.lunchWishes, lunchWish]
    }));
  }

  render() {
    return (
      <Container>
      <h2>Enter your lunch wish</h2>
      <LunchWishForm onSubmit={this.onSubmitLunchWish}/>
      </Container>
    );
  }
}

export default LunchWishes;