import React from 'react'
import { Header } from 'semantic-ui-react'

const Displayer = (props) => {
    let a = props.barney;
    let d = props.headColour;
    return (
        <Header as='h3' color={d}>
            <p>{a}</p>
        </Header>
    )
}

export default Displayer
