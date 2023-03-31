
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ClientsList from "../components/ClientsList";

const ClientListPage = () => {
    return <>
        <ClientsList />
        <Link to="/create">
        <button>Créer un client</button>
      </Link>
    </>
}

export default ClientListPage;
