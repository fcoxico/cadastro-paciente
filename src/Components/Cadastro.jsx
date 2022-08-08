import React from "react";
import  FormularioPaciente  from "../form/form";
import Card from "../Card/showPatientInfo";
import "../sytles/estilos.css"

/*
* * Nessa classe eu quero chamar o formulário de cadastro de pacientes
* * e mostrar no console.log. Eu vou criar um componente chamado card 
* * vai mostrar o paciente recem adicionado.

*/


class CadastrorController {
  constructor(paciente) {
    this.paciente = paciente;
    this.lista = [];
  }

  AdicionarPaciente() {
    this.lista.push(this.paciente);
    console.log(this.lista);
  }
}


function CadastroView() {



  return (
    <div>
      <FormularioPaciente/>
      <Card/>
      
    </div>
  );
}

export default CadastroView;