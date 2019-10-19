import React, {useState, useReducer} from 'react';
import 'styled-components';
import { initialState, reducer } from '../reducers/list';
import "./style.css";

function List() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [form, setForm] = useState({
        item: 'hello',
        completed: false
    })

    const handleSubmit = e =>{
        e.preventDefault();
        dispatch({type:"UPDATE_LIST", payload: form})
    }
    const handleChange = e =>{
        setForm({
            [e.target.name]: [e.target.value],
            completed: false
        })
    }
    const resetField = e =>{
        e.preventDefault();
        dispatch({type:"CLEAR_LIST"})
    }
    const completeItem= e =>{
        e.preventDefault();
        dispatch({type:"COMPLETED_ITEM", payload: e.target.value})
    }


    return (
        <>
            <ol>
                {state.list.map((listobj, index) => {
                    return <li key={index} className={listobj.completed ? "toggle" : ""}>{listobj.item} <button value={index} onClick={completeItem}> completed </button></li> 
                })}
            </ol>
            <form onSubmit={handleSubmit}>
                <input
                 type="text"
                 name="item"
                 onChange={handleChange} />
                <button>Submit</button>
            </form>
            <button onClick={resetField}>Clear To Do List</button>
        </>
    );
}

export default List;
