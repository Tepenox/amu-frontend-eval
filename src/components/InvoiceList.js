
import React, { useEffect, useState } from "react";
import { getClientsFromApi, getInvoicesOfAClient } from "../api/http";
import { Link, useParams } from "react-router-dom";




const INVOICES = [];

const InvoicesList = (props) => {
    const [state,setState] = useState(INVOICES)
    useEffect(() => {
        // Appel HTTP vers Supabase
        getInvoicesOfAClient(props.clientId)
            .then((items) => {
                // On remplace la valeur actuel de state
                // par le tableau d'items venant de l'API
                setState(items)
            });
    }, []);

    

    // On retourne une list <ul> qui contient un tableau d'éléments React
    // Chaque objet de TODO_ITEMS sera transformé en un <li> contenant les détails de la tâche
    // Les éléments React générés par une boucle doivent avoir une "key" unique
    return <><ul>
        {state.map(item => <li key={item.id}>
            {item.sum} {item.status}
        </li>)}
    </ul>
    <Link to= {"/"+props.clientId+"/invoices/create"}>
        <button>add invoice</button>
      </Link>
    </>;


}

export default InvoicesList;
