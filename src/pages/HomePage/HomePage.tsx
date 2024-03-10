import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
`

const Title = styled.h1`
  color: #333;
  font-size: 24px;
  margin-bottom: 20px;
`

const Subtitle = styled.p`
  color: #666;
  font-size: 18px;
`

const HomePage = () => {
  return (
    <Container>
      <Title>Welcome to My Website</Title>
      <Subtitle>This is a styled component example</Subtitle>
    </Container>
  )
}

export default HomePage
