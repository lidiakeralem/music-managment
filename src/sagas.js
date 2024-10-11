import { takeEvery, call, put } from 'redux-saga/effects';


function* fetchWorkouts() {
    const response = yield call(fetch, '/api/workouts'); // Fetching all workouts
    const data = yield response.json();

    if (response.ok) {
        yield put({ type: 'SET_WORKOUTS', payload: data });
    }
}

function* createWorkout(action) {
    const response = yield call(fetch, '/api/workouts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(action.payload),
    });
    const data = yield response.json();

    if (response.ok) {
        yield put({ type: 'CREATE_WORKOUT', payload: data }); // Adding the newly created workout to the state
    }
}

function* deleteWorkout(action) {
    const response = yield call(fetch, `/api/workouts/${action.payload}`, { method: 'DELETE' });
    const data = yield response.json();

    if (response.ok) {
        yield put({ type: 'DELETE_WORKOUT', payload: data });
    }
}

function* updateWorkout(action) {
    const response = yield call(fetch, `/api/workouts/${action.payload._id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(action.payload)
    });

    const data = yield response.json();

    if (response.ok) {
        yield put({ type: 'UPDATE_WORKOUT', payload: data });
    }
}

export default function* rootSaga() {
    yield takeEvery('FETCH_WORKOUTS', fetchWorkouts);
    yield takeEvery('CREATE_WORKOUT_REQUEST', createWorkout); // Listening to the create request
    yield takeEvery('DELETE_WORKOUT_REQUEST', deleteWorkout);
    yield takeEvery('UPDATE_WORKOUT_REQUEST', updateWorkout);
}







// import { takeEvery, call, put } from 'redux-saga/effects';

// function* fetchWorkouts() {
//     const response = yield call(fetch, '/api/workouts'); // Fetching from backend
//     const data = yield response.json();

//     if (response.ok) {
//         yield put({ type: 'SET_WORKOUTS', payload: data });
//     }
// }

// export default function* rootSaga() {
//     yield takeEvery('FETCH_WORKOUTS', fetchWorkouts);
// }





// import { takeEvery, call, put } from 'redux-saga/effects';

// function* fetchWorkouts() {
//     const response = yield call(fetch, '/api/workouts');
//     const data = yield response.json();

//     if (response.ok) {
//         yield put({ type: 'SET_WORKOUTS', payload: data });
//     }
// }

// function* deleteWorkout(action) {
//     const response = yield call(fetch, `/api/workouts/${action.payload}`, { method: 'DELETE' });
//     const data = yield response.json();

//     if (response.ok) {
//         yield put({ type: 'DELETE_WORKOUT', payload: data });
//     }
// }

// function* createWorkout(action) {
//     const response = yield call(fetch, '/api/workouts', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(action.payload),
//     });
//     const data = yield response.json();

//     if (response.ok) {
//         yield put({ type: 'CREATE_WORKOUT', payload: data });
//     }
// }

// export default function* rootSaga() {
//     yield takeEvery('FETCH_WORKOUTS', fetchWorkouts);
//     yield takeEvery('DELETE_WORKOUT_REQUEST', deleteWorkout);
//     yield takeEvery('CREATE_WORKOUT_REQUEST', createWorkout);
// }