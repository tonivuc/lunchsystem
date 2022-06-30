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
        const fetchedLunchWishes = parseLunchWishes(res);
        setLunchWishes([...lunchWishes, ...fetchedLunchWishes])
      })
      .catch(err => {
        console.log(err);
      })
  },[])

  const onSubmitLunchWish = (event, name, lunchItem) => {
    event.preventDefault();
    const newLunchWish = createLunchWish(name, lunchItem)
    setLunchWishes([...lunchWishes, newLunchWish]);
    axios.post('http://localhost:3000/api/lunch-wishes', {name: newLunchWish.name, lunch_item: newLunchWish.lunchItem})
      .catch(err => {
        console.log(err);
      })
  }

  return (
    <Container>
    <h2>Enter your lunch wish</h2>
    <LunchWishForm onSubmit={onSubmitLunchWish}/>
    <LunchWishList lunchWishes={lunchWishes}/>
    </Container>
  );
}

function parseLunchWishes(res) {
  return res.data.map((lunchWish) => {
    return createLunchWish(lunchWish.name, lunchWish.lunch_item)
  })
}


function createLunchWish(name, lunchItem) {
  return {name: name, lunchItem: lunchItem}
}

export default LunchWishes; 