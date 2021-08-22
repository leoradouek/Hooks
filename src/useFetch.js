import { useState, useEffect } from 'react'

// custom hook - making reusable hook. Can now use this to fetch different data from different endpoint
// must start with 'use'

const useFetch = (url) => {

  const [ data, setData]  = useState("")
  const [ isLoading, setIsLoading ] = useState(true)
  const [ error, setError ] = useState('')

  useEffect(() => {
    fetch(url)
    .then(response => {
      if (!response.ok) throw Error('could not fetch the data for that resource') // throw error to catch block
      return response.json()
    })
    .then((data) => {
      setData(data)
      setIsLoading(false)
      setError("") // if there was an error, but then able to fetch blogs at later point, don't want error message to appear
    })
    .catch(err => {
      setError(err.message)
      setIsLoading(false)
    })
  }, [])

  return { data, isLoading, error }
}

export default useFetch