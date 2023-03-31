import { useParams } from "react-router-dom";
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
        // Appel HTTP vers Supabase
        getClientFromApi(clientId)
            .then((items) => {
                // On remplace la valeur actuel de state
                // par le tableau d'items venant de l'API
                setClient(items[0])                
            });
    }, []);

        return <>
            <strong>invoices of  {client.fullName}</strong>
            <InvoicesList clientId = {clientId}/>
        </>

}

export default ClientDetailsPage