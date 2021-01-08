import React from 'react'
import { Checkbox, Button } from 'semantic-ui-react'

const Adder = (props) => {
    let b = props.lilAdder;
    let e = props.swap;
    return (
        <div>

            <Button color={'olive'} onClick={() => b((curr) => { return curr + 1 })} >click me too!</Button>
            <p><Checkbox slider={true} toggle={false} onClick={() => e()} /></p>

        </div>

    )
}

export default Adder
