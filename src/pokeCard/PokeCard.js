import React, { useState, useEffect } from "react";


export const PokeCard = () => {
    const [name, setName] = useState();
    const [defImg, setDefImg] = useState();
    const [shinyImg, setShinyImg] = useState();

    const fetchData = () => {
        fetch("https://pokeapi.co/api/v2/mewtwo")
            .then((res) => res.json())
            .then(
                (pokeName) => {
                    setName(pokeName)
                },
                (defPic) => {
                    setDefImg(defPic)
                },
                (shinyPic) => {
                    setShinyImg(shinyPic)
            }
        );
    };

    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div>
            <h1>{name.name}</h1>
            {/* <img {shinyImg.sprites.front_defaoult} /> */}
            {/* <img {defImg.sprites.front_shiny}/> */}
            <h1>Hei</h1>
            <button onClick={fetchData}>Get Pokemon</button>
        </div>
    ) 
};


// useEffect(() => {
//     fetchData();
//   }, []);
//   if (fact) {
//     return (
//       <div>
//         <AdviceBox>{fact.slip.advice}</AdviceBox>
//         <button onClick={fetchData}>get advice</button>
//       </div>
//     );
//   } else if (error && isLoaded) {
//     console.log(error);
//     return (
//       <div>
//         <p>Sorry, there has been an error</p>
//       </div>
//     );
//   } else
//     return (
//       <div>
//         <AdviceBox>The page is loading</AdviceBox>
//       </div>
//     );
// };