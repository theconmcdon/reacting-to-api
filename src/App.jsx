import React, { useState, useEffect } from 'react';
import GhibliFilms from './components/GhibliFilms';
import GhibliPeople from './components/GhibliPeople';

const App = () => {

    const buttonBuddy = {
        width: '200px'
    };

    const headerBuddy = {
        height: 'auto',
        width: '150px',
        borderRadius: '10px'
    };

    const [loadedPeople, setLoadedPeople] = useState(false);
    const [loadedFilms, setLoadedFilms] = useState(false);
    const [films, setFilms] = useState([]);
    const [people, setPeople] = useState();

    useEffect(() => {
        fetch("https://ghibliapi.herokuapp.com/films")
            .then((response) => response.json())
            .then((films) => setFilms(films));
        fetch("https://ghibliapi.herokuapp.com/people")
            .then((response) => response.json())
            .then((people) => setPeople(people));
    }, []);

    if (loadedFilms === false && loadedPeople === false) {
        return (
            <div>
                <div class='row d-flex justify-content-center d-flex flex-row'>
                    <div class='pt-5'>
                        <div class='col-5'></div>
                        <div class='col-2'>
                            <img style={headerBuddy} src='https://canary.contestimg.wish.com/api/webimage/56dd9d3a64674a1aaea9707b-large.jpg?cache_buster=36a694d91ba03b118b64c92f6014466d'></img>    
                        </div>
                        <div class='col-5'></div>
                    </div>    
                </div>
                
                <div class='row text-center d-flex'>
                    <h1 class='display-1 text-center text-info col-12'>Ghibli Archive</h1>
                </div>    
                
                <div class='row d-flex flex-row pt-5'></div>
                <div class='row d-flex flex-row justify-content-center'>
                    <div class="form-row align-items-center">
                        <div class="col-sm-4 my-1">
                            <input style={buttonBuddy} class="btn btn-info" type="submit" id="inlineFormInputName" value='Film Information' onClick={() => setLoadedFilms(true)} />
                        </div>
                        <div class="col-sm-4 my-1">
                            <input style={buttonBuddy} class="btn btn-info" type="submit" id="inlineFormInputGroupUsername" value='Character Information' onClick={() => setLoadedPeople(true)} />
                        </div>
                        <div  class="col-sm-4 my-1">
                            <input style={buttonBuddy} type="submit" class="btn btn-info" onClick={() => window.close()} value='Exit Archive' />
                        </div>
                    </div>
                </div>
            </div>
        ); 
    
    } else if (loadedFilms === true) {
        return (
            <div>
                <GhibliFilms films={films} />
            </div>
        );
        
    } else if (loadedPeople === true) {
        return (
            <div>
                <GhibliPeople people={people} />
            </div>
        );
    };


};


export default App;


