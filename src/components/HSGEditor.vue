<script setup lang="ts">
import { ref } from "vue";
import { db, HSG as HSGCollection } from "astro:db";
import HSG from "../../models/HSG";

// get all HSGs from the database
const hsgs = await db.select().from(HSGCollection).all();
const currentHSG = ref<HSG | null>(hsgs ? hsgs[0] : null);

const id = ref(currentHSG.value?.id || "");
const name = ref(currentHSG.value?.name || "");
const description = ref(currentHSG.value?.description || "");
const mail = ref(currentHSG.value?.mail || "");
const website = ref(currentHSG.value?.website || "");
const instagramHandle = ref(currentHSG.value?.instagramHandle || "");
const facebookHandle = ref(currentHSG.value?.facebookHandle || "");
const twitterHandle = ref(currentHSG.value?.twitterHandle || "");
const linkedinHandle = ref(currentHSG.value?.linkedinHandle || "");
const youtubeHandle = ref(currentHSG.value?.youtubeHandle || "");
const tiktokHandle = ref(currentHSG.value?.tiktokHandle || "");
const discordLink = ref(currentHSG.value?.discordLink || "");
const telegramLink = ref(currentHSG.value?.telegramLink || "");
const meeting = ref(currentHSG.value?.meeting || "");
const address = ref(currentHSG.value?.address || "");

// FORM
const updateForm = () => {
    id.value = currentHSG.value?.id || "";
    name.value = currentHSG.value?.name || "";
    description.value = currentHSG.value?.description || "";
    mail.value = currentHSG.value?.mail || "";
    website.value = currentHSG.value?.website || "";
    instagramHandle.value = currentHSG.value?.instagramHandle || "";
    facebookHandle.value = currentHSG.value?.facebookHandle || "";
    twitterHandle.value = currentHSG.value?.twitterHandle || "";
    linkedinHandle.value = currentHSG.value?.linkedinHandle || "";
    youtubeHandle.value = currentHSG.value?.youtubeHandle || "";
    tiktokHandle.value = currentHSG.value?.tiktokHandle || "";
    discordLink.value = currentHSG.value?.discordLink || "";
    telegramLink.value = currentHSG.value?.telegramLink || "";
    meeting.value = currentHSG.value?.meeting || "";
    address.value = currentHSG.value?.address || "";
}

// NAVIGATION
const prev = () => {
    // Get the previous HSG
    const index = hsgs.findIndex((hsg) => {
        return hsg.id === (currentHSG.value?.id || "");
    });
    currentHSG.value = hsgs[index - 1 < 0 ? hsgs.length - 1 : index - 1];
    console.log(currentHSG.value);

    // Update the form
    updateForm();
}

const next = () => {
    // Get the next HSG
    const index = hsgs.findIndex((hsg) => {
        return hsg.id === (currentHSG.value?.id || "");
    });
    currentHSG.value = hsgs[index + 1 >= hsgs.length ? 0 : index + 1];

    // Update the form
    updateForm();
}

// DATABASE
const save = () => {
    // Save the data to the database

}

const newHSG = () => {

}
</script>

<template>
    <div class="spread">
        <h1>HSG-Editor</h1>
        <button @click="newHSG">Neu</button>
    </div>

    <div class="spread">
        <button @click="prev()">Previous</button>
        <h2>{{ currentHSG?.id }}</h2>
        <button @click="console.log('Test')">Next</button>
    </div>

    <form>
        <h2>General</h2>
        <input type="text" placeholder="ID" v-model="id" />
        <input type="text" placeholder="Name" v-model="name" />
        <input type="email" placeholder="E-Mail" v-model="mail" />
        <input type="url" placeholder="https://some.website.de" v-model="website" />
        <!-- <input type="text" placeholder="Meeting" v-model="meeting" /> -->
        <input type="text" placeholder="Address" v-model="address" />
        <textarea placeholder="Description" v-model="description"></textarea>

        <h2>Socials</h2>
        <input type="text" placeholder="Instagram Handle" v-model="instagramHandle" />
        <input type="text" placeholder="Facebook Handle" v-model="facebookHandle" />
        <input type="text" placeholder="Twitter Handle" v-model="twitterHandle" />
        <input type="text" placeholder="LinkedIn Handle" v-model="linkedinHandle" />
        <input type="text" placeholder="YouTube Handle" v-model="youtubeHandle" />
        <input type="text" placeholder="TikTok Handle" v-model="tiktokHandle" />

        <input type="url" placeholder="Discord Link" v-model="discordLink" />
        <input type="url" placeholder="Telegram Link" v-model="telegramLink" />

        <button @submit="">Speichern</button>
    </form>
</template>

<style scoped>
.spread {
    display: flex;
    justify-content: space-between;
}
</style>