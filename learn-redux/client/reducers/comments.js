function comments(state = [], action) {
    switch(action.type) {
        case "ADD_COMMENT":
            let newState = {...state};
            newState[action.postId].push({
                text: action.comment,
                user: action.author
            });
            return newState;
        default:
            return state;
    }
}

export default comments;