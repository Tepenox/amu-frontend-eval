// src/app.js

// React va permettre de dessiner notre arbre d'éléments HTML
import React from "react";
// ReactDOM va permettre de créer le rendu correspondant dans le DOM HTML
import ReactDOM from "react-dom";

// BrowserRouter permet de fournir à tous les composants qu'il contient des outils relatifs au routage
// Routes permet de décrire la configuration des routes
// Route permet de décrire la configuration d'une route (url => composant à afficher)
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

// Imprime l'arbre renvoyé par App() dans l'élément <main> du DOM HTML
ReactDOM.render(<App />, document.querySelector('main'));