import React, { useState } from "react";
import "./formulario.css";

export function FormularioPaciente(handleChange) {
  const [state, setState] = useState({
    name: "",
    email: "",
    cpf: "",
    idade: "",
    telefone: "",
  });

  
  function handleChange(evt) {
    const value = evt.target.value;

    setState({
      ...state,

      [evt.target.name]: value,
    });
  }

    return (
      <form>
        <fieldset>
          <h1>Cadastro de Paciente</h1>
          <div className="form-content">
            <label className="labelName">Nome</label>
            <input
              type="text"
              placeholder="Nome Completo"
              name="name"
              value={state.name}
              onChange={handleChange}
            />

            <label className="labelName">Email</label>
            <input
              type="text"
              placeholder="Email"
              name="email"
              value={state.email}
              onChange={handleChange}
            />

            <label className="labelName">CPF</label>
            <input
              type="text"
              placeholder="cpf"
              name="cpf"
              value={state.cpf}
              onChange={handleChange}
            />

            <label className="labelName">Idade</label>
            <input
              type="text"
              placeholder="Idade"
              name="idade"
              value={state.idade}
              onChange={handleChange}
            />

            <label className="labelName">Telefone</label>
            <input
              type="text"
              placeholder="Telefone"
              name="telefone"
              value={state.telefone}
              onChange={handleChange}
            />
            <br />
          </div>
        </fieldset>
      </form>
    );
  };
