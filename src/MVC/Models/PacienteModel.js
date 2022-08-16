export default class PacienteModel {
    constructor(
        id,
        nomeCompleto = "",
        email = "",
        cpf = "",
        idade = "",
        telefone = ""
    ){
        this.id = id;
        this.nomeCompleto = nomeCompleto;
        this.email = email;
        this.cpf = cpf;
        this.idade = idade;
        this.telefone = telefone;
    }
}
