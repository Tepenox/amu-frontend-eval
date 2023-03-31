
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

    

 
    return <>
    <table></table>
    <ul>
        {state.map(item => <li key={item.id}>
            {item.sum} {item.status}
        </li>)}
    </ul>
    
    </>;


}

export default InvoicesList;
