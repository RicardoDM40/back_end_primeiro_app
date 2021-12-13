const conexao = require("../database/connection");

module.exports = {
    async cadastrar(request, response) {
        const dadosCadastro = request.body;
        let id;
        try{
            id = await conexao('clientes').insert(dadosCadastro);

        }catch(error){
            return response.json({
                "error" : error,
                "status" : 406
            })
        }
        return response.json({
            "id": id,
            "status": 201
        });''
    },

    async listar(request, response) {
        const resultadoBusca = await conexao("clientes").select("*");
        return response.json(resultadoBusca);
    },

    async buscar(request, response) {
        const {id} = request.params;
        
        return response.json(resultadoBusca);
    },

    async apagar(request, response) {
        const { id } = request.params;
        await conexao("clientes").where("id", id).delete();
        return response.status(204).send();
    },
    async atualizar(request, response){
        const { id } = request.params;
        const clienteAtualizar = await conexao("clientes").select("*").where("id", id);
        console.log(Object.keys(clienteAtualizar))
        if (!(Object.keys(clienteAtualizar).length === 0)) {
            const {nome, sobrenome, cpf, sexo, endereco, cidade, uf, email, contato} = request.body;
            try {
                await conexao("clientes").where("id", id).update({
                    nome: nome,
                    sobrenome: sobrenome,
                    cpf: cpf,
                    sexo: sexo,
                    endereco: endereco,
                    cidade: cidade,
                    uf: uf,
                    email: email,
                    contato: contato,
                               
                })
                return response.json("cadastro atualizado com sucesso!");
            } catch (error) {
                return response.status(406).json(error)
            }
        } else {
            return response.status(406).json("cadastro não localizado")
        }
         
    }
}
