const initialState = {
    workouts: [],
};

const workoutsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_WORKOUTS':
            return { 
                ...state, 
                workouts: action.payload };
        case 'CREATE_WORKOUT':
            return { 
                ...state, 
                workouts: [action.payload, ...state.workouts] }; // Prepending the new workout
        case 'DELETE_WORKOUT':
            return { 
                ...state, 
                workouts: state.workouts.filter(workout => 
                    workout._id !== action.payload._id) };
        case 'UPDATE_WORKOUT':
            return {
                    ...state,
                    workouts: state.workouts.map(workout =>
                        workout._id === action.payload._id ? action.payload : workout
                    ),
                };
            default:
            return state;
    }
};

export default workoutsReducer;







