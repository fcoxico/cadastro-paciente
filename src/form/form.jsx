import React, { useState } from "react";
import "../sytles/estilos.css";

const initialValues = {
  name: "",
  email: "",
  cpf: "",
  idade: "",
  telefone: "",
};

export default function FormularioPaciente() {
  const [values, setValues] = useState(initialValues);
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

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
            value={values.name}
            onChange={handleInputChange}
          />

          <label className="labelName">Email</label>
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={values.email}
            onChange={handleInputChange}
          />

          <label className="labelName">CPF</label>
          <input
            type="text"
            placeholder="cpf"
            name="cpf"
            value={values.cpf}
            onChange={handleInputChange}
          />

          <label className="labelName">Idade</label>
          <input
            type="text"
            placeholder="Idade"
            name="idade"
            value={values.idade}
            onChange={handleInputChange}
          />

          <label className="labelName">Telefone</label>
          <input
            type="text"
            placeholder="Telefone"
            name="telefone"
            value={values.telefone}
            onChange={handleInputChange}
          />
          <br />
        </div>
      </fieldset>
      <button type="submit">Clique em mim</button>
    </form>
  );
}
