import fs from "fs";
import Felszállás from "./Felszallas";

export default class Megoldas {
    private _utasAdatok: Felszállás[] = [];

    constructor(forras: string) {
        fs.readFileSync(forras)
            .toString()
            .split("\n")
            .forEach(i => {});
    }
}
