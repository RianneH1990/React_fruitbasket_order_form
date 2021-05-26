
function ResetButton(props) {
    return (
        <button onClick={() => props.setFruitAmount(0)}>Reset</button>
    )
}

export default ResetButton;