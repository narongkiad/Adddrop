<script setup>
import { FilterID } from "../stores/Description";

const r = FilterID();
let data = r.getData;
</script>

<template>
  <div class="error">Error 404</div>
  <v-card class="mx-auto" max-width="344" v-for="(x, index) in data" :key="index">
    <v-card-text>
      <div>Word of the Day</div>
      <p class="text-h4 text--primary">
        {{ x.id }}
      </p>
      <p>adjective</p>
      <div class="text--primary">
        {{ x.name }}
        <br />
        {{ x.gpa }}
      </div>
    </v-card-text>
    <v-card-actions>
      <v-btn variant="text" color="teal-accent-4" @click="reveal = true">
        Learn More
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <v-card v-if="reveal" class="transition-fast-in-fast-out v-card--reveal" style="height: 100%;">
        <v-card-text class="pb-0">
          <p class="text-h4 text--primary"></p>
          <p></p>
        </v-card-text>
        <v-card-actions class="pt-0">
          <v-btn variant="text" color="teal-accent-4" @click="reveal = false">
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-expand-transition>
  </v-card>
</template>

<style>
h1 {
  color: rgb(0, 0, 0);
}
.error {
  color: red;
  text-align: center;
  font-size: 50px;
}
</style>