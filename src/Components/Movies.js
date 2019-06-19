import React from 'react';
import {Card} from 'react-bootstrap';

function Movies({resultArray}) {
    console.log(resultArray)

    return (
        <div>    
        {resultArray.map( (result , index) => (
            <Card className={"row"} key={index}>
                <Card.Body >
                    <h2> {result.data.Title}</h2>
                    <p>
                    { result.data.Year }  
                    </p>
                    <span> 
                        { result.data.Released } 
                    </span>
                </Card.Body>
            </Card>        
        ))}
        </div>
    )
}
export default Movies;