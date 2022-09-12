import {useState, useEffect} from 'react'

const useFetch =  (url) => {
  const [data, setData] = useState([])
  useEffect(() => {
    const apiRequest = async () => {
      const response = await fetch(url)
      const result = await response.json()
     

      const arrCripto = result.Data.map(cripto => {
        const obj = {
          id : cripto.CoinInfo.Name,
          name : cripto.CoinInfo.FullName
        }
        return obj
      })

      setData(arrCripto)
    }
    apiRequest()

  }, [url])
   
    return [data]
}

export default useFetch