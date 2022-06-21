## Clone o projeto

https://github.com/BrunoAndrade42/gbg-client-v2

Após clonado, entre pelo terminal na pasta do projeto e execute o comando:

### `npm install`

Esse comando instalará todas as dependencias necessárias para o projeto funcionar.


Em seguida, entre na pasta service, no arquivo api.js, comente:
#### `baseURL: "https://gbg-server.herokuapp.com"`
e tire o comentário de
#### `baseURL: "http://localhost:3001"`

## Script Disponível

No diretório do projeto, execute o comando:

### `npm start`

Executará o aplicativo no modo desenvolvedor em sua máquina local.\
Abrirá [http://localhost:3000](http://localhost:3000) você visualizará a página no seu navegador

### Para funcionar em conjunto com o banco de dados: 
- É preciso ter o MySQL Workbench instalado devidamente no seu computador.

- Faça um clone do servidor pelo link:
https://github.com/BrunoAndrade42/gbg-server-v2

- Após isso, entre no arquivo index.js e coloque as configurações do seu banco de dados para conexão do mesmo.

- Insira as tabelas do projeto no mysql:

```sh
CREATE TABLE autenticacao (
    idAutenticacao int NOT NULL AUTO_INCREMENT,
    usuario varchar(8) NOT NULL,
    email varchar(50) NOT NULL,
    senha varchar(100) NOT NULL,
    PRIMARY KEY (idAutenticacao)
);

CREATE TABLE categorias (
    idcategorias int NOT NULL AUTO_INCREMENT,
    categoriasNome varchar(10) NOT NULL,
    PRIMARY KEY (idcategorias)
);

CREATE TABLE jogos (
    idJogo int NOT NULL AUTO_INCREMENT,
    idCatJogo int NOT NULL,
    nomeJogo varchar(45) NOT NULL,
    subtituloJogo varchar(400),
    descricaoJogo varchar(400),
    comoJogarJogo varchar(400),
    PRIMARY KEY (idJogo)
);

CREATE TABLE avaliacoes (
    idAvaliacao int NOT NULL AUTO_INCREMENT,
    rating int NOT NULL,
    autor varchar(20) NOT NULL,
    email varchar(50) NOT NULL,
    conteudo varchar(500),
    idJogo int  NOT NULL,
    FOREIGN KEY (idJogo) REFERENCES jogos(idJogo),
    PRIMARY KEY (idAvaliacao)
);
```
E pronto, as configurações estão concluídas para funcionar o projeto localmente em seu computador.
