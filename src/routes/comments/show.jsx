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
            <div><h3>loading comment...</h3></div>
        )
    }

    return (

        <div className={`comment ${comment.id}`}>
            <h6>postId : {comment.postId}</h6>
            <h6>id : {comment.id}</h6>
            <h4>name : {comment.name}</h4>
            <h4>email : {comment.email}</h4>
            <h6>body : {comment.body}</h6>

            <Link className="btn btn-dark" to='/comments'>back to comments</Link>
        </div>


    )
}

