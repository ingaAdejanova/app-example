import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useUsers } from '../../api/hooks/users'
import theme from '../../theme'
import { ROUTES } from '../../routes'

const Container = styled.div`
  padding: 50px;
`

const Title = styled.h1`
  color: ${theme.colors.black};
  font-size: 36px;
  margin-bottom: 20px;
`

const UserList = styled.ul`
  list-style-type: none;
  padding: 0;
`

const UserItem = styled.li`
  background-color: ${theme.colors.lightGray};
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

const UserName = styled.h2`
  color: ${theme.colors.black};
  font-size: 24px;
  margin-bottom: 10px;
`

const UserEmail = styled.p`
  color: ${theme.colors.gray};
  font-size: 16px;
`

const UserLink = styled(Link)`
  text-decoration: none;
  color: ${theme.colors.primary};
  transition: color 0.3s ease;

  &:hover {
    color: ${theme.colors.secondary};
  }
`

const UsersPage = () => {
  const { users, isLoading, isError } = useUsers()

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error fetching users</div>

  return (
    <Container>
      <Title>Explore Users</Title>
      <UserList>
        {users.map((user) => (
          <UserItem key={user.id}>
            <UserLink to={`${ROUTES.USERS}/${user.id}`}>
              <UserName>{user.name}</UserName>
            </UserLink>
            <UserEmail>{user.email}</UserEmail>
          </UserItem>
        ))}
      </UserList>
    </Container>
  )
}

export default UsersPage
