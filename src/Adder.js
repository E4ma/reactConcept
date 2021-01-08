import React from 'react'
import { Checkbox, Button } from 'semantic-ui-react'

const Adder = (props) => {
    let b = props.lilAdder;
    let e = props.colourSet;
    let f = props.lilColour
     
  const swapColours = () => {
    if (f === 'red') {
       e('green');
    } else if (f === 'green') {
       e('red');
    }
  };

    return (
        <div>

            <Button color={'olive'} onClick={() => b((curr) => { return curr + 1 })} >click me too!</Button>
            <p><Checkbox slider={true} toggle={false} onClick={() => swapColours()} /></p>

        </div>

    )
}

export default Adder
