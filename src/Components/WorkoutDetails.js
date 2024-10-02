import { useWorkoutsContext } from "../hooks/useWorkoutsContect"

//date fns
import { formatDistanceToNow } from 'date-fns';

const WorkoutDetails = ({ workout }) => {
const { dispatch } = useWorkoutsContext()

    const handleClick = async () => {
        const response = await fetch('/api/workouts/' + workout._id, {
            method: 'DELETE'
        })
        const json = await response.json()

        if (response.ok) {
          dispatch({type: 'DELETE_WORKOUT', payload: json})
        }
    }
    return (
        
        <div className="workout-details">
            <h4>{workout.title}</h4>
            <p><strong>artist:</strong> {workout.artist}</p>
            <p><strong>album: </strong>{workout.album}</p>
            <p><strong>genre: </strong>{workout.genre}</p>
            <p>{formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}</p>
            <span className = "material-symbols-outlined" onClick={handleClick}>delete</span>
        </div>
    )
} 
export default WorkoutDetails