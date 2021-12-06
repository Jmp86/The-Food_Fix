const ReviewTile = ({ review, deleteReview, user }) => {

    return (
        
        <div className="reviewTile">
            <h3>{[...Array(parseInt(review.rating))].map(star => <span className="star">&#9733;</span>)}</h3> 
            <p>{review.review}</p>
            <button onClick={() => deleteReview(review.id)}>Delete Review</button>
        </div>
    )
}

export default ReviewTile