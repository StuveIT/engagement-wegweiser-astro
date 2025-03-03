import { getCollection } from "astro:content";
import Ref from "./Ref";
import HSG from "../HSG";

export default class HSGRef extends Ref {
    constructor(id: string) {
        super(id);
    }

    async dereference(): Promise<HSG | null> {
        const structure = await getCollection("hsg");
        const hsgObj = structure.find((hsg) => hsg.id === this.id);

        if (!hsgObj)
            return null;

        // construct proper HSG
        const hsg = HSG.fromCollection(hsgObj);

        return hsg;
    }
}