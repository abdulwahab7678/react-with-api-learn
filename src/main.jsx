import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App'
import Posts from './routes/posts/posts'
import Post from './routes/posts/single-post'
import PostComments from './routes/posts/post-comments'
import Comments from './routes/comments/index'
import Comment from './routes/comments/show'
import Albums from './routes/albums/index'
import Users from './routes/users/index'
import User from './routes/users/show'
import Photos from './routes/photos/index'
import Photo from './routes/photos/show'
import Todos from './routes/todos/index'

// import './index.css'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'posts',
        element: <Posts />
      },
      {
        path :'posts/:id',
        element:<Post />
      },
      {
        path :'posts/:id/comments',
        element:<PostComments />
      },
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
        path:'users',
        element:<Users />
      },
      {
        path:'users/:id',
        element:<User />
      },
      {
        path:'todos',
        element:<Todos />
      },
      {
        path:'photos',
        element:<Photos />
      },
      {
        path:'photos/:id',
        element:<Photo />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
