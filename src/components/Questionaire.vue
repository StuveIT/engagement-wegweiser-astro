<script setup lang="ts">
import { QuestionaireState, type Question } from "../models/Questionaire";
import { ref } from "vue";

// Define props that shall be passed to the component
const props = defineProps<{
    questionaire: Question[];
}>();
const questions = props.questionaire;

/* ---------------------------------------------
    State Management
--------------------------------------------- */
// Define the current state of the questionaire
let state = ref(QuestionaireState.QUESTIONS);

// Define the current index of the questionaire
let currIndex = ref(0);

/**
 * Sets the current index in the questionaire
 * @param index The index to set the question to
 */
function setIndex(index: number) {
    if(index >= props.questionaire.length) {
        // stay at the last question
        currIndex.value = props.questionaire.length - 1;

        // switch to the weighting state
        state.value = QuestionaireState.WEIGHTING;
    } else if(index < 0) {
        // stay at the first question
        currIndex.value = 0;

        // switch to the question state
        state.value = QuestionaireState.QUESTIONS;
    } else {
        // set the index and the question
        currIndex.value = index;

        // update the state
        state.value = QuestionaireState.QUESTIONS;
    }
}

/* ---------------------------------------------
    Question Management
--------------------------------------------- */
/**
 * Returns the current question
 * @returns The current question
 */
function currentQuestion() {
    return questions[currIndex.value];
}

/* ---------------------------------------------
    Answer Management
--------------------------------------------- */
const answers: number[] = [];
const weighting: boolean[] = [];

/**
 * Answers the current question
 * @param answer The answer to the question
 */
function answerQuestion(answer: string) {
    // Update the answer array
    const answerIndex = questions[currIndex.value].answers.findIndex((a) => a.text === answer);
    answers[currIndex.value] = answerIndex;

    setIndex(currIndex.value + 1);
}

/**
 * Computes the score of the filled out questionaire
 * @returns The score of the questionaire
 */
function computeScore() {
    // Compute the score
    let score: number[] = [];

    // Compute the score for each question
    for(const question of questions) {
        const answer = answers[question.index];

        // add the score elementwise
        score.forEach((s, i) => {
            let questionScore = question.answers[answer].score[i];
            
            // Check if the question is weighted
            if(weighting[question.index]) {
                questionScore *= 2;
            }

            score[i] += questionScore;
        });
    }

    return score;
}
</script>

<template>
    <div v-if="state === QuestionaireState.QUESTIONS">
        <!-- Questionaire itself -->
        <h3>{{ currentQuestion().id }}</h3>
        <p>{{ currentQuestion().description }}</p>

        <div id="options">
            <button v-for="answer in currentQuestion().answers" @click="answerQuestion(answer.text)">
                {{ answer.text }}
            </button>
        </div>
    </div>
    <div v-else-if="state === QuestionaireState.WEIGHTING">
        <!-- Weighting page -->
        <h3>Gewichtung der Thesen</h3>
        <p>Schau dir nochmal die Thesen an und markiere die Thesen, die mit doppelter Gewichtung ins Endergebnis
            einfließen sollen.</p>

        <div class="btnbox">
            <button @click="currIndex = 0; state = QuestionaireState.QUESTIONS;">Bearbeiten</button>
            <button @click="state = QuestionaireState.RESULT">Auswerten</button>
        </div>

        <label v-for="question in props.questionaire" :key="question.index" class="checkbox">
            <input type="checkbox" class="qa-thesis-checkbox">
            <span class="checkmark"></span>
            <div class="thesis-overview">
                <h3>{{ question.id }}</h3>
                <small>{{ question.answers[answers[question.index].valueOf()].text }}</small>
            </div>
        </label>
        
        <div class="btnbox">
            <button @click="currIndex = 0; state = QuestionaireState.QUESTIONS;">Bearbeiten</button>
            <button @click="state = QuestionaireState.RESULT">Auswerten</button>
        </div>
    </div>
    <div v-else>
        <!-- Result page -->
        <h3>Resultat</h3>
        <p>Diese Gremien(-positionen) könnten dich interessieren!</p>
    </div>
</template>

<style scoped>
h3 {
    margin-top: 0;
}

.btnbox {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 1rem;

    margin: 16px 0;

    width: 100%;
}

.checkbox {
    display: flex;
    flex-direction: row;
    align-items: start;
    user-select: none;

    cursor: pointer;

    padding: 0 2em;
}

.checkbox.inactive {
    opacity: .5;
}

.checkbox>input[type="checkbox"] {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
}

.checkmark {
    border: 2px solid var(--accent);
    background-color: var(--secondary);
    min-height: 1.8em;
    height: 1.8em;
    min-width: 1.8em;
    width: 1.8em;

    display: flex;
    justify-content: center;
    align-items: center;

    margin: 4px 1em 0 0;
}

.checkbox:not(.inactive)>input[type="checkbox"]:checked~.checkmark {
    background-color: var(--accent);
}

.checkbox:not(.inactive)>input[type="checkbox"]:checked~.checkmark::after {
    content: '2x';
}

.checkbox:not(.inactive):hover input~.checkmark {
    background-color: var(--primary);
}

.checkbox:hover:not(.inactive) input:checked~.checkmark {
    background-color: var(--accent);
}

.thesis-overview {
    display: flex;
    flex-direction: column;
    margin-bottom: .5rem;
}

.thesis-overview>* {
    margin: 0;
}

input~label {
    margin-top: 8px;
}

#options {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 1rem;

    padding: 0 2em;
}

#options button {
    flex: 1;
    min-width: 90px;
}
</style>
