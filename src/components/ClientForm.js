import { addClientToApi } from "../api/http";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ClientForm = () => {
    const navigate = useNavigate();
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');

    const addClient = (e) =>{
            e.preventDefault();
            let clientToAdd = {fullName,email}
            addClientToApi(clientToAdd).then(()=>{
                navigate("/")
            })
        }
    

    const updateFullName = (event) => {
        setFullName(event.target.value);
    }
    const updateMail = (event) => {
        setEmail(event.target.value);
    }

    return<>
    <form onSubmit={addClient}>
          
            <input 
              type="text" 
              name="fullname-text" 
              placeholder="full name" 
              value={fullName}
              onChange = {updateFullName}
            />
           
            <input 
              type="email" 
              name="mail-text" 
              placeholder="mail" 
              value={email}
              onChange = {updateMail}
            />

            <button>Ajouter</button>
        </form>
    </>

}

export default ClientForm