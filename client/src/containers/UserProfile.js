import { useState, useEffect } from 'react'
import PostTile from '../components/PostTile'
import { useParams } from 'react-router-dom'

const UserProfile = (props) => {
    const { id } = useParams()
    // const [user, setUser] = useState([])

    // useEffect(() => {
    //     fetch(`http://localhost:3000/users/` + id)
    //     .then(r => r.json())
    //     .then(setUser)
    // }, [])
   

    return (
        <div>
            <h1>Welcome {props.user.firstname}</h1>
            
            <h2>About Me</h2>
            <h3>{props.user.bio}</h3>
            <h2>My Posts</h2>
            {props.user.posts ? props.user.posts.map(post => <PostTile post={post}/>) : null}
        </div>
    )
}

export default UserProfile