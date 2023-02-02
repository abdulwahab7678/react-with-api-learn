import { useState, useEffect } from "react"
import { API_URL } from '../../config/api'
import { Link, useParams } from "react-router-dom"

export default function ShowComment() {
    const { id } = useParams()
    const [comment, setComment] = useState({})
    const [error, setError] = useState(null)
    useEffect(() => {
        const comment = fetch(`${API_URL}/comments/${id}`)
            .then((res) => {
                if (res.ok) {
                    return res.json()
                }
                throw new Error("error")
            })
            .then(data => setTimeout(() => setComment({ ...data }), 3000))
            .catch(error => setError(error.massage))
    }, [])

    if (error) {
        return (
            <div>{error}</div>
        )
    }

    if (!Object.keys(comment).length) {
        return (
            <div><h1>loading comment.....</h1></div>
        )
    }

    return (

        <div className={`comment ${comment.id}`}>
            <p>postId : {comment.postId}</p>
            <p>id : {comment.id}</p>
            <h2>name : {comment.name}</h2>
            <h2>email : {comment.email}</h2>
            <p>body : {comment.body}</p>

            <Link className="btn btn-dark" to='/comments'>back to comments</Link>
        </div>


    )
}

