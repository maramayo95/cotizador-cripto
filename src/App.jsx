import {useState,useEffect} from 'react'
import styled from '@emotion/styled'
import Crypto from '../public/img/images.png'
import Form from './components/Form'
import Result from './components/Result'
import Spinner from './components/Spinner'


const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 992px){
    display: grid;
    grid-template-columns: repeat(2,1fr);
    column-gap: 2rem ;
  }
`

const Image = styled.img `
  max-width: 400px; 
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;

`

const  Heading = styled.h1`
  font-family: Montserrat;  
  font-size: 35px;
  color: #fafafa;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;

  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color : #fafafa ;
    display: block;
    margin: 10px auto 0 auto;
  }
`




function App() {
  const [money, setMoney] = useState({})
  const [result, setResult] = useState({})
  const [loading, setLoading] = useState(false)

  useEffect(()=> {
    if(Object.keys(money).length > 0){
      const quoteCurrency = async () => { 
        setLoading(true)
        setResult({})
        const {moneyOption, cryptoOption} = money
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptoOption}&tsyms=${moneyOption}`
        const response = await fetch(url)
        const data = await response.json()
        setResult(data.DISPLAY[cryptoOption][moneyOption])
        setLoading(false)
      }
      quoteCurrency()
    }
  }, [money])
  
  return (
    <Container> 
        <Image src={Crypto} alt="Imagen criptomonedas"/>

        <div>
          <Heading> 
            Cotiza Criptomonedas Al Instante
          </Heading>
          <Form setMoney={setMoney}/>
          {loading && <Spinner/>}
          {result.PRICE && <Result result={result}/>}
        </div>
    </Container>
    
  )
}
 
export default App
