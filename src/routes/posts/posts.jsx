import { useState, useEffect } from 'react'
import { API_URL } from '../../config/api'
import { Link } from 'react-router-dom'

export default function PostIndex() {
  const [posts, setPosts] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    const posts = fetch(`${API_URL}/posts`)
    .then((res) => {
      if ( res.ok ) {
        return res.json()
      }
      throw new Error("There is an error in API")
    })
    .then(data => setTimeout(() => setPosts([...data]), 3000))
    .catch(error => setError(error.message))
  }, [])
  if ( error ) {
    return (
      <div>{error}</div>
    )
  }

  if ( !posts.length ) {
    return (
      <div><h4>Loading Posts...</h4></div>
    )
  }

  return (
    <div className="posts">
      {posts.map(post => (
        <div className={`post my-4 ${post.id}`}>
          <p>id : {post.id}</p>
          <h3>title : {post.title}</h3>
          <p>body : {post.body}</p>
          <Link className="btn btn-dark" to={`/posts/${post.id}`}>Read More</Link>
        </div>
      ))}
    </div>
  )
}
