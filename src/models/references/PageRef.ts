import { getCollection } from "astro:content";
import Ref from "./Ref";
import Page from "../Page";

export default class PageRef extends Ref {
    constructor(id: string) {
        super(id);
    }

    async dereference(): Promise<Page | null> {
        const structure = await getCollection("structure");
        const structureObj = structure.find((hsg) => hsg.id === this.id);

        if (!structureObj)
            return null;

        // construct proper HSG
        const page = Page.fromCollection(structureObj);

        return page;
    }
}