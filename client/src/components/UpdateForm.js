import React, { useState } from "react";

const UpdateForm = ( {setShowUpdateForm, setPost, post} ) => {
  const [title, setTitle] = useState(post.title);
  const [image, setImage] = useState(post.image);
  const [category, setCategory] = useState(post.category);
  const [description, setDescription] = useState(post.description);
  const [ingredients, setIngredients] = useState(post.ingredients);
  const [instructions, setInstructions] = useState(post.instructions);
  const [errorsList, setErrorsList] = useState([])

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/posts/" + post.id, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        image,
        category,
        description,
        ingredients,
        instructions
      }),
    })
    .then(r => r.json())
    .then(post => {
      if (post.errors) {
        const errorList = post.errors.map(e => <li>{e}</li>)
        setErrorsList(errorList)
      } else {
        setShowUpdateForm(false)
        setPost(post)
      }
    })
  }

  return (
          <div className="updateForm">
            <form className="tile" onSubmit={handleSubmit}>
                <h2>Edit Post</h2>
                <label>Title:</label><br/>
                <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)}/>
                <br/>
                <label>Image:</label><br/>
                <input type="url" name="image" value={image} onChange={(e) => setImage(e.target.value)}/>
                <br/>
                <label>Category:</label><br/>
                <input type="text" name="cuisine" value={category} onChange={(e) => setCategory(e.target.value)}/>
                <br/>
                <label>Description:</label><br/>
                <textarea type="text" name="description" value={description} onChange={(e) => setDescription(e.target.value)}/><br/>
                <label>Ingredients:</label><br/>
                <textarea type="text" name="ingredients" value={ingredients} onChange={(e) => setIngredients(e.target.value)}/><br/>
                <label>Instuctions:</label><br/>
                <textarea type="text" name="instructions" value={instructions} onChange={(e) => setInstructions(e.target.value)}/><br/>
                <input className="submit" type="submit"/>
            </form>
            <ul>
                {errorsList}
            </ul>
        </div>
       
  )
}

export default UpdateForm;