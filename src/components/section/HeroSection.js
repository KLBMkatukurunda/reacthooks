import React from 'react'
import styled from 'styled-components'
import { themes } from '../styles/ColorStyles'



function HeroSection (){
return(
    <Wrapper>
    <ContentWrapper>
      <TextWrapper>
            <Title>Design <br/>and code React apps</Title>
                <Description>
                Don’t skip design. Learn design and code by building real apps with
                React and Swift. Complete courses about the best tools.
                </Description>
        </TextWrapper>
        </ContentWrapper>
     </Wrapper>
)
}
export default HeroSection

const Wrapper= styled.div`
background: linear-gradient(180deg, #4316DB 0%, #9076E7 100%);
`

const ContentWrapper= styled.div`
max-width:1234px
margin: 0 auto;
padding: 200px 30px;

`
const TextWrapper = styled.div`
max-width:360;
display:grid;
gap:30px;`

const Title = styled.h1`
font-weight: bold;
font-size: 60px;
color: ${themes.dark.text1};
`
const Description = styled.p`
font-size: 17px;
line-height:130%;

`