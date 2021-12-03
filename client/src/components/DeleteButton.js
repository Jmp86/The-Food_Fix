import React from 'react'

const DeleteButton = ({handleDelete}) => {

    return (
        <div>
            <button onClick={handleDelete} className="button">Delete Post</button>
        </div>
    )
}

export default DeleteButton