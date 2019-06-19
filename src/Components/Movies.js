import React from 'react';
import {Card} from 'react-bootstrap';

function Movies({resultArray}) {
    if(resultArray !== "undefined"){
    console.log(resultArray.length)
        if(resultArray.length >= 1){
            window.localStorage.setItem('doorList.data' , JSON.stringify(resultArray));
        }

        // if(resultArray.length > 0){
        //     
        // }
            
            
        return (
            <div>    
            {resultArray.map( (result , index) => (
                <Card className={"row"} key={index}>
                    <Card.Body >
                        <h2> {result.Title}</h2>
                        <p>
                        { result.Year }  
                        </p>
                        <span> 
                            { result.Released } 
                        </span>
                        <p>
                            <img src={result.Poster}/>
                        </p>
                    </Card.Body>
                </Card>        
            ))}
            </div>
        )
    }
}
export default Movies;