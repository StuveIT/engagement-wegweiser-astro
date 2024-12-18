import { defineCollection, z } from "astro:content";
import { file } from "astro/loaders";
import { parse as parseCSV } from "csv-parse/sync";

const structure = defineCollection({
    loader: file("src/data/structure.json"),
    schema: z.object({
        question: z.string(),
        answers: z.record(z.array(z.string())),
    }),
});

const hsg = defineCollection({
    loader: file("src/data/hochschulgruppen.csv", { parser: (text) => parseCSV(text, { columns: true, skip_empty_lines: true, delimiter: ','}) }),
});

export const collections = { structure, hsg };