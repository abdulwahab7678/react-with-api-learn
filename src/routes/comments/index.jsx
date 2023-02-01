import { useState, useEffect } from "react"
import { API_URL } from '../../config/api'
import { Link } from "react-router-dom"

export default function PostIndex() {
    const [comments, setComments] = useState([])
    const [error, setError] = useState(null)
    useEffect(() => {
        const comments = fetch(`${API_URL}/comments`)
            .then((res) => {
                if (res.ok) {
                    return res.json()
                }
                throw new Error("error")
            })
            .then(data => setTimeout(() => setComments([...data]), 3000))
            .catch(error => setError(error.massage))
    }, [])

    if (error) {
        return (
            <div>{error}</div>
        )
    }

    if (!comments.length) {
        return (
            <div>loading comments.....</div>
        )
    }

    return (
        <div className="comments">
            {comments.map(comment => {
                return(
                    <div className={`comment ${comment.id}`}>
                    <h1>{comment.name}</h1>
                    <p>{comment.email}</p>
                    <p>{comment.body}</p>
                    <Link to={`/comments/${comment.id}`}>read more</Link>   
                </div>
                )
            })}
        </div>
    )
}

