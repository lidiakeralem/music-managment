import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import WorkoutDetails from '../Components/WorkoutDetails';
import WorkoutForm from "../Components/WorkoutForm";

const Home = () => {
    const dispatch = useDispatch();
    const workouts = useSelector((state) => state.workouts); // Selecting the workouts from Redux state

    const [genreFilter, setGenreFilter] = useState(''); // Adding genre filter state

    useEffect(() => {
        dispatch({ type: 'FETCH_WORKOUTS' }); // Triggering the fetch action
    }, [dispatch]);

    // Filter workouts based on genre input
    const filteredWorkouts = workouts.filter((workout) =>
        genreFilter === '' || workout.genre.toLowerCase().includes(genreFilter.toLowerCase())
    );

    return (
        <div className="Home" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            {/* Left side: Filter and Workout List */}
            <div style={{ flex: 1 }}>
                <div style={{ marginBottom: '10px', textAlign: 'center' }}>
                    <input
                        type="text"
                        placeholder="Filter by genre"
                        value={genreFilter}
                        onChange={(e) => setGenreFilter(e.target.value)}
                        style={{ padding: '5px', width: '80%', fontSize: '14px' }} // Minimized input size
                    />
                </div>

                <div className="workouts">
                    {filteredWorkouts.length > 0 ? (
                        filteredWorkouts.map((workout) => (
                            <WorkoutDetails key={workout._id} workout={workout} />
                        ))
                    ) : (
                        <p>No genre available</p> // Message if no workouts are available
                    )}
                </div>
            </div> 

            {/* Right side: Add new workout form */}
            <div className="workout-form-container" style={{ flex: 1, marginLeft: '20px' }}>
                <WorkoutForm />
            </div>
        </div>
    );
};

export default Home;