import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false)
  return (
    <Container >
      <a >
        <img src="logo.png" alt="" />
      </a>
      <Menu>
        <a href="">Vehicle</a>
        <a href="">Energy</a>
        <a href="">Charging</a>
        <a href="">Discover</a>
        <a href="">Shop</a>
      </Menu>
      <RightMenu>
        <a href="">Account</a>
        <CostomMenu onClick={()=> setBurgerStatus(true)} />
      </RightMenu>
      <BurgerNav show={burgerStatus} > 
        <CloseWrapper>
          <CustomCloseBtn onClick={() => setBurgerStatus(false)} />
        </CloseWrapper>
        <li><a href="">Model-Y</a></li>
        <li><a href="">Model 3</a></li>
        <li><a href="">Model X</a></li>
        <li><a href="">Model S</a></li>
        <li><a href="">Cyber-Truck</a></li>
        <li><a href="">Solar Panels</a></li>
        <li><a href="">Solar-Roof</a></li>
        <li><a href="">Powerwall</a></li>
        <li><a href="">Accessories</a></li>
      </BurgerNav>
    </Container>
  )
}

export default Header

const Container = styled.div`
  position:fixed;
  min-height: 40px;
  /* position: fixed; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`
const Menu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  } @media (max-width: 786px) {
    display: none;
  }
`
const RightMenu = styled.div`
    display: flex;
    align-items: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    flex-wrap: nowrap;
  }
 
`
const CostomMenu = styled(MenuIcon)`
 color: aliceblue ;
 cursor: pointer;
 margin-left: 10px;
`
const BurgerNav = styled.div`
 position: fixed;
 top: 0;
 bottom: 0;
 right:0;
 background: rgb(2,0,36);
 background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,119,121,1) 100%, rgba(0,212,255,1) 100%);
 width: 300px;
 z-index: 16;
 list-style: none;
 padding: 20px;
 display: flex;
 flex-direction:column;
 justify-content: flex-start;
 text-align: start;
transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
transition: 0.3s ease-in;
 li{
  padding: 15px 0;
  border-bottom: 1px solid rgba(0,0,0,2);
  border-color: aliceblue;
  a{
   font-weight: 600;
   color: white;
  }
 }

`
const CustomCloseBtn = styled(CloseIcon)`
 cursor: pointer;

`
const CloseWrapper = styled.div`
 color: aliceblue;
display: flex;
justify-content: flex-end;

`