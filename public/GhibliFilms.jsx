import React from 'react';

const GhibliFilms = props => {

    const imgBuddy = {
        height: '25%',
        width: '25%',
        borderRadius: '10px'
    }

    const cardBuddy = {
        borderRadius: '10px'
    }

    return (
        <div>
            {props.films.map((film) => ( 
            <blockquote key={`ghibli-film-${film.id}`} style={cardBuddy} class="blockquote border m-5 p-5">
                <div class='row'>
                    <img style={imgBuddy} src="https://upload.wikimedia.org/wikipedia/en/thumb/c/ca/Studio_Ghibli_logo.svg/1200px-Studio_Ghibli_logo.svg.png" alt="" />
                    <div class='col-8'>
                        <div class='pl-5 lead'>{film.title}</div>
                        <p class="pl-5 mb-0 mt-1">{film.description}</p>
                        <footer class="ml-5 blockquote-footer">Information fetched from <a href={film.url}><cite title="Source Title">here.</cite></a></footer>
                    </div>
                </div>
            </blockquote>
            ))}
        </div>  
    )
};

export default GhibliFilms;


