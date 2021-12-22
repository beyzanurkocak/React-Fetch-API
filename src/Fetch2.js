import React, { useState } from "react"

const Fetch2 = () => {
  const [albums, setAlbums] = useState([])

  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setAlbums(data)
      })
  }

  return (
    <div>
      <button id="btn2" onClick={fetchData}>BUTTON2</button>
      
        <ul>
          {albums.map(albums => (
            <p key={albums.id}>{albums.title}</p>
          ))}
        </ul>
      
    </div>
  )
}

export default Fetch2

