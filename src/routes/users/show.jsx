import { useState, useEffect } from "react"
import { API_URL } from '../../config/api'
import { Link, useParams } from "react-router-dom"

export default function ShowComment() {
    const { id } = useParams()
    const [user, setuser] = useState({})
    const [error, setError] = useState(null)
    useEffect(() => {
        const user = fetch(`${API_URL}/users/${id}`)
            .then((res) => {
                if (res.ok) {
                    return res.json()
                }
                throw new Error("error")
            })
            .then(data => setTimeout(() => setuser({ ...data }), 3000))
            .catch(error => setError(error.massage))
    }, [])

    if (error) {
        return (
            <div>{error}</div>
        )
    }

    if (!Object.keys(user).length) {
        return (
            <div><h3>loading user...</h3></div>
        )
    }

    return (

        <div className={`user ${user.id}`}>
            <h6>id : {user.id}</h6>
            <h4>name : {user.name}</h4>
            <h4>username : {user.username}</h4>
            <h4>email : {user.email}</h4>
            {/* <h6>address : {user.address}</h6> */}
            <h6>phone : {user.phone}</h6>
            <h6>website : {user.website}</h6>
            {/* <h6>company : {user.company}</h6> */}

            <Link className="btn btn-dark" to='/users'>back to users</Link>
        </div>


    )
}

