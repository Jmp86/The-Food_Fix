const ReviewTile = ({ review }) => {

    return (
        
        <div className="reviewTile">
            <h3>{[...Array(parseInt(review.rating))].map(star => <span className="star">&#9733;</span>)}</h3> 
            <p>{review.review}</p>

        </div>
    )
}

export default ReviewTile