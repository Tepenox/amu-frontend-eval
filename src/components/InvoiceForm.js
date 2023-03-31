import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addInvoiceToApi } from "../api/http";

const InvoiceForm = (props) => {
    const navigate = useNavigate();
    const clientId = props.clientId;

    const [sum, setSum] = useState();
    const [status, setStatus] = useState('pending');

    const addInvoiceFrom = (e) =>{
            e.preventDefault();
            console.log(clientId);
            console.log({sum,status})     

            addInvoiceToApi({sum,status,clientId}).then(()=>{
                navigate(`/${clientId}`)
                
            })
        }
        
    

    const updateSum = (event) => {
        setSum(event.target.value);
    }
    const updateStatus = (event) => {
        setStatus(event.target.value);
    }

    return<>
    <form onSubmit={addInvoiceFrom}>
          
            <input 
              type="number" 
              name="sum-number" 
              placeholder="sum number" 
              value={sum}
              onChange = {updateSum}
            />
            
            <select value={status} onChange={ updateStatus} name="status" id="status" >
                <option value="pending">Pending</option>
                <option value="payed">Payed</option>
            </select>


            <button>Ajouter</button>
        </form>
    </>

}

export default InvoiceForm