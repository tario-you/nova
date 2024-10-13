import React from "react";

const Workout = (props) => {
    return(
        <li>
            <div>
                {props.exerciseName}
            </div>
        </li>
    )
}

export default Workout;