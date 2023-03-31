
import React from "react";
import ReactDOM from "react-dom";


import { BrowserRouter, Routes, Route } from "react-router-dom";
import ClientCreatePage from "./pages/ClientCreatePage";
import ClientDetailsPage from "./pages/ClientDetailsPage";
import ClientListPage from "./pages/ClientsListPage";
import InvoiceCreatePage from "./pages/InvoiceCreatePage";

const App = () => {
    return <BrowserRouter>
        <Routes>
        <Route
                path="/create"
                element={<ClientCreatePage />}
            />
        <Route
                path="/:id"
                element={<ClientDetailsPage />}
            />
            <Route
                path="/"
                element={<ClientListPage />}
            />
             <Route
                path="/:idcustomer/invoices/create"
                element={<InvoiceCreatePage />}
            />
        </Routes>
    </BrowserRouter>
}

ReactDOM.render(<App />, document.querySelector('main'));