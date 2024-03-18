import styled from 'styled-components'
import { Link } from 'react-router-dom'
import theme from '../theme'

export const Button = styled(Link)`
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  text-decoration: none;
  display: inline-block;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${theme.colors.secondary};
  }
`
