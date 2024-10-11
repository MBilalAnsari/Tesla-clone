import React from 'react'
import styled from 'styled-components'
import Section from './Section'
function Homepage() {
  return (
    <Container>
      <Section
        title="Model-Y"
        description="0$ Due at Signing"
        backgroundimg="Model-Y.jpeg"
        leftBtnText="Order Now"
        rightBtnText="Demo Drive"
      />
      <Section
        title="Model 3"
        description="0$ Due at Signing"
        backgroundimg="Model-3.jpeg"
        leftBtnText="Order Now"
        rightBtnText="Experience Model 3"
      />
      <Section
        title="Model X"
        description="From $65,990"
        backgroundimg="Model-X.jpeg"
        leftBtnText="Order Now"
        rightBtnText="Demo Drive"
      />
      <Section
        title="Model S"
        description="From $68,490"
        backgroundimg="Model-S.jpeg"
        leftBtnText="Order Now"
        rightBtnText="Demo Drive"
      />
      <Section
        title="Cyber-Truck"
        description="Foundation"
        backgroundimg="cyber-Truck.jpeg"
        leftBtnText="Order Now"
        rightBtnText="Demo Drive"
      />
      <Section
        title="Solar Panels"
        description="Schedule a Virtual Consultation"
        backgroundimg="Solar-Panels.jpg"
        leftBtnText="Order Now"
        rightBtnText="Demo Drive"
      />
      <Section
        title="Solar-Roof"
        description="Produce Clean Energy From Your Roof"
        backgroundimg="Solar-Roof.jpeg"
        leftBtnText="Order Now"
        rightBtnText="Learn More" />
      <Section
        title="Powerwall"
        description=""
        backgroundimg="Powerwall.jpeg"
        leftBtnText="Order Now"
        rightBtnText="Learn More" />
      <Section
        title="Accessories"
        description=""
        backgroundimg="Powerwall.jpeg"
        leftBtnText="Order Now"
      />
    </Container>
  )
}

export default Homepage
const Container = styled.div`
z-index: 10;
    height : 100vh
 `