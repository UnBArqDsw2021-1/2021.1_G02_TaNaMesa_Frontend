[![Netlify Status](https://api.netlify.com/api/v1/badges/791751ff-1717-4a40-9973-fa434318bbf5/deploy-status)](https://app.netlify.com/sites/tanamesa/deploys)

# 2021.1_G02_TaNaMesa_Frontend

Repositório para o Frontend do projeto da disciplina de Desenho e Arquitetura de Software do grupo Tá na Mesa (Grupo 02) .

# Tá na Mesa

**Código da Disciplina**: FGA0208<br>
**Número do Grupo**: 02<br>

## Alunos

|Matrícula    | Aluno                              | GitHub                                                     |
| ----------  | ---------------------------------- | ---------------------------------------------------------- |
| 19/0041871  | Abner Filipe Cunha Ribeiro         | [@abner423](https://github.com/abner423)                  |
| 18/0041444  | Brenda Vitória dos Santos          | [@brendavsantos](https://github.com/brendavsantos)         |
| 18/0063162  | Daniel Primo de Melo               | [@danieldagerom](https://github.com/danieldagerom)         |
| 17/0161897  | Eduarda Servidio Claudino          | [@ServidioEC](https://github.com/ServidioEC)               |
| 18/0015966  | Emily Dias Sousa                   | [@emysdias](https://github.com/emysdias)                   |
| 18/0033034  | Hérick Ferreira de Souza Portugues | [@herickport](https://github.com/herickport)               |
| 18/0113666  | Ítalo Alves Guimarães              | [@alvesitalo](https://github.com/alvesitalo)               |
| 18/0114093  | Lucas Ursulino Boaventura          | [@lboaventura25](https://github.com/lboaventura25)         |
| 18/0037439  | Sergio de Almeida Cipriano Júnior  | [@sergiosacj](https://github.com/sergiosacj)               |
| 18/0114689  | Tiago Samuel Rodrigues             | [@tsrrodrigues](https://github.com/tsrrodrigues)           |

## Sobre 🍔

Um sistema para que as pessoas possam chegar no restaurante fazer seus pedidos separados por pessoa e que facilite para saber o valor que cada um vai pagar ao final. 

## Descritivo dos Principais Aspectos Técnicos 

**Principal(is) Metodologia(s) Adotada(s)**: Kanban, XP, Scrum<br>
**Principais Linguagens Utilizadas e/ou Pretendidas**: Typescript, CSS, Html<br>
**Principais Tecnologias Utilizadas e/ou Pretendidas**: ReactJS, Docker, Netlify<br>
**Principal(is) Estilo(s) Arquitetural(is) Adotado(s)**: Monilítico/Microsserviços<br>

## O Projeto está rodando?

(X) SIM
( ) NÃO
Se SIM, insira um manual (ou um script) para auxiliar ainda mais os interessados em consultar o projeto.

## Informações Complementares

## Login
**Mesa:**
- mesa: 1
- password: 123456

**Garçom:**
- cpf: 123458
- password: 654321

**Cozinha:**
- cpf: 123459
- password: 654321

## Ambientes
### Local
**[Disponível na porta 3000.](http://localhost:3000/)**

### Ambiente de produção
**[Disponível no Netlify](https://tanamesa.netlify.app)**

***
## Colocando no ar localmente

- Caso esteja utilizando o vscode para desenvolver:
1. Instalar as dependências da aplicação:
```shell
    yarn
```
2. Rodar a aplicação:
```shell
    yarn start
```

- Caso esteja utilizando outras formas para desenvolver ou queira somente rodar a aplicação:
1. Build:
```shell
    docker-compose build
```
2. Rodar a aplicação:
```shell
    docker-compose up
```

## Rodando os testes

```shell
    yarn test
```
