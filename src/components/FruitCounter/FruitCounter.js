import './FruitCounter.css';
import React from "react";

function FruitCounter({title, counter, setCounter}) {

    function decrement(e) {
        counter > 0 && setCounter(counter-1);
        e.preventDefault();
    }

    function increment(e) {
        setCounter(counter+1);
        e.preventDefault();
    }
    return (
        <div className="fruit-counter">
            <h4>{title}</h4>
            <div className="counter">
                <button className="counter-button"
                        onClick={decrement}
                >
                    -
                </button>
                <p>{counter}</p>
                <button className="counter-button"
                    onClick={increment}
                >
                    +
                </button>
            </div>
        </div>
    );
}

export default FruitCounter;