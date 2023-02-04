import { useState, useEffect } from "react"
import { API_URL } from '../../config/api'
import { Link } from "react-router-dom"

export default function todosIndex() {
    const [todos, setTodos] = useState([])
    const [error, setError] = useState(null)
    useEffect(() => {
        const todos = fetch(`${API_URL}/todos`)
            .then((res) => {
                if (res.ok) {
                    return res.json()
                }
                throw new Error("error")
            })
            .then(data => setTimeout(() => setTodos([...data]), 3000))
            .catch(error => setError(error.massage))
    }, [])

    if (error) {
        return (
            <div>{error}</div>
        )
    }

    if (!todos.length) {
        return (
            <div><h3>loading todos...</h3></div>
        )
    }

    return (
        <div className="todos">
            {todos.map(todo => {
                return(
                    <div className={`todo ${todo.id} my-4`}>
                     <h4>id : {todo.id}</h4>
                    <h4>title : {todo.title}</h4>
                     {/* <h4>completed  : {todo.completed}</h4> */}
                </div>
                )
            })}
        </div>
    )
}

