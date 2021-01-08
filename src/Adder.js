import React from 'react'
import { Checkbox } from 'semantic-ui-react'

const Adder = (props) => {
    let b = props.lilAdder;
    let c = props.colourChange;
    let e = props.swap;
    return (
        <div>

    <button onClick={() => b((curr) => {return curr + 1})} >click me too!</button>
    <p><Checkbox toggle onClick={() => c(() => {return e})} /></p>

        </div>
        

      
    )
}

export default Adder
