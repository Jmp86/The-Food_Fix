import { useNavigate } from "react-router"
import { useState, useEffect } from 'react'

const PostTile = ({ post }) => {
    const [averageRating, setAverageRating] = useState(0)
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`/posts/${post.id}/average`)
        .then((r) => r.json())
        .then(average => setAverageRating(average)); 
    }, [])

    const handleClick = () => {
        navigate("/posts/" + post.id);
    }

    return (
        <div onClick={handleClick} className="postTile">
            <h1>{post.title}</h1>
            <img className="image" src={post.image} alt={post.name}/>
            <h2>{post.category}</h2>
            <h3>{post.description}</h3>
            <p>{post.ingredients}</p>
            <p>{post.instructions}</p>
            <h3>{averageRating ? [...Array(parseInt(averageRating))].map(star => <span className="star">&#9733;</span>) : null}</h3>
        </div>
    )
}

export default PostTile