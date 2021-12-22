import React, { useState } from "react"

const Fetch1 = () => {
  const [todos, setToDos] = useState([])

  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setToDos(data)
      })
  }

  return (
    <div>
      <button id="btn1" onClick={fetchData}>BUTTON1</button>
      
        <ul>
          {todos.map(todos => (
            <p key={todos.id}>{todos.title}</p>
          ))}
        </ul>
      
    </div>
  )
}

export default Fetch1

