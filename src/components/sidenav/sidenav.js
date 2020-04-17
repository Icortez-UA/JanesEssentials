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
                to="/LoginPage"
            >
                Login
        </Link>
        </li>
            <li>
                <Link
                to="/RegisterPage"
            >
                Register
        </Link>
        </li>
        </ul>
    </div>


}

export default Side;

