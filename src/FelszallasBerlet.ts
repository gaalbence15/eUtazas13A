import { stringify } from "querystring";
import Felszállás from "./Felszallas";

export default class FelszallasBerlet extends Felszállás {
    private _tipus: string;
    private _ervenyes: Date;

    public get ervenyesFelszallas(): boolean {
        //egy napnyi ezredmásdoperc hozzáadása
        // const ervenyessegLejar: number = this._ervenyes.valueOf() + 24 * 60 * 60 * 1000;
        // return this._ido.valueOf() < ervenyessegLejar;
        return this._ido <= this._ervenyes;
    }

    constructor(sor: string) {
        super(sor); // ososztaly konstruktorat hivja
        const m: string[] = sor.split(" ");
        this._tipus = m[3];
        const ev: number = parseInt(m[4].substring(0, 4));
        const honap: number = parseInt(m[4].substring(4, 2)) - 1;
        const nap: number = parseInt(m[4].substring(6, 2));
        this._ervenyes = new Date(ev, honap, nap, 23, 59, 59, 999);
    }
}
