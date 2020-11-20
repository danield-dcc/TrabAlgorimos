
export class Status{
        protected _nome: string;
        protected _vida: number;
        protected _ataque: number;
        protected _defesa: number;
        protected _labia: number;        

        constructor(nome : string){
            this._nome = nome;
            this._vida = 20 + Math.round(Math.random() * 30);
            this._ataque= 10 + Math.round(Math.random() * 10);
            this._defesa = 10 + Math.round(Math.random() * 10);
            this._labia = 10 + Math.round(Math.random() * 10);
            
        }

}