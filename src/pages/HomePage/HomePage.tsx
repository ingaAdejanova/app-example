import React from 'react'
import styled from 'styled-components'
import { Button } from '../../components/Button'
import { colors } from '../../theme/colors'
import { ROUTES } from '../../routes'

const Container = styled.div`
  background-color: ${colors.lightGray};
  padding: 50px;
  text-align: center;
`

const Title = styled.h1`
  color: ${colors.black};
  font-size: 48px;
  margin-bottom: 30px;
`

const Subtitle = styled.p`
  color: ${colors.gray};
  font-size: 20px;
  margin-bottom: 40px;
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`

const StyledButton = styled(Button)`
  padding: 12px 24px;
  font-size: 18px;
  border-radius: 8px;
  background-color: ${colors.blue};
  color: ${colors.white};
  border: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${colors.darkBlue};
  }
`

const HomePage = () => (
  <Container>
    <Title>Welcome to Our Website</Title>
    <Subtitle>Explore our platform to discover users and their posts</Subtitle>
    <ButtonContainer>
      <StyledButton to={ROUTES.USERS}>Check Users</StyledButton>
      <StyledButton to={ROUTES.POSTS}>Check Posts</StyledButton>
    </ButtonContainer>
  </Container>
)

export default HomePage
