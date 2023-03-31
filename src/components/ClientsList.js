
import React, { useEffect, useState } from "react";
import { getClientsFromApi } from "../api/http";
import { Link, useParams } from "react-router-dom";




const CLIENTS = [];

const ClientsList = () => {
    const [state,setState] = useState(CLIENTS)
    useEffect(() => {
        getClientsFromApi()
            .then((items) => {
                setState(items);
            });
    }, []);

    

   
    return <><ul>
        {state.map(item => <li key={item.id}>
            <Link to={"/"+item.id}>
                {item.fullName}  {item.email}
                </Link>
        </li>)}
    </ul>
    </>;


}

export default ClientsList;
