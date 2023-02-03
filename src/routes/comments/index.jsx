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
            <div><h3>loading comments...</h3></div>
        )
    }

    return (
        <div className="comments">
            {comments.map(comment => {
                return(
                    <div className={`comment ${comment.id} my-4`}>
                   <h4>name : {comment.name}</h4>
                    <h4>email : {comment.email}</h4>
                    <Link className="btn btn-dark " to={`/comments/${comment.id}`}>read more</Link>   
                </div>
                )
            })}
        </div>
    )
}

