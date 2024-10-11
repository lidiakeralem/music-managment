import { useState } from 'react';
import { useDispatch } from 'react-redux';

const WorkoutForm = () => {
    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [album, setAlbum] = useState('');
    const [genre, setGenre] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const workout = { title, artist, album, genre };

        dispatch({ type: 'CREATE_WORKOUT_REQUEST', payload: workout }); // Dispatching workout creation action

    
        setTitle('');
        setArtist('');
        setAlbum('');
        setGenre('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Add a New song</h3>
            <label>song Title:</label>
            <input 
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
            />
            <label>Artist:</label>
            <input 
                type="text"
                onChange={(e) => setArtist(e.target.value)}
                value={artist}
            />
            <label>Album:</label>
            <input 
                type="text"
                onChange={(e) => setAlbum(e.target.value)}
                value={album}
            />
            <label>Genre:</label>
            <input 
                type="text"
                onChange={(e) => setGenre(e.target.value)}
                value={genre}
            />
            <button type="submit">Add song</button>
        </form>
        
    );
};

export default WorkoutForm;
