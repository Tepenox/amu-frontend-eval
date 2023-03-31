
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ClientsList from "../components/ClientsList";

const ClientListPage = () => {
    return <>
        <ClientsList />
        <Link to="/create">
        <button>Create Customer</button>
      </Link>
    </>
}

export default ClientListPage;
