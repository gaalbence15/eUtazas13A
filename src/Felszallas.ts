export default abstract class Felszállás{
    protected _megalloSorszama: number;
    protected _ido: Date;
    protected _kartyaAzon: string;

    constructor(sor: string) {
        const m: string[] = sor.split(" ");
        this._megalloSorszama = parseInt(m[0]);
        // Felszállás időpontja: ééééhhnn-óópp
        const ev = parseInt(m[1].substring(0,4));
        const honap = parseInt(m[1].substring(4, 2)) - 1; // TS-JS hónapok számozása 0-val indul
        const nap = parseInt(m[1].substring(6, 2));
        const ora = parseInt(m[1].substring(9, 2));
        const perc = parseInt(m[1].substring(11, 2));
        this._ido = new Date(ev, honap, nap, ora, perc, 0, 0);
        this._kartyaAzon = m[2];
    }
}