import React, { useState, useEffect } from "react";
import axios from "axios";
import { publicKey, hash } from "./App.jsx";
import CharacterDetail from "./CharacterDetail";
import "./CharacterListStyles.css";

// Task 2: Fetch and Display Characters

//     Create a functional component CharacterList to display a list of Marvel Comics characters.

//     Use the useEffect hook to fetch character data from the Marvel Comics API endpoint https://gateway.marvel.com/v1/public/characters?ts=1&apikey=<YOURPUBLICKEY>&hash=<YOURHASH> using Axios.

//     Display each character's name and thumbnail image in a grid format.

const CharacterList = () => {
    const [characters, setCharacters] = useState([]);
    const [selectedCharacter, setSelectedCharacter] = useState(null);

    useEffect(() => {
        axios.get(
            `https://gateway.marvel.com/v1/public/characters?ts=1&apikey=${publicKey}&hash=${hash}`
        )
        .then((response) => {
            console.log("Data: ", response.data.data.results);
            const characters = response.data.data.results;
            setCharacters(characters);
        })
        .catch((error) => {
            console.error("Error fetching data: ", error);
        });
    }, []);

    const handleCharacterClick = (character) => {
        setSelectedCharacter(character);
    };
    
    return (
        <div>
            <div className="thumbnails">
                {characters.map((character) => (
                    <div key={character.id} className="character" onClick={() => handleCharacterClick(character)}>
                        <img
                            src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                            alt={character.name}
                            className="character-thumbnail"
                        />
                        <p className="character-name">{character.name}</p>
                    </div>
                ))}
            </div>
            {selectedCharacter && <CharacterDetail character={selectedCharacter} />}
        </div>
    );
};

export default CharacterList;