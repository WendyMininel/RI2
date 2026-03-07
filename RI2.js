
function TelefoneCelular (ddd, numero){
    this.ddd=ddd;
    this.numero=numero;

    this.getDDD= function(){return this.ddd;};
    this.setDDD= function(novoDDD){this.ddd= novoDDD;};

    this.getNumero= function(){return this.numero;};
    this.setNumero= function(novoNumero){this.numero=novoNumero;};
}

function Endereco (estado, cidade, rua, numeroCasa){
    this.rua=rua;
    this.numeroCasa=numeroCasa;
    this.cidade=cidade;
    this.estado=estado;

    this.getRua= function(){return this.rua;};
    this.setRua= function(novaRua){this.rua=novaRua;};
    this.getRuaMin= function(){return this.rua.toString().toLowerCase();};
    this.getRuaMa= function(){return this.rua.toString().toUpperCase();};

    this.getNumeroCasa= function(){return this.numeroCasa;};
    this.setNumeroCasa= function(novoNumeroCasa){this.numeroCasa=novoNumeroCasa;};

    this.getCidade= function(){return this.cidade;};
    this.setCidade= function(novaCidade){this.cidade= novaCidade;};
    this.getCidadeMin= function(){return this.cidade.toString().toLowerCase();};
    this.getCidadeMa= function(){return this.cidade.toString().toUpperCase();};

    this.getEstado= function(){return this.estado;};
    this.setEstado= function(novoEstado){this.estado=novoEstado;};
    this.getEstadoMin= function(){return this.estado.toString().toLowerCase();};
    this.getEstadoMa= function(){return this.estado.toString().toUpperCase();};

}

function Cliente (nome, telefoneCelular, email, endereco){
    this.nome= nome;
    this.telefoneCelular= telefoneCelular;
    this.email= email;
    this.endereco= endereco;

    this.getNome= function(){return this.nome;};
    this.setNome= function(novoNome){this.nome= novoNome;};
    this.getNomeMin= function(){return this.nome.toString().toLowerCase();};
    this.getNomeMa= function(){return this.nome.toString().toUpperCase();};

    this.getTelefoneCelular= function(){return this.telefoneCelular;};
    this.setTelefoneCelular= function(novoTelefoneCelular){this.telefoneCelular= novoTelefoneCelular;};

    this.getEmail= function(){return this.email;};
    this.setEmail= function(novoEmail){this.email= novoEmail;};
    this.getEmailMin= function(){return this.email.toString().toLowerCase();};
    this.getEmailMa= function(){return this.email.toString().toUpperCase();};

    this.getEndereco= function(){return this.endereco;};
    this.setEndereco= function(novoEndereco){this.endereco= novoEndereco;};

    this.descricao = function() {
        return `---------------\n`+
               `Informações do Cliente: \n${this.nome}\n` +
               `---------------\n`+
               `---------------\n`+
               `Telefone: \nDDD: ${this.telefoneCelular.getDDD()}\n` +
               `Número: ${this.telefoneCelular.getNumero()}\n` +
               `---------------\n`+
               `Endereço:\n` +
               `Rua: ${this.endereco.getRua()}\n` +
               `Número: ${this.endereco.getNumeroCasa()}\n` +
               `Cidade: ${this.endereco.getCidade()}\n` +
               `Estado: ${this.endereco.getEstado()}\n`+
               `---------------\n`;
    };
}


let telefone= new TelefoneCelular ('11', '999999999')
let endereco= new Endereco ('SP', 'São Paulo', 'Av. Paulista', '987')
let cliente= new Cliente ('Carlos Conrado Heinz', telefone, 'carlos.comrado@app.com', endereco)

console.log(cliente.descricao());

let cliente1= new Cliente('Wendy Mininel', telefone, ' wendy@gmail.com', endereco);
let cliente2= new Cliente('Ana Julia Rubim', telefone, ' anarubim@gmail.com', endereco);
let cliente3= new Cliente('Gabrielle Novaes', telefone, ' gabi@gmail.com', endereco);
let cliente4= new Cliente('Gustavo Garcia', telefone, ' gugu@gmail.com', endereco);
let cliente5= new Cliente('Ana Flávia Galvão', telefone, ' aninhas@gmail.com', endereco);

let clientes = [cliente, cliente1, cliente2, cliente2, cliente4, cliente5];

console.log('Clientes ordenados por ordem alfabética:\n')

let clientesOrdenadosAlf = [cliente, cliente1, cliente2, cliente3, cliente4, cliente5].sort((a, b) => a.getNomeMin().localeCompare(b.getNomeMin()));

for (let i = 0; i < clientesOrdenadosAlf.length; i++) {
    console.log(clientesOrdenadosAlf[i].getNome());
}


