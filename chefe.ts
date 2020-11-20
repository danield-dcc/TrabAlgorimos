
import { Status } from "./Status";
export class chefe extends Status {
  
   private _salario: number;

    constructor(nome: string) {
        super(nome)
        this._vida = 70;
        this._ataque = 10 + Math.round(Math.random() * 10);
        this._labia = 15 + Math.round(Math.random() * 5);
        this._salario = 18000.00;
    }

    public get nome():string {
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
    
    
    public set vida(vida: number) {
        this._vida = vida;
    }

    public showStatusChefe(): string {
        return (
            "\nNome: " + this.nome +
            "\nVida: " + this.vida +
            "\nLabia: " + this.labia +
            "\nSalário R$: " + this._salario + "\n"
        );
    }

}