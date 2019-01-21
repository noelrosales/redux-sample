import moment from 'moment';

const initState = {
    data: [],
    logs: []
}

const postReducer = (state=initState, action) => {
    console.log(state);
    switch(action.type) {
        case 'GET_POSTS':
            console.log('posts fetched');
            return state
        case 'ADD_POST':
            console.log('post added');
            action.newPost.action = 'Posted';
            console.log('posted',action.newPost)
            console.log('current', state.logs)
            return {
                ...state,
                data:[...state.data, action.newPost],
                logs:[...state.logs, action.newPost]
            }
        case 'REMOVE_POST':
            console.log('post deleted');
            const newData = [...state.data].filter( item => item.id !== action.id);
            const deletedData = [...state.data].find(data => data.id === action.id);
            const newLog = [...state.logs, deletedData];
            newLog.action = 'Removed';
            console.log(state.logs)
            
            // console.log('deleted',deletedData)
            return {
                ...state,
                data: newData,
                logs: [...state.logs, newLog]
            }
        default:
            return state
    }
}

export default postReducer