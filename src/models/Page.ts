import { getCollection } from "astro:content";
import HSGRef from "./references/HSGRef";
import PageRef from "./references/PageRef";

export default class Page {
    id: string;
    question: string;
    answers: Record<string, HSGRef[] | PageRef>;

    constructor(id: string, question: string, answers: Record<string, HSGRef[] | PageRef>) {
        this.id = id;
        this.question = question;
        this.answers = answers;
    }

    /**
     * 
     * @param key The plain text answer, that will be shown to the user
     * @returns The PageRef or HSGRef that is associated with the answer
     */
    getAnswerRef(key: string): HSGRef[] | PageRef {
        return this.answers[key];
    }

    getAnswers(): Record<string, HSGRef[] | PageRef> {
        return this.answers;
    }

    /**
     * 
     * @returns The list of answers that will be shown to the user
     */
    listAnswers(): string[] {
        return Object.keys(this.answers);
    }

    static async fromCollection({ id, data }: { id: string, data: { question: string, answers: Record<string, string[]> } }): Promise<Page> {
        // construct answers
        let answers: Record<string, HSGRef[] | PageRef> = {};
        
        for (const [key, value] of Object.entries(data.answers)) {
            if (value.length === 1) { // if there is only one answer, it is probably a PageRef
                const hypPage = await Page.find(value[0]);

                if (hypPage) // if the page exists, it is a PageRef
                    answers[key] = new PageRef(hypPage.id);
                else // if the page does not exist, it is a HSGRef
                    answers[key] = [new HSGRef(value[0])];
            } else { // if there are multiple answers, they are HSGRefs
                answers[key] = value.map((ref) => new HSGRef(ref));
            }
        }

        return new Page(id, data.question, answers);
    }

    static async find(id: string): Promise<Page | null> {
        const structure = await getCollection("structure");
        const pageObj = structure.find((page) => page.id === id);

        if (!pageObj)
            return null;

        return Page.fromCollection(pageObj);
    }
}