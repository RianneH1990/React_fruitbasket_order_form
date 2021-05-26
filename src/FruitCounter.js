import { useState } from 'react';
import ResetButton from "./ResetButton";


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

        <ResetButton
        fruitAmount={fruitAmount}
        setFruitAmount={setFruitAmount}
        />
        </>
    )
}

export default FruitCounter;