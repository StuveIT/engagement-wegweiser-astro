import { defineCollection, z } from "astro:content";
import { file } from "astro/loaders";
import { parse as parseCSV } from "csv-parse/sync";

const questionaire = defineCollection({
    loader: file("src/data/questionaire.json"),
    schema:
        z.record(  // Form Answers
            z.string(), // Answer String
            z.array(z.number()) // Answer Value
        )
});

const hsg = defineCollection({
    loader: file("src/data/hochschulgruppen.csv", { parser: (text) => parseCSV(text, { columns: true, skip_empty_lines: true, delimiter: ',' }) }),
});

export const collections = { questionaire, hsg };