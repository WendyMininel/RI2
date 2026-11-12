# Programação Orientada a Objetos — RI2

Repositório destinado ao desenvolvimento da atividade **RI2**, realizada na disciplina de **Programação Orientada a Objetos**, do curso de **Análise e Desenvolvimento de Sistemas (ADS)** da **Faculdade de Tecnologia de São José dos Campos (FATEC-SJC)**.

## Sobre o Projeto

O projeto consiste em uma aplicação desenvolvida em **JavaScript** para representar e organizar informações de clientes, utilizando conceitos de programação orientada a objetos.

A atividade explora a criação de objetos por meio de funções construtoras, a implementação de métodos para acesso e modificação de atributos e o relacionamento entre diferentes objetos.

O sistema também permite apresentar as informações dos clientes e organizar seus nomes em ordem alfabética.

## Funcionalidades

- Criação e armazenamento de informações de clientes.
- Cadastro de números de telefone com DDD.
- Representação de endereços completos.
- Implementação de métodos getters e setters.
- Conversão de atributos textuais para letras maiúsculas e minúsculas.
- Associação de objetos de telefone e endereço aos clientes.
- Exibição formatada das informações cadastrais.
- Organização dos clientes em ordem alfabética.
- Apresentação dos resultados no console.

## Estrutura das Classes

A aplicação utiliza três funções construtoras principais:

### TelefoneCelular

Responsável por representar as informações de contato telefônico de um cliente.

**Atributos:**
- `ddd`: código de área do telefone.
- `numero`: número do telefone celular.

**Métodos:**
- `getDDD()` e `setDDD()`
- `getNumero()` e `setNumero()`

### Endereco

Responsável por armazenar as informações de localização do cliente.

**Atributos:**
- `estado`: estado de residência.
- `cidade`: cidade de residência.
- `rua`: nome da rua.
- `numeroCasa`: número do imóvel.

**Métodos:**
- Getters e setters para os atributos.
- Métodos de conversão de rua, cidade e estado para letras maiúsculas e minúsculas.

### Cliente

Responsável por representar o cliente e reunir suas informações pessoais e de contato.

**Atributos:**
- `nome`: nome completo.
- `telefoneCelular`: objeto da função construtora `TelefoneCelular`.
- `email`: endereço de e-mail.
- `endereco`: objeto da função construtora `Endereco`.

**Métodos:**
- Getters e setters para os atributos.
- Métodos de conversão de nome e e-mail para letras maiúsculas e minúsculas.
- `descricao()`: retorna as informações do cliente, telefone e endereço de maneira organizada.

## Funcionamento

Inicialmente, o programa cria objetos de telefone, endereço e cliente utilizando funções construtoras e a palavra-chave `new`.

Os objetos são associados para representar as informações completas de cada cliente.

O método `descricao()` é utilizado para apresentar os dados cadastrais no console, incluindo nome, telefone e endereço.

Em seguida, são criados outros clientes e organizados em um array.

Para realizar a ordenação alfabética, o programa utiliza os métodos `sort()` e `localeCompare()`, permitindo comparar os nomes independentemente da utilização de letras maiúsculas ou minúsculas.

Por fim, os nomes dos clientes são exibidos no console em ordem alfabética.

## Conceitos Aplicados

- Programação orientada a objetos.
- Funções construtoras.
- Criação e instância de objetos.
- Propriedades e métodos.
- Utilização da palavra-chave `this`.
- Métodos getters e setters.
- Composição de objetos.
- Arrays de objetos.
- Estruturas de repetição.
- Manipulação de strings.
- Ordenação alfabética com `sort()` e `localeCompare()`.

## Tecnologias Utilizadas

- **JavaScript:** linguagem utilizada para implementar a lógica da aplicação.
- **Node.js:** ambiente de execução utilizado para executar o programa pelo terminal.


## Como Executar

**1.** Clone o repositório:

```bash
git clone https://github.com/WendyMininel/RI2.git
```

**2.** Acesse a pasta do projeto:

```bash
cd RI2
```

**3.** Execute o arquivo utilizando o Node.js:

```bash
node RI2.js
```

O terminal apresentará as informações de um cliente e, em seguida, a lista de clientes organizada em ordem alfabética.

## Objetivo Acadêmico

Aplicar os fundamentos da programação orientada a objetos por meio da implementação de funções construtoras, criação e manipulação de objetos, utilização de métodos getters e setters e estabelecimento de relacionamentos entre objetos.

A atividade também busca desenvolver habilidades relacionadas à organização de dados, manipulação de strings e utilização de algoritmos de ordenação.

## Autora

**Wendy Santos Mininel**

Análise e Desenvolvimento de Sistemas — FATEC São José dos Campos

[GitHub — WendyMininel](https://github.com/WendyMininel)

---

Projeto desenvolvido para fins acadêmicos na disciplina de Programação Orientada a Objetos.
