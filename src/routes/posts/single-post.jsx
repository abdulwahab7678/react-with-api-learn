import { useState, useEffect } from 'react'
import { API_URL } from '../../config/api'
import { useParams, Link } from 'react-router-dom'

export default function ShowPost() {
  const { id } = useParams()
  const [post, setPost] = useState({})
  const [error, setError] = useState(null)

  useEffect(() => {
    const post = fetch(`${API_URL}/posts/${id}`)
    .then((res) => {
      if ( res.ok ) {
        return res.json()
      }
      throw new Error("There is an error in API")
    })
    .then(data => setTimeout(() => setPost({...data}), 3000))
    .catch(error => setError(error.message))
  }, [])
  if ( error ) {
    return (
      <div>{error}</div>
    )
  }

  if ( !Object.keys(post).length ) {
    return (
      <div>Loading Post...</div>
    )
  }

  return (
    <div className="post">
        <div className={`post ${post.id}`}>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
          <Link className="btn btn-dark" to="/posts">Back to posts</Link>
          <Link className="btn btn-dark" to={`/posts/${post.id}/comments`}>go to comments</Link>
        </div>
    </div>
  )

}
