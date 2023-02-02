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
            <div>loading album...</div>
        )
    }

    return (

        <div className={`album ${album.id}`}>
            <p>userId :{album.userId}</p>
            <p>id :{album.Id}</p>
            <h2>title :{album.title}</h2>
            <Link className="btn btn-dark" to='/albums'>back to albums</Link>
        </div>

    )

}

// import { useState, useEffect } from "react"
// import { API_URL } from '../../config/api'
// import { Link, useParams } from "react-router-dom"

// export default function ShowAlbum() {
//     const { id } = useParams()
//     const [album, setalbum] = useState({})
//     const [error, setError] = useState(null)
//     useEffect(() => {
//         const album = fetch(`${API_URL}/albums/${id}`)
//             .then((res) => {
//                 if (res.ok) {
//                     return res.json()
//                 }
//                 throw new Error("error")
//             })
//             .then(data => setTimeout(() => setalbum({ ...data }), 3000))
//             .catch(error => setError(error.massage))
//     }, [])

//     if (error) {
//         return (
//             <div>{error}</div>
//         )
//     }

//     if (!Object.keys(album).length) {
//         return (
//             <div>loading album.....</div>
//         )
//     }

//     return (

//         <div className={`album ${album.id}`}>
//             {/* <p>postId : {album.postId}</p>
//             <p>id : {album.id}</p> */}
//             <h2>name : {album.title}</h2>
//             {/* <h2>email : {album.email}</h2>
//             <p>body : {album.body}</p> */}

//             <Link to='/albums'>back to albums</Link>
//         </div>


//     )
// }

