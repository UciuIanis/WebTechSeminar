import React, { useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { counter, university } from "./actions";

const universitySelector = (state) => state.university.data;

const First = () => {
    const dispatch = useDispatch();
    const universityList = useSelector(universitySelector, shallowEqual);

    useEffect(() => {
        dispatch(university.getUniversities())
    }, [])
    return (
        <div>
            <h1>First</h1>
            <input type="button" value="trigger" onClick={() => dispatch(counter.increaseCounter(5))}/>
            {
                universityList.map(e => <div key={e.id}>{e.universityName}</div>)
            }
        </div>
    );
}

export default First