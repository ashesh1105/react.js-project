import React from 'react';
import { ListGroup, ListGroupItem, Col } from 'react-bootstrap/';

const PokeList = ({listOfPokemon}) => {
    
    let pokemon = listOfPokemon.map((creature) => {
        return(
            <Col sm={6} md={4} key={creature.version.name}>
                <ListGroupItem className='PokeList-item'>{creature.version.name}</ListGroupItem>
            </Col>
        )
    });

    return(
        <ListGroup>
            {pokemon}
        </ListGroup>
    );
}

export default PokeList;