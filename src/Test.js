import React, { useEffect, useState } from 'react'

const Test = () => {
  const [fact, setFact] = useState();
  const [isLoaded, setIsLoaded] = useState();
  const [error, setError] = useState();

  const fetchData = () => {
    fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setFact(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  };

  useEffect(() => {
    fetchData();
  }, []);
  if (fact) {
    return (
      <div>
        <test>{fact.slip.advice}</test>
        <button onClick={fetchData}></button>
      </div>
    );
  } else if (error && isLoaded) {
    
    return (
      <div>
        <p>Sorry, the program is not working now</p>
      </div>
    );
  } else
    return (
      <div>
        <test>We're loading be patient bro</test>
      </div>
    )
}

export default Test