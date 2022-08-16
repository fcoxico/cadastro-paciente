import pacienteModel from "../Models/PacienteModel";

class PacienteController {
    constructor(){
        this.lastID = 0;
        this.pacienteArray = [];
    }
    
    /* ----------Adicionando um paciente---------------- */
    
    adicionarPaciente(nomeCompleto, email, cpf, idade, telefone){
        const id = this.lastID;
        const paciente = new pacienteModel(
            id,
            nomeCompleto,
            email,
            cpf,
            idade,
            telefone
        );
        this.pacienteArray.push(paciente);
        this.lastID = this.lastID + 1;
    }
}

export default PacienteController;
