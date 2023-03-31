import React, { useState } from "react";

const SUPABASE_CLIENTS_URL ="https://wbqrxkujqclspbtvfept.supabase.co/rest/v1/customers";
const SUPABASE_INVOICES_URL ="https://wbqrxkujqclspbtvfept.supabase.co/rest/v1/invoices";

const SUPABASE_API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndicXJ4a3VqcWNsc3BidHZmZXB0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzk5MTQyNjcsImV4cCI6MTk5NTQ5MDI2N30.iK3EBd8oWneMNNSIdswSrt_s1_elou-g8OOJRkmblcw";

export const addClientToApi = (client) => {
    return fetch(SUPABASE_CLIENTS_URL, {
        method: "POST",
        body: JSON.stringify(client),
        headers: {
            "Content-Type": "application/json",
            apiKey: SUPABASE_API_KEY,
            Prefer: "return=representation",
        },
    })
        .then((response) => response.json())

}

export const getClientsFromApi = () =>{
    return fetch(SUPABASE_CLIENTS_URL, {
        headers: {
            apiKey: SUPABASE_API_KEY,
        },
    }).then((response) => response.json())
}

export const getClientFromApi = (clientId) =>{
    return fetch(`${SUPABASE_CLIENTS_URL}?id=eq.${clientId}&select=*`, {
        headers: {
            apiKey: SUPABASE_API_KEY,
        },
    }).then((response) => response.json())
}

export const getInvoicesOfAClient = (clientId)=>{
    return fetch(`${SUPABASE_INVOICES_URL}?clientId=eq.${clientId}&select=*`, {
        headers: {
            apiKey: SUPABASE_API_KEY,
        },
    }).then((response) => response.json())
}


export const addInvoiceToApi =(invoice) =>{
    return fetch(SUPABASE_INVOICES_URL, {
        method: "POST",
        body: JSON.stringify(invoice),
        headers: {
            "Content-Type": "application/json",
            apiKey: SUPABASE_API_KEY,
            Prefer: "return=representation",
        },
    }).then((response) => response.json())
}