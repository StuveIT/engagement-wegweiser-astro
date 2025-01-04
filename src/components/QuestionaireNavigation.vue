<script setup lang="ts">
import type { Question } from '../models/Questionaire';

const props = defineProps<{
    questionaire: Question[];
    index: number;
}>();
</script>

<template>
<ul>
    <li v-for="question in props.questionaire" :key="question.id">
        <a :href="'#' + question.index">{{ question.id }}</a>
    </li>
</ul>
</template>

<style scoped>

</style>