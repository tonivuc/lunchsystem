import LunchWishForm from "../components/lunchWishForm";
import Container from "react-bootstrap/Container";
import React, { useEffect } from "react";
import LunchWishList from "../components/lunchWishList";
import { useState } from "react";
import axios from 'axios';

function LunchWishes() {

  const [lunchWishes, setLunchWishes] = useState([{name: "John Doe", lunchItem: "Fajita"}]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/lunch-wishes')
      .then(res => {
        const fetchedLunchWishes = res.data.map((lunchWish) => {
          return createLunchWish(lunchWish.name, lunchWish.lunch_wish)
        })
        setLunchWishes([...lunchWishes, ...fetchedLunchWishes])
      })
      .catch(err => {
        console.log(err);
      })
  },[])

  const onSubmitLunchWish = (event, name, lunchItem) => {
    event.preventDefault();
    const newLunchWish = createLunchWish(name, lunchItem)
    console.log(newLunchWish)
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

function createLunchWish(name, lunchItem) {
  return {name: name, lunchItem: lunchItem}
}

export default LunchWishes; 