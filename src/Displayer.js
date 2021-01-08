import React from 'react'
import { Header } from 'semantic-ui-react'

const Displayer = (props) => {
    let a = props.barney;
    return (
        <Header as='h3' color='blue'>
            <p>{a}</p>
        </Header>
    )
}

export default Displayer
