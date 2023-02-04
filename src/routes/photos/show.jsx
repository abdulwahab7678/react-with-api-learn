import { useState, useEffect } from "react"
import { API_URL } from '../../config/api'
import { Link, useParams } from "react-router-dom"

export default function ShowComment() {
    const { id } = useParams()
    const [photo, setPhoto] = useState({})
    const [error, setError] = useState(null)
    useEffect(() => {
        const photo = fetch(`${API_URL}/photos/${id}`)
            .then((res) => {
                if (res.ok) {
                    return res.json()
                }
                throw new Error("error")
            })
            .then(data => setTimeout(() => setPhoto({ ...data }), 3000))
            .catch(error => setError(error.massage))
    }, [])

    if (error) {
        return (
            <div>{error}</div>
        )
    }

    if (!Object.keys(photo).length) {
        return (
            <div><h3>loading photo...</h3></div>
        )
    }

    return (

        <div className={`photo ${photo.id}`}>
            <h6>id : {photo.id}</h6>
            <h4>title : {photo.title}</h4>
            <h4>url : {photo.url}</h4>
            <h4>thumbnailUrl : {photo.thumbnailUrl}</h4>

            <Link className="btn btn-dark" to='/photos'>back to photos</Link>
        </div>


    )
}

