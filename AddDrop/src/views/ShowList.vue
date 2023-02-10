<script setup>
import { FilterID } from "../stores/Description";

const r = FilterID();
const data = r.getData;
</script>

<template>
    <div v-for="(x, index) in data" :key="index">
        {{ x.id }}
    </div>
</template>

<style>

</style>