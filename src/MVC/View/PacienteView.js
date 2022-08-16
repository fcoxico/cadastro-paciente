import { Component } from "react";
import "../../Styles/styles.css";
import PacienteController from "../Controller/PacienteController";

const estadoInicial = {
    nome: '',
    email: '',
    cpf: '',
    idade: '',
    telefone: ''
}

class PacienteView extends Component {

    state = estadoInicial


    /* Vai capturar a mudança do estado das teclas. Conforme vamos preenchendo ele vai
    * adicionando e mostrando no console. Da forma com está implementada ele mostra o estado
    *  de todos os campos. Se fosse um formulário muito grande não valeria a pena */
    handleChange = (event) => {
        const valor = event.target.value;
        const nomeCampo = event.target.name;
        this.setState({
            // o Java Script quando botamos entre colchete saberá que este campo é dianmico
            [nomeCampo]: valor
        })

    };

    cadastrarPressionado = (event) => {
        let pacienteControlador = new PacienteController()
        pacienteControlador.adicionarPaciente(
            this.state.nome,
            this.state.email,
            this.state.cpf,
            this.state.idade,
            this.state.telefone
        )



    }

    render() {
        return (
            <div className="form">
                <h1>Cadastro de Paciente</h1>
                <label>Nome</label>
                <input type="text" name="nome" value={this.state.nome} onChange={this.handleChange} />
                <label>Email</label>
                <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
                <label>CPF</label>
                <input type="text" name="cpf" value={this.state.cpf} onChange={this.handleChange} />
                <label>Idade</label>
                <input type="text" name="idade" value={this.state.idade} onChange={this.handleChange} />
                <label>Telefone</label>
                <input type="text" name="telefone" value={this.state.telefone} onChange={this.handleChange} />
                <button type="submit" onClick={this.cadastrarPressionado}>Cadastrar</button>
            </div>);
    }
}

export default PacienteView;