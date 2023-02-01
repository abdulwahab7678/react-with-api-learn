import { useState, useEffect } from "react"
import { API_URL } from '../../config/api'
import { Link , useParams } from "react-router-dom"

export default function ShowComment() {
    const {id} = useParams()
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
            .then(data => setTimeout(() => setComment({...data}), 3000))
            .catch(error => setError(error.massage))
    }, [])

    if (error) {
        return (
            <div>{error}</div>
        )
    }

    if (!Object.keys(comment).length) {
        return (
            <div>loading comment.....</div>
        )
    }

    return (
        <div className="comment">
            <div className={`comment ${comment.id}`}>
            <h1>{comment.name}</h1>
                <p>{comment.email}</p>
                <p>{comment.body}</p>
               <Link to='/comments'>back to comments</Link>
            </div>
          
        </div>
    )
}

