import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App'
import Comments from './routes/comments/index'
import Comment from './routes/comments/show'
import Albums from './routes/albums/index'
import Album from './routes/albums/show'
// import './index.css'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'comments',
        element: <Comments />
      },
      {
        path :'comments/:id',
        element:<Comment />
      },
      {
        path:'albums',
        element:<Albums />
      },
      {
        path:'albums/:id',
        element:<Album />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
