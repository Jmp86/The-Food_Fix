import React, { useState } from "react";
import { useNavigate } from "react-router-dom"

const PostForm = ( {setShowPostForm} ) => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [description, setDescription] = useState("");
  const [errorsList, setErrorsList] = useState([])
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        image,
        cuisine,
        description
      }),
    })
    .then(r => r.json())
    .then(post => {
      if (post.errors) {
        const errorList = post.errors.map(e => <li>{e}</li>)
        setErrorsList(errorList)
      } else {
        setShowPostForm(false)
        navigate('/community')
      }
    })
  }

  return (
          <div className="post-form">
            <form className="tile" onSubmit={handleSubmit}>
                <h1>Create Post</h1>
                <label>Title:</label><br/>
                <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)}/>
                <br/>
                <label>Image:</label><br/>
                <input type="text" name="image" value={image} onChange={(e) => setImage(e.target.value)}/>
                <br/>
                <label>Cuisine:</label><br/>
                <input type="text" name="cuisine" value={cuisine} onChange={(e) => setCuisine(e.target.value)}/>
                <br/>
                <label>Description:</label><br/>
                <input type="textarea" name="description" value={description} onChange={(e) => setDescription(e.target.value)}/><br/>
                <input className="submit" type="submit"/>
            </form>
            <ul>
                {errorsList}
            </ul>
        </div>
       
  )
}

export default PostForm;