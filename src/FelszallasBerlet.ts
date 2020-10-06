import { stringify } from 'querystring';
import Felszállás from './Felszallas';

export default class FelszallasBerlet extends Felszállás{
    private _tipus: string;
    private _ervenyes: Date;

    constructor(sor: string){
        super(sor); // ososztaly konstruktorat hivja
        const m: string[] = sor.split(" ");
        this._tipus = m[3];
        const ev = parseInt(m[4].substring(0,4));
        const honap = parseInt(m[4].substring(4, 2)) - 1; 
        const nap = parseInt(m[4].substring(6, 2));
        this._ervenyes = new Date(ev, honap, nap);
    }
}