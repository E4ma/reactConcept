import React from 'react'

const Adder = (props) => {
    let b = props.lilAdder;
    return (
        <button onClick={() => b((curr) => {return curr + 1})} >click me too!</button>
    )
}

export default Adder
