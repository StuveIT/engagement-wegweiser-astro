export default abstract class Ref {
    id: string;

    constructor(id: string) {
        this.id = id;
    }

    dereference(): Object | null {
        throw new Error("Method not implemented.");
    }
}