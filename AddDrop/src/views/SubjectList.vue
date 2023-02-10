<script setup>
import Subject from "../Subject.json";

const Data = Subject;

</script>

<template>
  <h1>แผนการเรียน</h1>
  <v-table height="700px" style="margin: 40px;">
    <thead class="t1">
      <tr>
        <th class="text-center">
          รหัสรายวิชา
        </th>
        <th class="text-center">
          ชื่อรายวิชา
        </th>
        <th class="text-center">
          หน่วยกิต
        </th>
        <th class="text-center">
          ชั้นปี-เทอม
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in Data" :key="item.id">
        <td class="text-center">{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td class="text-center">{{ item.gpa }}</td>
        <td class="text-center">{{ item.yearterm }}</td>
      </tr>
    </tbody>
  </v-table>
</template>

<style scope>
  .t1{
    background-color: hwb(155 17% 23%);
    margin: 40px;
  }
  h1{
    text-align: center;
  }
  tbody{
    color: black;
  }

</style>
