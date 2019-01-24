import moment from 'moment';
import ACTION from '../actions/types';

const initState = {
    data: [],
    logs: []
}

const postReducer = (state=initState, action) => {
    switch(action.type) {
        case ACTION.GET_POSTS:
            console.log('posts fetched');
            return state
        case ACTION.ADD_POST:
            console.log('post added');
            action.newPost.action = 'Posted';
            return {
                ...state,
                data:[...state.data, action.newPost],
                logs:[...state.logs, action.newPost]
            }
        case ACTION.REMOVE_POST:
            console.log('post deleted');
            const newData = [...state.data].filter(item => item.id !== action.id);
            const deletedData = [...state.data].find(data => data.id === action.id);
            const newRec = {...deletedData};
            newRec.action="Removed";
            newRec.created=moment().format();
            const newLog = [...state.logs, newRec];
            return {
                ...state,
                data: newData,
                logs: newLog
            }
        case ACTION.UPDATE_POST:
            console.log('post updated');
            const post = [...state.data].find(data => data.id === action.postToUpdate.id);
            post.status = "read";
            const upd = {...post};
            upd.action = "Updated";
            upd.created = moment().format();
           
            const updatedPosts = [...state.data];
            console.log('state', updatedPosts);
            return {
                ...state,
                data: [...updatedPosts],
                logs: [...state.logs, upd]
            }
        default:
            return state
    }
}

export default postReducer