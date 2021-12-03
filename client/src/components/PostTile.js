import { useNavigate } from "react-router"

const PostTile = ({ post }) => {

    const navigate = useNavigate()

    const handleClick = () => {
        navigate("/posts/" + post.id);
    }

    return (
        <div onClick={handleClick} className="postTile">
            <h1>{post.title}</h1>
            <img className="image" src={post.image} alt={post.name}/>
            <h2>{post.cuisine}</h2>
            <h3>{post.description}</h3>
            <p>{post.ingredients}</p>
            <p>{post.instructions}</p>
            <h3>{post.average_rating}</h3>
        </div>
    )
}

export default PostTile