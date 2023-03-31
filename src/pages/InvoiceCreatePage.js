import React from "react";
import { useParams } from "react-router-dom";
import InvoiceForm from "../components/InvoiceForm";

const InvoiceCreatePage = () => {
    const params = useParams();


        return <>
           <InvoiceForm clientId= {params.idcustomer}/>
        </>

}

export default InvoiceCreatePage;