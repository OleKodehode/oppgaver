import React, { useState, useEffect } from "react";


export const PokeInfo = () => {
    let [pokemon, setPokemon] = useState();


    useEffect(() => {
            
        fetchPokemon()
            
        }, []
    )

    async function fetchPokemon(){
        let res = await fetch("https://pokeapi.co/api/v2/pokemon/150/")
            .then((res) => res.json())

            setPokemon(res)
            console.log(JSON.stringify(res));
    }
    console.log(pokemon);

    if (pokemon)
    return (
        <div>
            <h1>{pokemon.name}</h1>
            <h4>{pokemon.id}</h4>
            <div className="img-flex">
            <img src={pokemon.sprites.front_default}></img>
            <img src={pokemon.sprites.front_shiny}></img>
            </div>
            <p>{pokemon.types[0].type.name}</p>
        </div>
    )
};

            //     .then(
                //         (name) => {
        //             setName(name.forms.name);
        //         },
        //         (dex) => {
            //             setDex(dex.id)
        //         },
        //         (type) => {
            //             setType(type.types.type)
        //         }
        // );
    

   
        // return (
            //     <div>
            //         <h1>{name}</h1>
            //         <h3>{dex}</h3>
        //         <p>{type}</p>
        //     </div>
        // )
    

