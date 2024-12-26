import type { InferEntrySchema, RenderedContent } from "astro:content";

export type CollectionQuestionaire = {
    id: string;
    body?: string;
    collection: "questionaire";
    data: InferEntrySchema<"questionaire">;
    rendered?: RenderedContent;
    filePath?: string;
}[];

export type Answer = {
    text: string;
    score: number[];
}

export type Question = {
    id: string;
    answers: Answer[];
    index: number;
};

export const convertToQuestions = (collection: CollectionQuestionaire): Question[] => {
    return collection.map((question, index) => {
        return {
            id: question.id,
            answers: Object.entries(question.data).map(([key, value]) => {
                return {
                    text: key,
                    score: value
                }}),
            index: index
        };
    });
}