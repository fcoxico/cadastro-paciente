import React from 'react';
import { useState } from 'react';

/** 
 * * Cria uma lista de pacientes e adiciona os novos pacientes a essa lista
*/


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

