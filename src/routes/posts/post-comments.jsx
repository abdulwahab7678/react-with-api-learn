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
      {PostComments.map(PostComment => (
        <div className={`PostComment my-4 ${PostComment.id}`}>
          <p>id : {PostComment.id}</p>
          <h4>name : {PostComment.name}</h4>
          <h4>email : {PostComment.email}</h4>
          <p>body : {PostComment.body}</p>
          <Link className='btn btn-dark' to={`/posts/${PostComment.id}`}>back to post</Link>
        </div>
      ))}
    </div>
  )
}
