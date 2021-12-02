function postComments(state = [], action) {
    let newState = [...state];
    switch(action.type) {
        case "ADD_COMMENT":
            newState.push({
                text: action.comment,
                user: action.author
            });
            return newState;
        case "REMOVE_COMMENT":
            const { index } = action;
            newState.splice(index, 1);
            return newState;
        default:
            return state;
    }
}

function comments(state = [], action) {
    if (typeof action.postId !== 'undefined') {
        return {
            ...state,
            [action.postId]: postComments(state[action.postId], action)
        }
    };
    return state;
}

export default comments;