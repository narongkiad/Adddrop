import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const FilterID = defineStore("register", () => {
  const register = ref([]);
  
  const getData = computed(() => register.value * 2);
  function storeData(x) {
    register.value.push(x);
  }
  return { register, getData, storeData };
});
