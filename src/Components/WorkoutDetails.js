import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Correct import for FontAwesomeIcon
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const WorkoutDetails = ({ workout }) => {

//delete
const dispatch = useDispatch();
const handleDelete = () => {
    dispatch({type: 'DELETE_WORKOUT_REQUEST', payload: workout._id});
};

//update
const [editMode, setEditMode] = useState(false);
const [formData, setFormData] = useState({
    title: workout.title,
    artist: workout.artist,
    album: workout.album,
    genre: workout.genre,
});

const handleUpdate = () => {
    dispatch({
        type: 'UPDATE_WORKOUT_REQUEST',
        payload: { ...workout, ...formData },
    });
    setEditMode(false);
};
    return (
        <div className="workout-details">

{!editMode ? (
                <>

            <h4>{workout.title}</h4>
            <p><strong>Artist: </strong>{workout.artist}</p>
            <p><strong>Album: </strong>{workout.album}</p>
            <p><strong>Genre: </strong>{workout.genre}</p>
            <span onClick={handleDelete} className='delete-button'>
            <FontAwesomeIcon icon={faTrash} />
                </span>        
        <button onClick={() => setEditMode(true)}>Edit</button>
                </>
             ) : (
                <div className="edit-form">
                    <input
                        type="text"
                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    />
                    <input
                        type="text"
                        value={formData.artist}
                        onChange={(e) => setFormData({ ...formData, artist: e.target.value })}
                    />
                    <input
                        type="text"
                        value={formData.album}
                        onChange={(e) => setFormData({ ...formData, album: e.target.value })}
                    />
                    <input
                        type="text"
                        value={formData.genre}
                        onChange={(e) => setFormData({ ...formData, genre: e.target.value })}
                    />
                    <button onClick={handleUpdate}>Save</button>
                    <button onClick={() => setEditMode(false)}>Cancel</button>
                </div>
            )} 

        </div>
    );
};

export default WorkoutDetails;




