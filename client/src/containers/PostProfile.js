import { useParams, useNavigate } from 'react-router-dom'
import React, { useEffect, useState } from "react";
import UpdateForm from '../components/UpdateForm';
import ReviewForm from '../components/ReviewForm';
import ReviewTile from '../components/ReviewTile';

const PostProfile = () => {
    const { id } = useParams()
    const [post, setPost] = useState({})
    const [averageRating, setAverageRating] = useState(0)
    const navigate = useNavigate()
    const [showUpdateForm, setShowUpdateForm] = useState(false)
    const [showReviewForm, setShowReviewForm] = useState(false)

    useEffect(() => {
        fetch("/posts/" + id)
        .then((r) => r.json())
        .then(post => setPost(post)); 

        fetch(`/posts/${id}/average`)
        .then((r) => r.json())
        .then(average => setAverageRating(average)); 

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
            <h3>Category: {post.category}</h3>
            <h3>Description: {post.description}</h3>
            <p>{post.ingredients}</p>
            <p>{post.instructions}</p>
            <h3>Average Rating: {[...Array(parseInt(averageRating))].map(star => <span className="star">&#9733;</span>)}</h3>
            {showReviewForm ? <ReviewForm setShowReviewForm={setShowReviewForm} post={post}/> : <button className="postButton" onClick={(e) => setShowReviewForm(true)}>Add A Review</button>}
            {showUpdateForm ? <UpdateForm setShowUpdateForm={setShowUpdateForm} post={post} setPost={setPost}/> : <button className="postButton" onClick={(e) => setShowUpdateForm(true)}>Edit Post</button>}
            <button onClick={handleDelete} className="postButton">Delete Post</button>
            {post.reviews ? post.reviews.map(review => <ReviewTile review={review}/>) : null}
        </div>
    )
}

export default PostProfile