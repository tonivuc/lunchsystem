import LunchWishForm from "../components/lunchWishForm";
import Container from "react-bootstrap/Container";
import React from "react";
import LunchWishList from "../components/lunchWishList";
import { useState } from "react";

function LunchWishes() {

  const [lunchWishes, setLunchWishes] = useState([{name: "John Doe", lunchItem: "Fajita"}]);

  const onSubmitLunchWish = (event, name, lunchItem) => {
    event.preventDefault();
    const newLunchWish = createLunchItem(name, lunchItem)
    setLunchWishes([...lunchWishes, newLunchWish]);
  }

  return (
    <Container>
    <h2>Enter your lunch wish</h2>
    <LunchWishForm onSubmit={onSubmitLunchWish}/>
    <LunchWishList lunchWishes={lunchWishes}/>
    </Container>
  );
}

function createLunchItem(name, lunchItem) {
  return {name: name, lunchItem: lunchItem}
}

export default LunchWishes; 