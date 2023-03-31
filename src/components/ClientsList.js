
import React, { useEffect, useState } from "react";
import { getClientsFromApi } from "../api/http";
import { Link, useParams } from "react-router-dom";




const CLIENTS = [];

const ClientsList = () => {
    const [state,setState] = useState(CLIENTS)
    useEffect(() => {
        // Appel HTTP vers Supabase
        getClientsFromApi()
            .then((items) => {
                // On remplace la valeur actuel de state
                // par le tableau d'items venant de l'API
                setState(items);
            });
    }, []);

    

    // On retourne une list <ul> qui contient un tableau d'éléments React
    // Chaque objet de TODO_ITEMS sera transformé en un <li> contenant les détails de la tâche
    // Les éléments React générés par une boucle doivent avoir une "key" unique
    return <><ul>
        {state.map(item => <li key={item.id}>
            <Link to={"/"+item.id}>
                {item.fullName}  {item.email}
                </Link>
        </li>)}
    </ul>
    <Link to="/create">
        <button>Create Customer</button>
      </Link>
    </>;


}

export default ClientsList;
