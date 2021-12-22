import React, { useState } from "react"

const Fetch3 = () => {
  const [posts, setPosts] = useState([])

  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setPosts(data)
      })
  }

  return (
    <div>
      <button id="btn3" onClick={fetchData}>BUTTON3</button>
      
        <ul>
          {posts.map(posts => (
            <p key={posts.id}>{posts.title}</p>
          ))}
        </ul>
      
    </div>
  )
}

export default Fetch3

