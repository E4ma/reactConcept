import React from 'react'
import { Header } from 'semantic-ui-react'

const Displayer = (props) => {
    let a = props.barney;
    let d = props.headColour;
    // console.log(`d is: ${d}`);
    return (
        <Header as='h3' color={d}>
            {a}
        </Header>
    )
}

export default Displayer
