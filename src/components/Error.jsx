import styled from '@emotion/styled'

const Text = styled.div`
    background-color: #B7322C;
    color: #fafafa; 
    padding: 15px;
    font-size: 22px;
    text-transform: uppercase;
    font-family: 'Courier New', Courier, monospace;
    font-weight: 700;
    text-align: center;
`

const Error = ({children}) => {
  return (
    <Text>
        {children}
    </Text>
  )
}

export default Error