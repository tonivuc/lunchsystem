import LunchWishForm from "../components/lunchWishForm";
import Container from "react-bootstrap/Container";
import React from "react";
import LunchWishList from "../components/lunchWishList";

class LunchWishes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lunchWishes: [{name: "John Doe", lunchItem: "Fajita"}]
    };
  }

  onSubmitLunchWish = (event, name, lunchItem) => {
    event.preventDefault();
    const newLunchWish = createLunchItem(name, lunchItem)
    this.setState((state, props) => ({
      lunchWishes: [...state.lunchWishes, newLunchWish]
    }));
  }

  render() {
    return (
      <Container>
      <h2>Enter your lunch wish</h2>
      <LunchWishForm onSubmit={this.onSubmitLunchWish}/>
      <LunchWishList lunchWishes={this.state.lunchWishes}/>
      </Container>
    );
  }
}

function createLunchItem(name, lunchItem) {
  return {name: name, lunchItem: lunchItem}
}

export default LunchWishes; 