import React from 'react';

const GhibliPeople = props => {

    const imgBuddy = {
        height: '20%',
        width: '20%',
        borderRadius: '10px'
    }

    const cardBuddy = {
        borderRadius: '10px'
    }

    return (
        <div>
            {props.people.map((person) => ( 
            <blockquote key={`ghibli-character-${person.id}`} style={cardBuddy} class="blockquote border m-5 p-5">
                <div class='row'>
                    <img style={imgBuddy} src="https://wallpaperaccess.com/full/557936.jpg" alt="" />
                    <div class='col-8'>
                        <p class="pl-5 display-4 mb-0 mt-1">{person.name}</p>
                        <div class='pl-5 lead'>{person.age}, {person.gender}</div>
                        <footer class="ml-5 blockquote-footer">Information fetched from <a href={person.url}><cite title="Source Title">here.</cite></a></footer>
                    </div>
                </div>
            </blockquote>
            ))}
        </div> 
    )
};

export default GhibliPeople;



