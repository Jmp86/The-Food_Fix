import { useParams, useNavigate } from 'react-router-dom'
import React, { useEffect, useState } from "react";
import DeleteButton from '../components/DeleteButton'
import UpdateForm from '../components/UpdateForm';

const PostProfile = () => {
    const { id } = useParams()
    const [post, setPost] = useState({})
    const navigate = useNavigate()
    const [showUpdateForm, setShowUpdateForm] = useState(false)

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
              post.errors.map(e => {alert(e)})
            } else {
                setPost(post)
            }
          })
          navigate('/')
    }
    

    return (
        <div className="postProfile">
            <h1>{post.title}</h1>
            <img className="image" src={post.image} alt={post.name}/>
            <h2>{post.category}</h2>
            <h3>{post.description}</h3>
            <p>{post.ingredients}</p>
            <p>{post.instructions}</p>
            <h3>{post.average_rating}</h3>
            {showUpdateForm ? <UpdateForm setShowUpdateForm={setShowUpdateForm} post={post} setPost={setPost}/> : <button className="updateButton" onClick={(e) => setShowUpdateForm(true)}>Edit Post</button>}
            <DeleteButton handleDelete={handleDelete}/>
        </div>
    )
}

export default PostProfile