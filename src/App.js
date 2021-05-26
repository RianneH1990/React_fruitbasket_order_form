import React from 'react';
import './App.css';
import FruitCounter from "./FruitCounter";



function App() {

  return (
    <>
      <h1>Fruitmand bezorgservice</h1>
      <div>
        <FruitCounter
      name={"Aardbeien"}
      picture={"🍓"}
      />
      <FruitCounter
          name={"Banaan"}
          picture={"🍌"}
      />
      <FruitCounter
          name={"Appels"}
          picture={"🍎"}
      />
      <FruitCounter
          name={"Kiwi"}
          picture={"🥝"}
      />
      </div>
    </>
  )}

export default App;
