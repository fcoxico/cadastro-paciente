import pacienteController from "../Controller/PacienteController";
import {Component} from "react";
import "../../Styles/styles.css";

class PacienteView extends Component {
    
    constructor(paciente){
        super(paciente);
        this.pacienteController = new pacienteController();
        this.paciente = paciente;
        this.state = {
            nomeCompleto: "", email: "", cpf: "", idade: "", telefone: ""
        };
        this.cadastrarPressionado = this.cadastrarPressionado.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    /* Vai capturar a mudança do estado das teclas. Conforme vamos preenchendo ele vai
    * adicionando e mostrando no console. Da forma com está implementada ele mostra o estado
    *  de todos os campos. Se fosse um formulário muito grande não valeria a pena */
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        }, () => {
            console.log(this.state);
        });
        
    };
    
    cadastrarPressionado(){
        const {pacienteController} = this;
        console.log(this.state);
        let paciente = {
            nomeCompleto: this.nomeCompleto,
            email: this.email,
            cpf: this.cpf,
            idade: this.idade,
            telefone: this.telefone
        };
        this.paciente = paciente;
        pacienteController.adicionarPaciente(paciente);
        alert(this.paciente.nomeCompleto)
    }
    
    render(){
        return (
            <div className="form">
                <h1>Cadastro de Paciente</h1>
                <label>Nome</label>
                <input type="text" name="nomeCompleto" onChange={this.handleChange}/>
                <label>Email</label>
                <input type="text" name="email" onChange={this.handleChange}/>
                <label>CPF</label>
                <input type="text" name="cpf" onChange={this.handleChange}/>
                <label>Idade</label>
                <input type="text" name="idade" onChange={this.handleChange}/>
                <label>Telefone</label>
                <input type="text" name="telefone" onChange={this.handleChange}/>
                <button type="submit" onClick={this.cadastrarPressionado}>Cadastrar</button>
            </div>);
    }
}

export default PacienteView;