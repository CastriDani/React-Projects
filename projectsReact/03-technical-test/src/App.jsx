import { useEffect, useState } from "react"

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?size=50&size&color=red&json=true`


export function App () {

    const [fact, setFact] = useState()


    useEffect(() => {
        fetch(CAT_ENDPOINT_RANDOM_FACT)
            .then(res => res.json())
            .then(data => setFact(data.fact))
    }, []) 
    

    return(

        <main>
            <h1>App de gaticos</h1>
            { fact && <p>{fact}</p> }
        </main>
    )
}