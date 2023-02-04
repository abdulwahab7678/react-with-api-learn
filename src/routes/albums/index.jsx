import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { API_URL } from "../../config/api";

export default function AlbumsIndex() {
    const [albums, setAlbums] = useState([])
    const [error, setError] = useState(null)
    useEffect(() => {
        const albums = fetch(`${API_URL}/albums`)
            .then((res) => {
                if (res.ok) {
                    return res.json()
                }
                throw new Error("Error")
            })
            .then(data => setTimeout(() => setAlbums([...data]), 3000))
            .catch(error => setError(error.massage))
    }, [])

    if (error) {
        return (
            <div>{error}</div>
        )
    }
    if (!albums.length) {
        return (
            <div><h3>loading albums...</h3></div>
        )
    }

    return (
        <div className="albums">
            {albums.map((album) => {
                return (
                    <div className={`album ${album.id} my-4`}>
                        <h4>id :{album.id}</h4>
                        <h4>title :{album.title}</h4>
                    </div>
                )
            })}
        </div>
    )

}