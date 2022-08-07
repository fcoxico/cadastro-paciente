import React, { createRef } from "react";
import { useState } from "react";
import { FormularioPaciente } from "../form/form";
import styled from 'styled-components';

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

const Button = styled.button`
  font-size:20px;
  width:500px;
  height:50px;
  border-width:1px;
  background: #1e62d0;
  color:#ffffff;
  border-color:#337fed;15px
  font-weight:bold;
  border-top-left-radius:6px;
  border-top-right-radius:6px;
  border-bottom-left-radius:6px;
  border-bottom-right-radius:6px;
`;

/*
function FormularioPaciente() {
  return (
    <div>
      Nome completo: <input type="text" onChange={AtualizarCampoNome}></input>
      <br></br>
      email: <input type="text" onChange={AtualizarCampoEmail}></input>
      <br></br>
      CPF: <input type="text" onChange={AtualizarCampoCpf}></input>
      <br></br>
      Idade: <input type="text" onChange={AtualizarCampoIdade}></input>
      <br></br>
      Número de contato:{" "}
      <input type="text" onChange={AtualizarCampoNumeroContato}></input>
    </div>
  );
}
*/

function CadastroView() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [idade, setIdade] = useState("");
  const [numero_contato, setNumero_Contato] = useState("");
  const ref = createRef();

  // Input
  function AtualizarCampoNome(event) {
    setNome(event.target.value);
  }

  function AtualizarCampoEmail(event) {
    setEmail(event.target.value);
  }

  function AtualizarCampoCpf(event) {
    setCpf(event.target.value);
  }

  function AtualizarCampoIdade(event) {
    setIdade(event.target.value);
  }

  function AtualizarCampoNumeroContato(event) {
    setNumero_Contato(event.target.value);
  }

  // Botão

  function CadastrarPressionado() {
    let paciente = {
      nome: nome,
      email: email,
      cpf: cpf,
      idade: idade,
      numero_contato: numero_contato,
    };
    let Controllador = new CadastrorController(paciente);
    Controllador.AdicionarPaciente();
  }

  const sendToParent = () => {
    console.log("Esses são os dados que eu peguei!")
  }
  return (
    <div>
      <FormularioPaciente handleChange={data}/>
      
      <Button onClick={() => sendToParent()}>Clique em mim</Button>
    </div>
  );
}

export default CadastroView;