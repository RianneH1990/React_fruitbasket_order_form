
import './App.css';
import FruitCounter from "./FruitCounter";
import { useState } from 'react';



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
          name={"Bananen"}
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
        <div>
        <button className={"resetButton"} onClick={() =>  window.location.reload(true)}>Reset</button>
        </div>
    </>
  )}

export default App;
