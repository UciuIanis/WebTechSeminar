import React from "react";
import { shallowEqual, useSelector } from "react-redux";

const counterSelector = (state) => state.counter.value;

const Second = () => {
    const currentCounter = useSelector(counterSelector, shallowEqual);

    return (
        <div>
            <h1>Second</h1>
            <div>
                Th counter is {currentCounter}
            </div>
        </div>
    );
}

export default Second