class ListaCSS {
    constructor() {
        this.propriedade = [];
    }

    criarLista() {
        const readline = require('readline');
        const rl = readline.createInterface({
          input: process.stdin,
          output: process.stdout,
          prompt: 'Digite uma propriedade CSS: '
        });
        
        rl.prompt();
        rl.on('line', (valor) => {
            
            if (valor.toLowerCase() === "sair") {
                rl.pause()
                console.log('\nSaindo...\nEssa é sua lista de propriedades:\n');
                
                console.log(this.propriedade.sort().join('\n'))
                process.exit(0);        
            } else if (valor.trim() === "") {
                console.log(`Campo vazio! Digite uma propriedade CSS\n`)
            } else {
                this.propriedade.push(valor)
                console.log(valor)
                console.log(this.propriedade.length)
                console.log(`\n${valor} adicionado na lista!\n`)
            }
            rl.prompt();
        }).on('close', () => {
            console.log('Saiu!');
            process.exit(0);
        });
    }

    getPropriedade() {
        return this.propriedade;
    }

    setPrioridade(val) {
        this.propriedade = val;
    }
}

let listaNova = new ListaCSS();
listaNova.criarLista()