# Consultar Perfis

Esse projeto é uma aplicação web que consulta perfis no GitHub através do login do usuário. E retorna todos os repositórios do usuário mostrando a descrição e qual linguagem é utilizada.

## Documentação da API

#### Retorna os Repositório 

```http
  GET /users/${login}/repos
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `login`      | `string` | **Obrigatório**. Login do usuário |

## Tecnologias 

 - React
 - TypeScript
 - Styled Components

