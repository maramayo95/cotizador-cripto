import styled from '@emotion/styled'

const Container = styled.div`
    color: #fff;
    font-family: 'Montserrat';
    display:flex;
    align-items: center;
    gap: 1rem;
    margin-top:30px;
`
const Text = styled.p`
    font-size:18px;
`
const Price = styled.p`
    font-size: 24px;
    span{
        font-weight: 700;
    }
`
const Imagen = styled.img`
    display:block;
    width: 120px;

`

const Result = ({result}) => {
    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE} = result
  return (
    <Container>
        <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt="imagen cripto"/>
        <div>
            <Price> El precio es de : <span>{PRICE}</span></Price>
            <Text> El precio mas alto es de : <span>{HIGHDAY}</span></Text>
            <Text> El precio mas bajo es de : <span>{LOWDAY}</span></Text>
            <Text>  La variación de las últimas 24 horas : <span>{CHANGEPCT24HOUR}</span></Text>
            <Text> Última Actualización : <span>{LASTUPDATE}</span></Text>
        </div>
    </Container>
  )
}

export default Result