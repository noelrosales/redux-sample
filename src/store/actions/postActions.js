export const getPosts = () => {
    return (dispatch, getState) => {
        dispatch({ type: 'GET_POSTS' })
    }
}

export const addPost = (newPost) => {
    return (dispatch, getSate) => {
        dispatch({ type: 'ADD_POST', newPost})
    }
}

export const deletePost = (id) => {
    return (dispatch, getState) => {
        dispatch({ type: 'REMOVE_POST', id})
    }
}

export const updatePost = (postToUpdate) => {
    return (dispatch, getState) => {
        dispatch({ type: 'UPDATE_POST', postToUpdate})
    }
}