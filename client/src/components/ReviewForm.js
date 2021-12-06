import React, { useState } from "react";
import StarRating from './StarRating'
import { useNavigate } from "react-router-dom"

const ReviewForm = ( {setShowReviewForm, post} ) => {
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);
  const [errorsList, setErrorsList] = useState([])
  const navigate = useNavigate()

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
    .then(post => {
      if (post.errors) {
        const errorList = post.errors.map(e => <li>{e}</li>)
        setErrorsList(errorList)
      } else {
        setShowReviewForm(false)
        navigate('/profile/' + post.user_id)
      }
    })
  }

  return (
          <div className="post-form">
            <form className="tile" onSubmit={handleSubmit}>
                <h1>Add A Review</h1>
                <label>Review:</label><br/>
                <input type="textarea" name="review" value={review} onChange={(e) => setReview(e.target.value)}/>
                <br/>
                <label>Rate This Post:</label><br/>
                <StarRating setRating={setRating} rating={rating}/>
                {/* <input type="range" maxValue={5} minValue={0} name="rating" value={rating} onChange={(e) => setRating(e.target.value)}/> */}
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