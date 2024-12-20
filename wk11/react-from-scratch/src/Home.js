import React, {useReducer} from "react";

const countReducer = (state, action) => {
    switch (action.type) {
        case 'increase':
            return {...state, count: state.count + action.payload}
        default:
            return state
    }
}

const Home = () => {
    const [state, dispatch] = useReducer(countReducer, {count: 0})
    return (
        <div>
            <h1>Home</h1>
            <div>
                Counter is {state.count}
            </div>
            <div>
                <input type='button' value='Increase' onClick={(evt) => dispatch({type: 'increase', payload: 3})} />
            </div>
        </div>
    );
}

export default Home