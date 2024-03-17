import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const HomePage = React.lazy(() => import('../pages/HomePage/HomePage'))
const UsersPage = React.lazy(() => import('../pages/UsersPage/UsersPage'))
const UserPage = React.lazy(() => import('../pages/UserPage/UserPage'))
const PostsPage = React.lazy(() => import('../pages/PostsPage/PostsPage'))

export const ROUTES = {
  HOME: '/',
  USERS: '/users',
  USERS_ID: '/users/:id',
  POSTS: '/posts',
}

const Root = () => (
  <Router>
    <Suspense fallback={<div></div>}>
      <Routes>
        <Route path={ROUTES.HOME} element={<HomePage />} />
        <Route path={ROUTES.USERS} element={<UsersPage />} />
        <Route path={ROUTES.USERS_ID} element={<UserPage />} />
        <Route path={ROUTES.POSTS} element={<PostsPage />} />
      </Routes>
    </Suspense>
  </Router>
)

export default Root
