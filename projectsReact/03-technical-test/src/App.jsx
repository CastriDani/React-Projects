import { useEffect, useState } from "react"
import '../style.css' 

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?size=50&size&color=red&json=true`
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export function App () {
    
    const [fact, setFact] = useState()
    const [imageUrl, setImageUrl] = useState()

    useEffect(() => {
        fetch(CAT_ENDPOINT_RANDOM_FACT)
            .then(res => res.json())
            .then(data => {
                const { fact } = data 
                setFact(fact)

                const threeFirstWords = fact.split(' ',3).join(' ')
                console.log(threeFirstWords)

                fetch(`https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=false`)
                    .then(response => {
                        setImageUrl(response.url)
                    })
            })
    }, [])

    return(

        <main>
            <h1>App de gaticos</h1>
            { fact && <p>{fact}</p> }  
            { imageUrl ? (<img src={imageUrl} alt={`Image extracted using the fisrthree word for 
            ${fact}`} />): <span class="loader"></span> }      
        </main>
    )
}