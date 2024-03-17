import React from 'react'
import styled from 'styled-components'
import { usePosts } from '../../api/hooks/posts'
import { colors } from '../../theme/colors'

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
`

const Post = styled.div`
  background-color: ${colors.lightGray};
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`

const Title = styled.h2`
  color: ${colors.black};
  margin-bottom: 10px;
`

const Body = styled.p`
  color: ${colors.gray};
`

const Loading = styled.div`
  text-align: center;
  font-size: 18px;
  margin-top: 20px;
`

const Error = styled.div`
  color: ${colors.red};
  font-size: 18px;
  margin-top: 20px;
`

const LoadMoreButton = styled.button`
  background-color: ${colors.primary};
  color: ${colors.white};
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${colors.secondary};
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
