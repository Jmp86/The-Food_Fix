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
            <h2>{post.title}</h2>
            <img className="tileImage" src={post.image} alt={post.name}/>
            <h3>{post.category}</h3>
            <h3>{post.description}</h3>
            <h2>{averageRating ? [...Array(parseInt(averageRating))].map(star => <span className="rating">&#9733;</span>) : null}</h2>
        </div>
    )
}

export default PostTile