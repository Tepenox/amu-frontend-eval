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
        <button>Retour aux clients</button>
      </Link>
            <div>
            <strong>invoices of  {client.fullName} {client.email}</strong>
            </div>
            <InvoicesList clientId = {clientId}/>
            <Link to= {"/"+clientId+"/invoices/add"}>
        <button>Créer une facture</button>
      </Link>
        </>

}

export default ClientDetailsPage