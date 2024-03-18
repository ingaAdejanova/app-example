import React from 'react'
import styled from 'styled-components'
import { usePosts } from '../../api/hooks/posts'
import theme from '../../theme'

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
`

const Post = styled.div`
  background-color: ${theme.colors.lightGray};
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`

const Title = styled.h2`
  color: ${theme.colors.black};
  margin-bottom: 10px;
`

const Body = styled.p`
  color: ${theme.colors.gray};
`

const Loading = styled.div`
  text-align: center;
  font-size: 18px;
  margin-top: 20px;
`

const Error = styled.div`
  color: ${theme.colors.red};
  font-size: 18px;
  margin-top: 20px;
`

const LoadMoreButton = styled.button`
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${theme.colors.secondary};
  }
`

const PostsPage = () => {
  const { posts, isLoading, isError, isReachingEnd, fetchMore } = usePosts()

  return (
    <Container>
      {posts.map((post) => (
        <Post key={post.id}>
          <Title>{post.title}</Title>
          <Body>{post.body}</Body>
        </Post>
      ))}
      {isLoading && <Loading>Loading...</Loading>}
      {isError && <Error>Error fetching posts</Error>}
      {!isReachingEnd && !isLoading && (
        <LoadMoreButton onClick={fetchMore}>{isLoading ? 'Loading...' : 'Load More'}</LoadMoreButton>
      )}
    </Container>
  )
}

export default PostsPage
