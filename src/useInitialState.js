import { useState, useEffect } from 'react'

const useInitialState = (API) => {
    const [ content, setContent ] = useState([]) //Takes 2 values

    useEffect(() => {
      fetch(API)
        .then(response => response.json())  //Convert the response to a JSON
        .then(data => setContent(data))   //Store the response into the State variable
    }, [])

    return content
}

export default useInitialState
