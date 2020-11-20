import prompt from "prompt-sync";
import { chefe } from "./chefe";
import { Farrapo } from "./Farrapo";
import { rato } from "./Rato";


let farrapo: Farrapo = new Farrapo('Farrapo');
let Chefe: chefe = new chefe('Chefe');
let Rato: rato = new rato('Rato')



let teclado = prompt();
let option: number = 0;
console.clear();
while (option != 9 && farrapo.isAlive()) {         
    console.log("+===== Farrapo Souls ======+")
    console.log("|1. Imprimir atributos     |")
    console.log("|2. Treinar labia          |")
    console.log("|3. Ir trabalhar           |")      
    console.log("|4. Sair com as crianças   |")
    console.log("|5. Pagar contas           |")
    console.log("|6. Descançar              |")
    console.log("|9. Sair                   |")
    console.log("+==========================+");


    option = +teclado('Faça uma opção: ');

    switch (option) {
        case 1:
            console.clear();
            console.log(farrapo.showstatus());
            console.log(Chefe.showStatusChefe());
            console.log(Rato.showStatusRato());
            break;
        case 2:
            console.clear();
            let astucia: number = farrapo.treinarLabia();
            console.log(`\nLabia + ${astucia}`);
            farrapo.recebeDanoAgilidade(); //calculo de dano feito na função agilidade
            farrapo.isAlive();
            
            break;

        case 3:
            console.clear();
            console.log(farrapo.ListaOpcoesTrabalho());
            let opcoes: number = +teclado("Qual deles você vai escolher?");
            farrapo.EscolhaOpcoesTrabalho(opcoes);
            break;

        case 4://SAIR COM CRIANÇAS
            console.clear();
            console.log(farrapo.escolhasSairComCriancas());
            let sairCriancas: number = +teclado("Qual deles você vai escolher? ")
            farrapo.sairComCriancas(sairCriancas);
            farrapo.isAlive();
            break;

        case 5:
            console.clear();
            console.log(farrapo.escolhasPagarContas());
            let contas: number = +teclado("Qual deles voce vai escolher?")
            farrapo.pagarContas(contas)
            farrapo.isAlive();
            break;

        case 6:
            console.clear();
            console.log("\nVocê tirou o dia de folga");
            let descancar: number = farrapo.descancar();
            farrapo.vidaMaiorQue();
            console.log(`Recuperou ${descancar} pontos de vida\n`);
            break;
     

        default:
            break;
    }

}

if (farrapo.isAlive() == false) {
    console.log(farrapo.estaMorto());

}

//praise the churrasco \o/