import { defineTable, column, defineDb } from 'astro:db';

const HSG = defineTable({
  columns: {
    id: column.text({ primaryKey: true }),
    name: column.text(),
    description: column.text(),
    mail: column.text(),
    website: column.text(),
    instagramHandle: column.text(),
    facebookHandle: column.text(),
    twitterHandle: column.text(),
    linkedinHandle: column.text(),
    youtubeHandle: column.text(),
    tiktokHandle: column.text(),
    discordLink: column.text(),
    telegramLink: column.text(),
    meeting: column.text(),
    address: column.text(),
  },
});

const Question = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    title: column.text(),
    description: column.text(),
    answers: column.json() // should have a title and a score for each category
  }
});

const HSGAnswer = defineTable({
  columns: {
    hsgID: column.text({ references: () => HSG.columns.id }),
    questionID: column.number({ references: () => Question.columns.id }),
    answer: column.number()
  },
  indexes: [
    { on: ["hsgID", "questionID"], unique: true },
  ]
});

export default defineDb({
  tables: { HSG, Question, HSGAnswer }
});
