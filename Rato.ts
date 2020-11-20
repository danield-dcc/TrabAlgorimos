import { Status } from "./Status";
export class rato extends Status {
    

    constructor(nome: string) {
        super(nome)
        this._vida = 30;
        this._ataque = 10 + Math.round(Math.random() * 10);
        this._labia = 15 + Math.round(Math.random() * 5);

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
    public get ataque(): number {
        return this._ataque;
    }
    public get defesa(): number {
        return this._defesa;
    }

    //PARA ALTERAR VALORES DE CLASSE
    public set vida(vida: number) {
        this._vida = vida;
    }

    public showStatusRato(): string {
        return (
            "\nNome: " + this.nome +
            "\nVida: " + this.vida +
            "\nLabia: " + this.labia +
            "\nAtaque: " + this.ataque +
            "\nDefesa: " + this.defesa + "\n"
        );
    }

}