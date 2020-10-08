import fs from "fs";
import Felszállás from "./Felszallas";
import FelszallasBerlet from './FelszallasBerlet';
import FelszallasJegy from './FelszallasJegy';

export default class Megoldas {
    private _utasAdatok: Felszállás[] = [];

    public get felszallokSzama(): number {
        return this._utasAdatok.length;
    }

    public get ervenytelenFelszallas(): number {
        return this._utasAdatok.filter(x => !x.ervenyesFelszallas).length;
    }

    constructor(forras: string) {
        fs.readFileSync(forras)
            .toString()
            .split("\n")
            .forEach(i => {
                const aktSor: string = i.trim();
                const aktTipus: string = aktSor.split(" ")[3];
                if (aktTipus === "JGY") {
                    this._utasAdatok.push(new FelszallasJegy(aktSor));
                }else if (["FEB", "TAB", "NYB", "NYP", "RVS", "GYK"].includes(aktTipus)) {
                    this._utasAdatok.push(new FelszallasBerlet(aktSor));
                }
            });
    }
}
