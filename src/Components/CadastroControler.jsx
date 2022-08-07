import React from 'react';
import { useState } from 'react';


function CadastrorController(){
    const [paciente,setPaciente] = useState()
    const [listaPacientes, setListaPacientes] = useState([])

    function AdicionarPacientes(){
        let paciente = paciente
        setListaPacientes(
            listaAtual => [...listaAtual, paciente]
        )  
        
        console.log(listaPacientes)
    }

    
}

export default CadastrorController

