import { useState, useEffect } from 'react'
import PostTile from '../components/PostTile'

const UserProfile = ({ user }) => {
    // const [user, setUser] = useState([])

    // useEffect(() => {
    //     fetch(`http://localhost:3000/users/` + id)
    //     .then( r => r.json())
    //     .then(setUser)
    // }, [])
   

    return (
        <div>
            <h1>Welcome {user.firstname}</h1>
            
            <h2>About Me</h2>
            <h3>{user.bio}</h3>
            <h2>My Posts</h2>
            {user.posts.map(post => <PostTile post={post}/>)}
        </div>
    )
}

export default UserProfile