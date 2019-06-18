import React from 'react';
import {Card} from 'react-bootstrap';

function Error({mensaje}) {

    return(
        <Card>
            <Card.Body>
            {mensaje}
            </Card.Body>
        </Card>
        
    )
}
export default Error;