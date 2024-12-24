// Task 3: Implement the Character Detail Feature

//     Create a functional component CharacterDetail to display detailed information about a selected character.

//     Implement a click event handler to fetch additional character details asynchronously when a character thumbnail is clicked.

//     Use Axios to send a GET request to the Marvel Comics API endpoint https://gateway.marvel.com/v1/public/characters/{characterId}?ts=1&apikey=<YOURPUBLICKEY&hash=YOURHASH.

//     Display the character's name, description, and list of associated comics.

import React from 'react';

const CharacterDetail = ({ character }) => {
    return (
        <div className="character-detail">
            <h2>{character.name}</h2>
            <img
                src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                alt={character.name}
                className="character-thumbnail" style={{ width: '150px' }}
            />
            <p><strong>Description:</strong> {character.description || 'No description available.'}</p>
            <strong>Comics:</strong>
            <ul>
                {character.comics.items.map((comic) => (
                    <li key={comic.resourceURI}>{comic.name}</li>
                ))}
            </ul>   
        </div>
    );
};   

export default CharacterDetail;