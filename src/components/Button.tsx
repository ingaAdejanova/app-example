import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { colors } from '../theme/colors'

export const Button = styled(Link)`
  background-color: ${colors.primary};
  color: ${colors.white};
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  text-decoration: none;
  display: inline-block;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${colors.secondary};
  }
`
