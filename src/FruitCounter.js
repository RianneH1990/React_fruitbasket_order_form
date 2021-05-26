import { useState } from 'react';



function FruitCounter({ name, picture, button }) {
    const [fruitAmount, setFruitAmount] = useState(0);

    return (
    <>
        <div className={"fruitCount"}>
        {picture} {name}
        <div  className={"fruitCountButton"}>
            <button onClick={() => setFruitAmount(fruitAmount + 1)}>+</button>
        {fruitAmount}
        <button onClick={() => setFruitAmount(fruitAmount - 1)}>-</button>
    </div>
        </div>
        </>
    )
}

export default FruitCounter;