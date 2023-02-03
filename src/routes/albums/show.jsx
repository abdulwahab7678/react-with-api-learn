import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { API_URL } from "../../config/api";

export default function AlbumShow() {
    const { id } = useParams()
    const [album, setAlbum] = useState({})
    const [error, setError] = useState(null)
    useEffect(() => {
        const album = fetch(`${API_URL}/albums/${id}`)
            .then((res) => {
                if (res.ok) {
                    return res.json()
                }
                throw new Error("Error")
            })
            .then(data => setTimeout(() => setAlbum({ ...data }), 3000))
            .catch(error => setError(error.massage))
    }, [])

    if (error) {
        return (
            <div>{error}</div>
        )
    }
    if (!Object.keys(album).length) {
        return (
            <div><h3>loading album...</h3></div>
        )
    }

    return (

        <div className={`album ${album.id}`}>
            <h6>userId :{album.userId}</h6>
            <h6>id :{album.Id}</h6>
            <h4>title :{album.title}</h4>
            <Link className="btn btn-dark" to='/albums'>back to albums</Link>
        </div>

    )

}

