import { useState, useEffect } from "react"
import { API_URL } from '../../config/api'
import { Link } from "react-router-dom"

export default function PostIndex() {
    const [users, setUsers] = useState([])
    const [error, setError] = useState(null)
    useEffect(() => {
        const users = fetch(`${API_URL}/users`)
            .then((res) => {
                if (res.ok) {
                    return res.json()
                }
                throw new Error("error")
            })
            .then(data => setTimeout(() => setUsers([...data]), 3000))
            .catch(error => setError(error.massage))
    }, [])

    if (error) {
        return (
            <div>{error}</div>
        )
    }

    if (!users.length) {
        return (
            <div><h3>loading Users...</h3></div>
        )
    }

    return (
        <div className="users">
            {users.map(user => {
                return(
                    <div className={`user ${user.id} my-4`}>
                   <h4>name : {user.name}</h4>
                   <h4>username : {user.username}</h4>
                    <h4>email : {user.email}</h4>
                    <Link className="btn btn-dark" to={`/users/${user.id}`}>read more</Link>   
                </div>
                )
            })}
        </div>
    )
}

