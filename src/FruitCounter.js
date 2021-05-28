import { useState } from 'react';

function FruitCounter(props) {

    return (
    <>
        <div className={"fruitCount"}>
        {props.picture} {props.name}
        <div  className={"fruitCountButton"}>
            <button onClick={() => props.set(props.get + 1)}>+</button>
        {props.get}
        <button onClick={() => props.set(props.get - 1)}>-</button>
    </div>
        </div>
        </>
    )}

export default FruitCounter;