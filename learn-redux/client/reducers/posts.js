function posts(state = [], action) {
    if (action.type === 'INCREMENT_LIKES') {
        const itemIndex = state.findIndex(item => item.id === action.index);
        const newState = [...state];
        newState[itemIndex].likes++;
        return newState;
    } else {
        const newState = state;
        return newState;
    }

}

export default posts;