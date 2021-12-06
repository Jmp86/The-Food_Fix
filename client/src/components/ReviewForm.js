import React, { useState } from "react";
import StarRating from './StarRating'

const ReviewForm = ( {setShowReviewForm, setPost, post, setUser} ) => {
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);
  const [errorsList, setErrorsList] = useState([])

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        review,
        rating,
        post_id: post.id
      }),
    })
    .then(r => r.json())
    .then(review => {
      if (review.errors) {
        const errorList = review.errors.map(e => <li>{e}</li>)
        setErrorsList(errorList)
      } else {
        setShowReviewForm(false)
        fetch('/posts/' + post.id)
        .then(r => r.json())
        .then(post => setPost(post))
      }
    })
  }

  return (
          <div className="reviewForm">
            <form className="tile" onSubmit={handleSubmit}>
                <h2>Add A Review</h2>
                <label>Review:</label><br/>
                <input type="textarea" name="review" value={review} onChange={(e) => setReview(e.target.value)}/>
                <br/>
                <label>Rate This Post:</label><br/>
                <StarRating setRating={setRating} rating={rating}/>
                <br/>
                <input className="submit" type="submit"/>
            </form>
            <ul>
                {errorsList}
            </ul>
        </div>
       
  )
}

export default ReviewForm;