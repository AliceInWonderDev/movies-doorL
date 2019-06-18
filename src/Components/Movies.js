import React from 'react';
import {Card} from 'react-bootstrap';

function Movies({result}) {


    return (
        <div>
        <Card>
            <Card.Body>
                <h2> {result.Title}</h2>
                <p>
                { result.Year }  
                </p>
                <span> 
                    { result.Released } 
                </span>
                <p>
                {/* {result.Poster} */}
                </p>
            </Card.Body>
        </Card>
        </div>
    )
}
export default Movies;