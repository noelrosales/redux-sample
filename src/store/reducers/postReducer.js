import moment from 'moment';

const initState = {
    data: [],
    logs: []
}

const postReducer = (state=initState, action) => {
    switch(action.type) {
        case 'GET_POSTS':
            console.log('posts fetched');
            return state
        case 'ADD_POST':
            console.log('post added');
            action.newPost.action = 'Posted';
            return {
                ...state,
                data:[...state.data, action.newPost],
                logs:[...state.logs, action.newPost]
            }
        case 'REMOVE_POST':
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
        default:
            return state
    }
}

export default postReducer