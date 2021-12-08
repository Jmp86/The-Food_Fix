const ReviewTile = ({ review, deleteReview, user }) => {

    return (
        
        <div className="reviewTile">
            <h3>{[...Array(parseInt(review.rating))].map(star => <span className="rating">&#9733;</span>)}</h3> 
            <h3>{review.review}</h3>
            <button className="delete" onClick={() => deleteReview(review.id)}>Delete Review</button>
        </div>
    )
}

export default ReviewTile