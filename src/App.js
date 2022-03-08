import React from 'react';
import './App.css';
import FruitCounter from './components/FruitCounter/FruitCounter';
import TargetValueInput from "./components/FormInput/TargetValueInput";

function App() {
    const [strawberry, setStrawberry] = React.useState(0);
    const [apple, setApple] = React.useState(0);
    const [banana, setBanana] = React.useState(0);
    const [kiwi, setKiwi] = React.useState(0);

    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [age, setAge] = React.useState();
    const [postcode, setPostcode] = React.useState('');

    const [selectValue, setSelectValue] = React.useState('');
    const [radioValue, setRadioValue] = React.useState('');
    const [textValue, setTextValue] = React.useState('');
    const [checkedTerms, toggleCheckedTerms] = React.useState(false);

    function logFruit(e, single, multiple) {
        if (e === 1) {
            return`${e} ${single}`
        } else {
            return `${e} ${multiple}`
        }
    }

    function handleTerms(e) {
        if (e) {
            return 'Akkoord met voorwaarden: ja'
        } else {
            return 'Akkoord met voorwaarden: nee'
        }
    }

    function handleSubmit(e) {
        console.log(logFruit(strawberry, 'aardbei', 'aardbeien'));
        console.log(logFruit(apple, 'appel', 'appels'));
        console.log(logFruit(banana, 'banaan', 'bananen'));
        console.log(logFruit(kiwi, `kiwi`, `kiwi's`));
        console.log(`Gegevens: ${firstName} ${lastName}, ${age}, ${postcode}`);
        console.log(`Bezorging: ${selectValue}, ${radioValue}`);
        console.log(`Opmerkingen: ${textValue}`);
        console.log(handleTerms(checkedTerms));
        e.preventDefault();
    }

//Ik heb gekozen voor onSubmit i.p.v. onClick op de button. Ik heb daarom van de twee buttons geen component gemaakt.

    return (
        <main>

            <h1>Fruitmand bezorgservice</h1>

            <section>
                <FruitCounter
                    title="🍓 Aardbeien"
                    counter={strawberry}
                    setCounter={setStrawberry}
                />
                <FruitCounter
                    title="🍏 Appels"
                    counter={apple}
                    setCounter={setApple}
                />
                <FruitCounter
                    title="🍌 Bananen"
                    counter={banana}
                    setCounter={setBanana}
                />
                <FruitCounter
                    title="🥝 Kiwi's"
                    counter={kiwi}
                    setCounter={setKiwi}
                />
                <button
                    onClick={() => {
                        setStrawberry(0)
                        setApple(0)
                        setBanana(0)
                        setKiwi(0)
                    }}
                    className="button"
                >
                    Reset
                </button>
            </section>

            <form onSubmit={handleSubmit}>
                <fieldset className="details">
                    <legend>Gegevens</legend>
                        <TargetValueInput
                            title="Voornaam"
                            type="text"
                            id="first-name"
                            name="personal-details"
                            className="personal"
                            value={firstName}
                            setValue={setFirstName}
                        />
                        <TargetValueInput
                            title="Achternaam"
                            type="text"
                            id="last-name"
                            name="personal-details"
                            className="personal"
                            value={lastName}
                            setValue={setLastName}
                        />
                        <TargetValueInput
                            title="Leeftijd"
                            type="number"
                            id="age"
                            name="personal-details"
                            className="personal"
                            value={age}
                            setValue={setAge}
                        />
                        <TargetValueInput
                            title="Postcode"
                            type="text"
                            id="postcode"
                            name="personal-details"
                            className="personal"
                            value={postcode}
                            setValue={setPostcode}
                        />
                </fieldset>

                <fieldset className="delivery">
                    <legend>Bezorging</legend>

                        <label
                            htmlFor="frequency"
                            className="frequency"
                        >
                            Frequentie
                            <select
                                id="frequency"
                                name="frequency"
                                value={selectValue}
                                onChange={(e) => setSelectValue(e.target.value)}
                            >
                                <option value="Iedere week">Iedere week</option>
                                <option value="Om de week">Om de week</option>
                                <option value="Iedere maand">Iedere maand</option>
                            </select>
                        </label>

                        <div className="deliverytime">
                            <label htmlFor="day">
                                <input
                                    type="radio"
                                    id="day"
                                    name="delivery-time"
                                    value="'s Middags"
                                    onChange={() => setRadioValue("'s Middags")}
                                />
                                's Middags</label>

                            <label htmlFor="evening">
                            <input
                                type="radio"
                                id="evening"
                                name="delivery-time"
                                value="'s Avonds"
                                onChange={() => setRadioValue("'s Avonds")}
                            />
                            's Avonds</label>
                        </div>

                        <label htmlFor="remarks">Opmerkingen</label>
                            <textarea
                                id="remarks"
                                name="remarks"
                                className={textValue.length > 500 ? 'input-error' : 'input-normal'}
                                value={textValue}
                                onChange={(e) => setTextValue(e.target.value)}
                            >
                            </textarea>
                            {textValue.length > 500 && <p className="error-message">Je bericht is te lang!</p>}

                        <label
                            htmlFor="terms"
                            className="terms"
                        >
                            <input
                                type="checkbox"
                                id="terms"
                                name="terms"
                                checked={checkedTerms}
                                onChange={(e) => toggleCheckedTerms(!checkedTerms)}
                            />
                                Ik ga akkoord met de voorwaarden
                        </label>

                    <button
                        type="submit"
                        className="button"
                    >
                        Versturen
                    </button>
                </fieldset>
            </form>

        </main>
  );
}

export default App;
