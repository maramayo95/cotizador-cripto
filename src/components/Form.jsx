import styled from "@emotion/styled"
import money from '../data/money'
import useFetch from "../hooks/useFetch"
import useSelect from "../hooks/useSelect"
import {useState} from 'react'
import Error from "./Error"


const InputSubmit = styled.input`
    background-color: #9497ff;
    border: none; 
    width: 100%;
    padding: 10px; 
    color: #fafafa;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    transition: background-color .3s ease ;

    &:hover {
        background-color: #7a7DFE ;
        cursor: pointer;
    }
`

const Form = ({setMoney}) => {
    const [error, setError] = useState(false)
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD'
    
    const [crypto] = useFetch(url)
   
    const [moneyOption, SelectMoney] = useSelect('Selecciona la moneda', money)
    const [cryptoOption, SelectCryptoMoney] = useSelect('Selecciona la Criptomoneda', crypto)
    
    const  handleSubmit = (e) =>  {
        e.preventDefault()
        if([moneyOption, cryptoOption].includes('')){
            setError(true)
            return 
        }
        setError(false)
        setMoney({
            moneyOption,
            cryptoOption
        })
    }

    return (
    <form onSubmit={handleSubmit}>
        {error && <Error>Todos los campos son obligatorios</Error>}
        <SelectMoney/>
        <SelectCryptoMoney/>
        <InputSubmit
         type="submit" value="Cotizar"
          />
    </form>
  ) 
}

export default Form