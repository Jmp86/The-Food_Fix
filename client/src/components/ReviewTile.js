import React, { useEffect, useState } from "react";

const ReviewTile = ({ review, deleteReview }) => {
    const [user, setUser] = useState({})

    useEffect(() => {
        fetch('/users/' + review.user_id)
        .then(r => r.json())
        .then(user => setUser(user))
    }, [])

    return (
    
        <div className="reviewTile">
            <h3>Reviewed by: {user.username}</h3>
            <h3>{[...Array(parseInt(review.rating))].map(star => <span key={star} className="rating">&#9733;</span>)}</h3> 
            <h3>{review.review}</h3>
            <button className="delete" onClick={() => deleteReview(review.id)}>Delete Review</button>
        </div>
    )
}

export default ReviewTile