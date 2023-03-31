
import React, { useEffect, useState } from "react";
import { getClientsFromApi, getInvoicesOfAClient } from "../api/http";
import { Link, useParams } from "react-router-dom";




const INVOICES = [];

const InvoicesList = (props) => {
    const [state,setState] = useState(INVOICES)
    useEffect(() => {
        getInvoicesOfAClient(props.clientId)
            .then((items) => {
               
                setState(items)
            });
    }, []);

    

 
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
