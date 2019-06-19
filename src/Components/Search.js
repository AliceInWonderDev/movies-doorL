import React, {useState} from 'react';


function Search ({dataConsulta}) {

    const [search, setSearch] = useState({
        searchInp: ''
    })
    
    const handleChange = (e) => {
        setSearch({
            ...search,
            [e.target.name] : e.target.value
            
        })
        
    };
    
    const movieFinder = e => {
        e.preventDefault();
        dataConsulta(search)

    }

    
        return ( 
            
                <form 
                onSubmit={movieFinder}
                className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" name= "searchInp" id="searchInp" type="text" placeholder="Search" aria-label="Search" onChange={handleChange}/>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            
        );
    
}

export default Search;



