
//classe
import prompt from "prompt-sync";
import { chefe } from "./chefe";
import { rato } from "./Rato";
import { Status } from "./Status";

let Chefe: chefe = new chefe('Chefe');
let Rato: rato = new rato("Rato");

export class Farrapo extends Status {
    // private _labia: number;
    private _agilidade: number;
    private _salario: number;

    constructor(nome: string) {
        super(nome);
        this._labia = 10 + this.randomico(5);
        this._agilidade = this._agilidade = 10 + this.randomico(10);
        this._salario = 950;


        //classe
        //método
    }

    public get nome(): string {
        return this._nome
    }
    public get vida(): number {
        return this._vida;
    }
    public get labia(): number {
        return this._labia;
    }
    public get agilidade(): number {
        return this._agilidade;
    }
    public get ataque(): number {
        return this._ataque;
    }
    public get defesa(): number {
        return this._defesa;
    }
    public get salario(): number {
        return this._salario;
    }



    public set vida(vida: number) {
        this._vida = vida;
    }

    public set labia(labia: number) {
        this._labia = labia;
    }
    public set salario(salario: number) {
        this._salario = salario;
    }



    public showstatus(): string {
        return (
            "\nNome: " + this.nome +
            "\nVida: " + this.vida +
            "\nLabia: " + this.labia +
            "\nAgilidade: " + this.agilidade +
            "\nSalário R$: " + this.salario.toFixed(2) + "\n"
        );
    }



    public treinarLabia(): number {
        let astucia = this.randomico(2); // ganha até 2 de labia
        this.labia = this.labia + astucia;
        if (this.labia > 20) {
            this.labia = 20;   // a labia não pode ser maior que vinte 
        }
        return astucia;
    }

    public receceDanoContas(): number {
        let dano = 10 + this.randomico(7);    //perde até 17 de vida
        this.vida = this.vida - dano;
        this.vidaMenorque();                              //vida não pode ter valor negativo
        console.log(`Dano :: ${dano}`);
        console.log(`Vida :: ${this.vida}`);
        return dano;
    }

    public recebeDanoAgilidade(): number {
        let dano = 2 + this.randomico(6);    //perde até 5 de vida
        this.vida = this.vida - dano;
        console.log(`Dano :: ${dano}`);
        return dano;
    }

    public recebeDanoChefe(): number {
        let dano = 9 + this.randomico(6);    //perde até 15 de vida
        this.vida = this.vida - dano;
        return dano;
    }


    public escolhasSairComCriancas(): string {
        return ("\nVocê decidiu ir na praça com as crianças\n" +
            "Onde você vai brincar com elas:\n" +
            "1. Brincar com elas no balanço\n" +
            "2. Ir com elas no escorregador\n" +
            "3. Dar de comer aos pombos\n" +
            "4. Voltar para casa\n"
        );
    }


    public sairComCriancas(sairCriancas: number): void {

        if (sairCriancas == 1) {
            console.log("\nEnquanto brincava com as crinças um dos balanços arrebentou e voltou na sua cara");
            this.checarAgilidadeUm();               // checar agilidade
            console.log(`Vida:: ${this.vida}`);
            this.isAlive();

        } else if (sairCriancas == 2) {

            console.log("\nO escorregador está quebrado e as crianças choraram por 30 mim");
            this.checarAgilidadeDois();
            console.log(`Vida:: ${this.vida}`);
            this.isAlive();

        } else if (sairCriancas == 3) {

            console.log("\nOs pombos atacaram o seu filho mais novo e você teve que correr com as crianças para um lugar seguro");
            this.checarAgilidadeTres();
            console.log(`Vida:: ${this.vida}`);
            this.isAlive();

        }
    }


    public checarAgilidadeUm(): void {
        let reflexo = 15 + this.randomico(5); //ponto de checagem de agilidade randômico de 10 a 20
        if (reflexo > this.agilidade) {
            this.recebeDanoAgilidade();
        } else {
            console.log("\nVocê conseguiu desviar do balanço e segurar a criança antes dela cair no chão...sem derramar o chimarrão.");
        }
    }
    public checarAgilidadeDois(): void {
        let reflexo = 15 +this.randomico(5); //ponto de checagem de agilidade randômico de 10 a 20
        if (reflexo > this.agilidade) {
            this.recebeDanoAgilidade();

        } else {
            console.log("\nVocê jogou as crianças para cima e fingiu que era um escorregador.");
        }
    }
    public checarAgilidadeTres(): void {
        let reflexo = 15 + this.randomico(5); //ponto de checagem de agilidade randomico de 10 a 20
        if (reflexo > this.agilidade) {
            this.recebeDanoAgilidade();

        } else {
            console.log("\nVocê mordeu um dos pombos e o resto fugiu em pânico.");
        }
    }





    public escolhasPagarContas(): string {
        return ("\nO salário é pouco e você só tem dinheiro para uma dessas opções: \n" +
            "1. Pagar a pensão das crianças\n" +
            "2. Comprar um saco de arroz"
        )
    }

    public pagarContas(contas: number): void {
        if (contas == 1) {
            console.log("\nVocê esta passando fome." +
                "\nFicou sem arroz para o carreteio de fim de semana.");
            this.receceDanoContas();
            this.isAlive();

        } else if (contas == 2) {
            console.log("\nVocê não pagou a pensão das crianças." +
                "\nAo saber disso seu ex-mulher te sentou o sarrafo.");
            this.receceDanoContas();
            this.isAlive();
        }
    }

    public ListaOpcoesTrabalho(): string {
        return ("\nVocê está cheio de relatorios para fazer, mas o seu seu chefe passsa fumando um charuto cubano e dando gargalhada: \n" +
            "O que você decide fazer\n" +
            "1. Terminar de fazer os relatorios?\n" +
            "2. Encarar o seu chefe e pedir um aumento?\n")
    }

    public EscolhaOpcoesTrabalho(opcoes: number): void {
        if (opcoes == 1) {
            console.clear();
            console.log("\nEnquanto tentava fazer fazer o seu trabalho, um rato invadiu seu escrito...\n" +
                "Ele está tentando roubar seu relatório!!!\n" +
                "Lute!");
            this.mensagemAvancar();
            this.lutarContraRato();

        } else {
            console.log("\nSeu chefe te encara com a fúria de mil sois...lute");
            this.lutarContraChefe();
            this.isAlive();
        }
    }

    public lutarContraRato(): void {
        console.clear();
        while (this.isAlive() || Rato.vida > 0) {
            // let escolha = Number(prompt("Escolha: "))
            console.clear();
            let dados = 1 + this.randomico(9)               //valor randômico de 1 a 10
            let ataqueFarrapo = dados + this.ataque;                    //valor total do ataque = soma o valor de ataque com o valor do dado
            let ataqueRato = dados + Rato.ataque;                      // ataque inimigo
            let danoRato = Math.abs(ataqueFarrapo - Rato.defesa);
            let danoFarrapo = Math.abs(ataqueRato - this.defesa);       //dano = valor do ataque menos o valor da defesa
            this.vida = this.vida - danoFarrapo;
            Rato.vida -= danoRato;

            console.log(`Dano em Farrapo ${danoFarrapo}`);
            console.log(`Dano em rato ${danoRato}`);
            console.log("+++____+++");
            this.vidaMenorque();
            console.log(`Vida::${this.vida}`);
            console.log(`Vida Rato::${Rato.vida}`);


            if (this.vida <= 0) {
                this.estaMorto();
                break;
            } else if (Rato.vida <= 0) {
                console.log("Parabéns! Você salvou o relatorio e o seu emprego!" +
                    "\n...agora volte ao trabalho.\n");
                break;
            }

            this.mensagemAvancar();

        }
    }

    public lutarContraChefe(): void {
        let dados = 1 + this.randomico(9) //valor randômico de 1 a 10
        let LabiaTotalFarrapo = this.labia + dados;
        let dados2 = 1 + this.randomico(9) //valor randômico de 1 a 10
        let LabiaTotalChefe = Chefe.labia + dados2;

        if (LabiaTotalFarrapo > LabiaTotalChefe) {
            console.log("Seu chefe ficou impressionado e te deu um aumento!! Parabéns!");
            let aumento: Number = this.aumentoSalario();    //funcao para calculara o aumento de sálario
            console.log(`Voce recebeu uma aumento de R$: ${aumento.toFixed(2)}`);


        } else {
            console.log("\nSeu chefe riu da sua ousadia e deu trabalho extra para fazer");
            this.receceDanoContas();
            this.isAlive();
        }

    }

    public aumentoSalario(): number {
        let aumento = 100 + this.randomico(400);
        this.salario = this.salario + aumento;
        return aumento;
    }


    public descancar(): number {
        let descancar = 2 + this.randomico(8) // descançar de 2 a 10 pv
        this.vida = this.vida + descancar;
        return descancar;
    }

    public vidaMaiorQue(): void {
        if (this.vida > 50) {
            this.vida = 50;
        }
    }

    public vidaMenorque(): void {   // não mostrar vida com valor negativo
        if (this.vida < 0) {
            this.vida = 0;
        }
    }

    public isAlive(): boolean {
        if (this.vida > 0) {
            return true;
        } else {
            return false;
        }
    }


    public estaMorto(): string {
        return ("Chama a samu... o gaúcho morreu!"
        );
    }


    public mensagemAvancar(): void {
        let acao = prompt();
        let escolha: number = 0;
        escolha = +acao("\nPrecione para avançar")
    }


    public randomico(fator: number): number {
        return Math.round(Math.random() * fator);
    }

}

//status = mim 10, max 20;

