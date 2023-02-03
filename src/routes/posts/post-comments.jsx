import { useState, useEffect } from 'react'
import { API_URL } from '../../config/api'
import { Link , useParams } from 'react-router-dom'

export default function PostComments() {
  const { id } = useParams()
  const [PostComments, setPostComments] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    const PostComments = fetch(`${API_URL}/posts/${id}/comments`)
    .then((res) => {
      if ( res.ok ) {
        return res.json()
      }
      throw new Error("There is an error in API")
    })
    .then(data => setTimeout(() => setPostComments([...data]), 3000))
    .catch(error => setError(error.message))
  }, [])
  if ( error ) {
    return (
      <div>{error}</div>
    )
  }

  if ( !PostComments.length ) {
    return (
      <div><h3>Loading PostComments...</h3></div>
    )
  }

  return (
    <div className="PostComments">
      {PostComments.map(post => (
        <div className={`post ${post.id}`}>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
          <Link to={`/posts/${post.id}`}>Read More</Link>
        </div>
      ))}
    </div>
  )
}
