<script setup lang="ts">
import type { Question } from "../models/Questionaire";
import { ref } from "vue";

// Define props that shall be passed to the component
const props = defineProps < {
    questionaire: Question[];
} > ();

// Define the current index of the questionaire
let currIndex = ref(0);
let question = ref(props.questionaire[currIndex.value]);

// Build the score array
const score = [];

for (const question of props.questionaire) {
    const emptyScore = [];
    question.answers[0].score.forEach((_, index) => {
        emptyScore.push(0);
    });

    score.push(emptyScore);
}

// Define the method to answer a question
function answerQuestion(answer: string) {
    // Update the score
    const answerIndex = question.value.answers.findIndex((a) => a.text === answer);
    score[currIndex.value] = question.value.answers[answerIndex].score;
    
    // Check if there are more questions
    if (currIndex.value < props.questionaire.length - 1) {
        // Increment the index and set the next question
        currIndex.value++;
        question.value = props.questionaire[currIndex.value];
    } else {
        // Finish the questionaire
        currIndex.value = props.questionaire.length; - 1;
    }
}
</script>

<template>
    <!-- Questionaire itself -->
    <div v-if="currIndex < props.questionaire.length">
        <h3>{{ question.id }}</h3>

        <div id="options">
            <button v-for="answer in question.answers" @click="answerQuestion(answer.text)">
                {{ answer.text }}
            </button>
        </div>
    </div>
    <!-- Result page -->
    <div v-else>
        <h3>Resultat</h3>
        <p>Diese Gremien(-positionen) könnten dich interessieren!</p>
        <pre>{{ score }}</pre>
    </div>
</template>

<style scoped>
h3 {
    margin-top: 0;
}

#options {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 2rem;

    padding: 0 2em;
}

#options>* {
    flex: 1;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: var(--primary);
    border: none;
    border-radius: var(--border-radius);

    text-align: center;

    margin: 1rem 0;

    font-size: 1.2rem;
    text-transform: capitalize;

    padding: 1rem;
    margin: 0;
}

#options>*:hover {
    background-color: var(--accent);
    cursor: pointer;
}
</style>
