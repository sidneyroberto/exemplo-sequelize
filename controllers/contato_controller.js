const { Contato } = require('../database/db');

const controller = {
    salvar: (req, res) => {
        const contato = req.body;

        Contato
            .create(contato)
            .then(contatoSalvo => res.status(201).json(contatoSalvo))
            .catch(erro => {
                console.log(erro);
                res.status(500).json('Erro ao tentar salvar o contato');
            });
    },
    recuperarTodos: (req, res) => {
        Contato
            .findAll()
            .then(contatos => res.json(contatos))
            .catch(erro => {
                console.log(erro);
                res.status(500).json('Erro ao tentar recuperar os contatos');
            });
    },
    atualizar: (req, res) => {
        const contato = req.body;

        Contato
            .update(
                {
                    nome: contato.nome,
                    telefone: contato.telefone
                },
                {
                    returning: true,
                    where: {
                        id: contato.id
                    }
                }
            )
            .then(resposta => {
                const contatoAtualizado = resposta[1][0].dataValues;
                res.json(contatoAtualizado);
            })
            .catch(erro => {
                console.log(erro);
                res.status(500).json('Erro ao tentar atualizar o contato');
            });
    },
    remover: (req, res) => {
        const id = req.params.id;

        Contato
            .destroy({
                where: { id }
            })
            .then(resposta => {
                if (resposta === 1) {
                    res.status(204).end();
                } else {
                    res.status(404).json('Contato não encontrado');
                }
            })
            .catch();
    }
};

module.exports = controller;