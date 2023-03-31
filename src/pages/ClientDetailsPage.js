import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import ClientsList from "../components/ClientsList";
import InvoicesList from "../components/InvoiceList";
import { getClientFromApi } from "../api/http";

const CLIENT = {};
const ClientDetailsPage = () => {
    const [client,setClient] = useState(CLIENT)

    const params = useParams();
    const clientId = params.id
    useEffect(() => {
        getClientFromApi(clientId)
            .then((items) => {
                setClient(items[0])                
            });
    }, []);

        return <>
        <Link to="/">
        <button>return to customers List</button>
      </Link>
            <div>
            <strong>invoices of  {client.fullName}</strong>
            </div>
            <InvoicesList clientId = {clientId}/>
        </>

}

export default ClientDetailsPage