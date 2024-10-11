import React, { Component } from 'react'
import styled from 'styled-components'


function Section(props) {
    return (
        <Wrap bgimg={props.backgroundimg} >
            <ItemText>
                <h1>{props.title}</h1>
                <p>{props.description}</p>
                <Separator />
            </ItemText>
            <Button>
                <ButtonGroup>
                    <LeftButton>{props.leftBtnText}</LeftButton>
                    {props.rightBtnText && <RightButton>{props.rightBtnText}</RightButton>}
                </ButtonGroup>
                <DownArrow src="/down-arrow.png" alt="Down Arrow" />
            </Button>
        </Wrap>
    )
}

export default Section


const Wrap = styled.div`
    width: 100vw;
    height: 100vh; 
    background-size: cover;
    background-position: center;
    background-repeat : no-repeat;
    background-image: ${props => `url(${props.bgimg})`};
    overflow: hidden; 
    display: flex;
    flex-direction: column;
    justify-content: space-between;  
    /* align-items: center; // horizontal */
`

const ItemText = styled.div`
    color: white !important;
    padding-top: 15vh;
    text-align: center;
    font-size: calc(25px);
`
const Separator = styled.hr`
    margin: 0 auto;
    margin-top : 2px;
    width: 20%; 
    border: 1px solid grey; 
`
const ButtonGroup = styled.div`
     display: flex;
     justify-content: center;
     gap: 10px;
     margin-bottom: 30px;   
     @media (max-width:786px) {
        flex-direction: column;
     }
`
const LeftButton = styled.div`
    background-color:#3E6AE1;
    height: 40px;
    width: 256px;
    padding: 10px;
    border-radius: 5px;
    color: white;
    cursor: pointer;
    opacity: 0.9;
`
const RightButton = styled(LeftButton)`
    opacity: 0.86;
    background-color:#FFFFFF;
    color: #1C1C1C;
`


const DownArrow = styled.img`
    height: 40px;
    margin: 0 auto;
    animation: animateDown infinite 1.5s;
`;

const Button = styled.div`
    margin: 0 auto;
`
