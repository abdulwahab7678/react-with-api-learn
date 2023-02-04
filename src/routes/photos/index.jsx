import { useState, useEffect } from "react"
import { API_URL } from '../../config/api'
import { Link } from "react-router-dom"

export default function PhotosIndex() {
    const [photos, setPhotos] = useState([])
    const [error, setError] = useState(null)
    useEffect(() => {
        const photos = fetch(`${API_URL}/photos`)
            .then((res) => {
                if (res.ok) {
                    return res.json()
                }
                throw new Error("error")
            })
            .then(data => setTimeout(() => setPhotos([...data]), 3000))
            .catch(error => setError(error.massage))
    }, [])

    if (error) {
        return (
            <div>{error}</div>
        )
    }

    if (!photos.length) {
        return (
            <div><h3>loading photos...</h3></div>
        )
    }

    return (
        <div className="photos">
            {photos.map(photo => {
                return(
                    <div className={`photo ${photo.id} my-4`}>
                    <h4>title : {photo.title}</h4>
                     <h4>url : {photo.url}</h4>
                    <Link className="btn btn-dark" to={`/photos/${photo.id}`}>read more</Link>   
                </div>
                )
            })}
        </div>
    )
}

