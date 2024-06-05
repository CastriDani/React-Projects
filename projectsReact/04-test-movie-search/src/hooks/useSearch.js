import { useState, useEffect, useRef } from 'react'

export function useSearch() {
    const [search, updateSearch] = useState('')
    const [error, setError] = useState(null)
    const isFirstInput = useRef(true)


    useEffect(() => {
        if (isFirstInput.current) {
            isFirstInput.current = search === ''
            return
        }

        if (search === '') {
            setError('Please enter a movie name')
            return
        }

        if (search.match(/[^a-zA-Z0-9\s]/)) {
            setError('Please enter a valid movie name')
            return
        }
        
      
        if (search.length < 3) {
            setError('Your search query is too short')
            return
        }
      
        
        setError(null)
    }, [search])

    return { search, updateSearch, error }
}
