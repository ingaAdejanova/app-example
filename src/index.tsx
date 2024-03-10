import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const HomePage = React.lazy(() => import('./pages/HomePage/HomePage'))
// const AboutPage = React.lazy(() => import('./pages/AboutPage'))
// const NotFoundPage = React.lazy(() => import('./pages/NotFoundPage'))

const Root = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
      </Suspense>
    </Router>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root'),
)
