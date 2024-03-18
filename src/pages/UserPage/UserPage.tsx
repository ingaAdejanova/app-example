import React from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { useUser } from '../../api/hooks/users'
import theme from '../../theme'

const Container = styled.div`
  border: 1px solid ${theme.colors.gray};
  border-radius: 5px;
  padding: 20px;
  margin: 20px auto;
  max-width: 600px;
`

const UserTitle = styled.h1`
  color: ${theme.colors.black};
  font-size: 24px;
  margin-bottom: 10px;
`

const UserDetails = styled.div`
  margin-bottom: 20px;
`

const UserItem = styled.p`
  margin: 5px 0;
`

const UserPage = () => {
  const { id } = useParams<{ id: string }>()
  const userId = parseInt(id as any)

  const { user, isLoading, isError } = useUser(userId)

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error fetching user</div>

  return (
    <Container>
      <UserTitle>User Details</UserTitle>
      <UserDetails>
        <UserItem>
          <strong>Name:</strong> {user.name}
        </UserItem>
        <UserItem>
          <strong>Email:</strong> {user.email}
        </UserItem>
        <UserItem>
          <strong>Phone:</strong> {user.phone}
        </UserItem>
      </UserDetails>
    </Container>
  )
}

export default UserPage
