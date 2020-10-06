import Felszállás from './Felszallas';

export default class FelszallasJegy extends Felszállás {
    private _jegyekSzama: number;

    constructor(sor: string){
        super(sor);
        this._jegyekSzama = parseInt(sor.split(" ")[4]);
    }
}