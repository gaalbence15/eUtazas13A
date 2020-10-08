import Felszállás from './Felszallas';

export default class FelszallasJegy extends Felszállás {
    private _jegyekSzama: number;

    public get ervenyesFelszallas(): boolean {
        return this._jegyekSzama > 0;
    }

    constructor(sor: string){
        super(sor);
        this._jegyekSzama = parseInt(sor.split(" ")[4]);
    }
}