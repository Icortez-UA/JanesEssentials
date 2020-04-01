import React, { useEffect } from "react";
import {Link} from "react-router-dom"
import M from "materialize-css"

function Side(props) {

    useEffect(()=>{
        M.AutoInit();

    })

    return <div>
        <ul className={props.classes}
            id={props.id}>
            <li>
            <Link
                to="/home">
                Home
            </Link>
            </li>

            <li>
            <Link
                to="/all"
            >
                All
        </Link>
        </li>
            <li>
                <Link
                to="/hybrid"
            >
                Hybrid
        </Link>
        </li>
        </ul>
    </div>


}

export default Side;

