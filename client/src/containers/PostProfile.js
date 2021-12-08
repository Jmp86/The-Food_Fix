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

    const deleteReview = (id) => {
        fetch("/reviews/" + id, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then(r => r.json())
          .then(
              fetch('/posts/' + post.id)
                .then(r => r.json())
                .then(post => setPost(post))
          )}
    

    return (
        <div className="postProfile" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1547147278-b6acb274b6b5?ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NHx8fGVufDB8fHx8&ixlib=rb-1.2.1&w=1000&q=80)`}}>
            <div className="post">
                <h1>{post.title}</h1>
                <img className="image" src={post.image} alt={post.name}/>
                <h3>Category: {post.category}</h3><br/>
                <h3>Description: {post.description}</h3>
                <p>{post.ingredients}</p>
                <p>{post.instructions}</p>
                <h3>Average Rating: {averageRating ? [...Array(parseInt(averageRating))].map(star => <span className="rating">&#9733;</span>) : null}</h3>
            </div>
            {showReviewForm ? <ReviewForm setShowReviewForm={setShowReviewForm} setPost={setPost} post={post}/> : <button className="reviewButton" onClick={(e) => setShowReviewForm(true)}>Add A Review</button>}
            {showUpdateForm ? <UpdateForm setShowUpdateForm={setShowUpdateForm} post={post} setPost={setPost}/> : <button className="updateButton" onClick={(e) => setShowUpdateForm(true)}>Edit Post</button>}
            <button onClick={handleDelete} className="delete">Delete Post</button><br/>
            {post.reviews ? post.reviews.map(review => <ReviewTile review={review} deleteReview={deleteReview}/>) : null}
        </div>
    )
}

export default PostProfile