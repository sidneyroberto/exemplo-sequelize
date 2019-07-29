# exemplo-sequelize

Exemplo de backend em [Node.js](https://nodejs.org) utilizando a biblioteca [Sequelize](https://sequelize.org) para acessar e realizar operações de CRUD em um banco de dados [PostgreSQL](https://www.postgresql.org/).

Para executar este projeto, primeiramente instale o PostgreSQL ou o SGBD de sua preferência (leia atentamente a documentação do Sequelize para verificar os SGBDs suportados) em seu computador. Após, crie um usuário e um banco de dados de desenvolvimento (pelo menos). Nas configurações deste projeto, é sugerido um banco de dados nomeado como `agenda_dev` para o ambiente de desenvolvimento. Por fim, configure o arquivo `database/config.js` com as informações de acesso ao seu banco de dados.

Após, instale as dependências com o comando:

##### `npm i`

Vale a pena ressaltar que este projeto está usando o PostgreSQL como SGBD. Para tanto, as dependências [pg](https://www.npmjs.com/package/pg) e [pg-hstore](https://www.npmjs.com/package/pg-hstore) foram adicionadas. Caso utilize outro SGBD, remova estas dependências e instale as dependências relacionadas ao driver do seu SGBD escolhido.

Para executar o projeto em modo de desenvolvimento, execute o comando:

##### `npm run dev`

Por fim, para executar em modo de produção, execute o comando:

##### `npm start`