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
    description: string;
    index: number;
};

export enum QuestionaireState {
    QUESTIONS,
    WEIGHTING,
    RESULT
}

export const convertToQuestions = (collection: CollectionQuestionaire): Question[] => {
    return collection.map((question, index) => {
        return {
            id: question.id,
            description: question.data.description,
            answers: Object.entries(question.data.answers).map(([key, value]) => {
                return {
                    text: key,
                    score: value
                }}),
            index: index
        };
    });
}