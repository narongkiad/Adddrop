<script setup>
import { RouterLink, RouterView } from "vue-router";
import { ref } from 'vue';

const tab = ref(null);

</script>

<template>
  <v-app class="bg">
    <v-app-bar>
      <v-card style="width: 100%;">
        <v-tabs v-model="tab" bg-color="blue">
          <v-tab value="one">
            <RouterLink to="/">Home</RouterLink>
          </v-tab>
          <v-tab value="two">
            <RouterLink to="/np">News</RouterLink>
          </v-tab>
          <v-tab value="three">
            <RouterLink to="/sl">รายชื่อวิชาในแผนการเรียน</RouterLink>
          </v-tab>
          <v-tab value="four">
            <RouterLink to="/ad">เพิ่มถอนรายวิชา</RouterLink>
          </v-tab>
        </v-tabs>
      </v-card>
    </v-app-bar>
    <v-main>
      <RouterView />
    </v-main>
  </v-app>


</template>

<style scoped>
.bg {
  background-color: rgb(139, 182, 209);
}
</style>
