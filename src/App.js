import { useForm } from "react-hook-form";
import './App.css';
import FruitCounter from "./FruitCounter";


function App() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const selectedFreq = watch("deliverFreq");

    function logOutput(data){
        console.log("Data uit form: ", data);
    }

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
        <form onSubmit={handleSubmit(logOutput)}>
            <label className="labelForm" htmlFor="firstName">Voornaam</label>
            <input
                type="text"
                id="firstName"
                name="firstName"
                {...register("firstName", {
                    required: {
                        value: true,
                        message: 'Dit veld mag niet leeg zijn',
                    },
                })}
            />
            {errors.firstName && <p className="errors">{errors.firstName.message}</p>}
            <label className="labelForm" htmlFor="lastName">Achternaam</label>
            <input
                type="text"
                id="lastName"
                name="lastName"
                {...register("lastName", {
                    required: {
                    value: true,
                    message: 'Dit veld mag niet leeg zijn',
                },})}
            />
            {errors.lastName && <p className="errors">{errors.lastName.message}</p>}
            <label className="labelForm" htmlFor="age">Leeftijd</label>
            <input
                type="number"
                id="age"
                name="age"
                {...register("age", {required:
                {value: true,
                    message: 'Dit veld mag niet leeg zijn'
                },
                    min: {
                    value: 18,
                    message: 'Minimale leeftijd is 18 jaar',},
                })}
                placeholder={"0"}
            />
            {errors.age && <p className="errors">{errors.age.message}</p>}
            <label className="labelForm" htmlFor="zipcode">Postcode</label>
            <input
                type="text"
                id="zipcode"
                name="zipcode"
                {...register("zipcode",
                {required:
                {value: true,
                    message: 'Dit veld mag niet leeg zijn'
                },
                    pattern: {
                    value: /[1-9][0-9]{3}[ ]?[a-z-A-Z]{2}/g,
                    message: 'Voer hier een geldige postcode in,0000AB',},
                })}
            />
            {errors.zipcode && <p className="errors">{errors.zipcode.message}</p>}
            <label className="labelForm" htmlFor="houseNumber">Huisnummer</label>
            <input
                type="text"
                id="houseNumber"
                name="houseNumber"
                {...register("houseNumber",
                    {required:
                            {value: true,
                                message: 'Dit veld mag niet leeg zijn'
                            },
                            pattern:{
                                value: /[.0-9]/g,
                                message: 'Alleen cijfers toegestaan',},
                    })}
            />
            {errors.houseNumber && <p className="errors">{errors.houseNumber.message}</p>}
            <div>
            <label className="labelForm" htmlFor="deliverFreq">Bezorgfrequentie</label>
            </div>
            <div>
            <input
                type="radio"
                id="weekly"
                name="deliverFreq"
                value="week"
                {...register("deliverFreq", {
                    required: {
                    value: true,
                    message: 'Maak een keuze',
                },})}
            />
                <label htmlFor="deliverFreq">Iedere week</label>
            </div>
            <div>
                <input
                    type="radio"
                    id="biWeekly"
                    name="deliverFreq"
                    value="omWeek"
                    {...register("deliverFreq")}
                />
                <label htmlFor="deliverFreq">Om de week</label>
            </div>
            <div>
                <input
                    type="radio"
                    id="monthly"
                    name="deliverFreq"
                    value="maand"
                    {...register("deliverFreq")}
                />
                <label htmlFor="deliverFreq">Iedere maand</label>
            </div>
            <div>
                <input
                    type="radio"
                    id="other"
                    name="deliverFreq"
                    value="anders"
                    {...register("deliverFreq")}
                />
                <label htmlFor="deliverFreq">Anders</label>
                {selectedFreq === "anders" && (
                    <input
                    type="text"
                    placeholder="Anders, namelijk"
                    {...register("deliverFreqAnders", {
                    required: {
                    value: true,
                    message: 'Dit veld mag niet leeg zijn',
                },})}
                    />
                )}
                {errors.deliverFreq && <p className="errors">{errors.deliverFreq.message}</p>}
                {errors.deliverFreqAnders && <p className="errors">{errors.deliverFreqAnders.message}</p>}
                    </div>
            <label className="labelForm" htmlFor="comment">Opmerking</label>
            <textarea
                name="comment"
                id="comment"
                cols="30"
                rows="5"
                {...register("comment")}
            >
            </textarea>
<div>
            <input
                type="checkbox"
                name="terms"
                id="terms"
                {...register("terms", {
                    required: {
                    value: true,
                    message: 'Dit veld is verplicht',
                },})}
            />
            <label htmlFor="terms">Ik ga akkoord met de voorwaarden</label>
    {errors.terms && <p className="errors">{errors.terms.message}</p>}
</div>
            <input
                className="sendButton"
                type="submit"
                value="Verzend"
            />

        </form>
    </>
  )}

export default App;
