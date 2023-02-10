<script setup>
import { ref } from "vue";
import courseData from "../Subject.json";
import { FilterID } from "../stores/Description";

const rigister = FilterID();
const course_Code = ref("");
let coursedata = ref([]);
function addID() {
  const data = courseData.find((elem) => elem.id == course_Code.value);
  if (data) {
    coursedata.value.push(data);
    course_Code.value = "";
  } else {
    alert("รหัสวิชาไม่ถูกต้อง");
  }
}
function remove(id) {
  if (confirm("ต้องการลบรายวิชาหรือไม่ ?")) {
    coursedata.value.pop(id);
  }
}
function Confermed() {
  if (coursedata.value.length != 0) {
    coursedata.value.forEach((subject) => {
      rigister.storeData(subject);
    });
    console.log(rigister.getData);
    coursedata.value = [];
    alert("ตรวจสอบตรงหน้าลงทะเบียน");
  } else {
    alert("โปรดเลือกวิชาก่อนทำการลงทะเบียน");
  }
}
</script>

<!-- ========== script end / start template========== -->

<template>
  <!-- ========== Header ========== -->
  <div class="dd">
    <center>
      <h1>เพิ่ม/ลดรายวิชา</h1>
    </center>
    <v-row align="center" justify="center">
      <v-col cols="12">
        <v-hover v-slot="{ isHovering, props }" disabled>
          <v-card :elevation="isHovering ? 12 : 2" class="mx-auto" height="600" max-width="700" v-bind="props">
            <v-card-text class="my-4 text-center text-h6">
              <div>
                <!-- ========== from ========== -->
                <div class="head">
                  <h4>ค้นหาวิชาที่ต้องการลงทะเบียน</h4>
                  <br />
                  <v-sheet width="300" class="mx-auto">
                    <v-form validate-on="submit" @submit.prevent="addID">
                      <v-text-field type="text" v-model="course_Code" maxlength="8" label="รหัสรายวิชา"></v-text-field>
                      <v-btn type="submit" block class="mt-2">Submit</v-btn>
                    </v-form>
                  </v-sheet>
                </div>
                <!-- ========== Preview Search ========== -->
                <article v-if="(x = courseData.find((elem) => elem.id == course_Code))">
                  <div class="border">
                    <p>
                      <b>รหัสวิชา กก: </b> <span>{{ x.id }}</span>
                    </p>
                    <p>
                      <b>ชื่อวิชา : </b> <span>{{ x.name }}</span>
                    </p>
                    <p>
                      <b>หน่วยกิต : </b><span>{{ x.gpa }}</span>
                    </p>
                  </div>
                </article>
                <article v-else>
                  <br />
                  <p>ไม่พบผลการค้นหา</p>
                  <br />
                </article>
                <hr />
                <!-- ========== Submit ========== -->
                <div>
                  <br />
                  <h4>รายวิชาที่เลือก</h4>
                  <br>
                  <v-table>
                    <thead class="t1">
                      <tr>
                        <th class="text-center">รหัสวิชา</th>
                        <th class="text-center">ชื่อวิชา</th>
                        <th class="text-center">หน่วยกิต</th>
                      </tr>
                    </thead>
                    <!-- ========== StoreData ========== -->
                    <tbody>
                      <tr v-for="(course, index) in coursedata" :key="index">
                        <td>{{ course.id }}</td>
                        <td>{{ course.name }}</td>
                        <td>{{ course.gpa }}</td>
                        <!-- ========== remove ========== -->
                        <td>
                          <v-btn variant="flat" color="error"><button @click="remove(index)">ลบ</button></v-btn>
                        </td>
                      </tr>
                    </tbody>
                  </v-table>
                  <br>
                  <v-btn color="blue">
                    <button @click="Confermed">ยืนยันการลงทะเบียน</button>
                  </v-btn>
                </div>
              </div>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </div>
</template>
<!-- ========== template end / start style========== -->
<style scoped>
.border {
  margin: 20px auto;
  padding: 0.5em;
  border: 3px solid gray;
}

template {
  text-align: center;
}

.head {
  padding-bottom: 5%;
  padding-top: 5%;
}

.h1 {
  background-color: black;
}

.dd {
  background-color: rgb(139, 182, 209);
}
</style>