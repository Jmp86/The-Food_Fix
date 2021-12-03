import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from "react";
import DeleteButton from '../components/DeleteButton'
import { useNavigate } from "react-router-dom"

const PostProfile = () => {
    const { id } = useParams()
    const [post, setPost] = useState({})
    const [errorsList, setErrorsList] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        fetch("/posts/" + id)
        .then((r) => r.json())
        .then(post => setPost(post)); 
        }, []);
    
    const handleDelete = () => {
        fetch("/posts/" + id, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then(r => r.json())
          .then(post => {
            if (post.errors) {
              const errorList = post.errors.map(e => <li>{e}</li>)
              setErrorsList(errorList)
            } else {
              navigate('/community')
            }
          })
    }

    return (
        <div className="postProfile">
            <h1>{post.title}</h1>
            <img className="image" src={post.image} alt={post.name}/>
            <h2>{post.cuisine}</h2>
            <h3>{post.description}</h3>
            <p>{post.ingredients}</p>
            <p>{post.instructions}</p>
            <h3>{post.average_rating}</h3>
            <DeleteButton handleDelete={handleDelete}/>
            <ul>
                {errorsList}
            </ul>
        </div>
    )
}

export default PostProfile