<script setup>
import { ref } from 'vue';

const show1 = ref(false);
const show2 = ref(false);
const show3 = ref(false);


</script>

<template>
  <h1>ข่าวสาร</h1>
  <center>
    <v-carousel style="width: 80% ">
      <v-carousel-item src="https://erp.mju.ac.th/picture/information/97ca821fb0cf4db2862e557a450bebaas.jpg"
        cover></v-carousel-item>

      <v-carousel-item src="https://erp.mju.ac.th/picture/information/bcbcc7b16cc140e0ae7d1ece92959a57s.jpg"
        cover></v-carousel-item>

      <v-carousel-item src="https://erp.mju.ac.th/picture/information/847a5514f7cd44129b924d159bf9cd94s.JPG"
        cover></v-carousel-item>
    </v-carousel>
  </center>
  <br>
  <br>
  <v-container>
    <v-row no-gutters>
      <v-col order="last">
        <v-sheet class="pa-2 ma-2">
          <v-card class="mx-auto" max-width="344">
            <v-img src="https://erp.mju.ac.th/picture/information/97ca821fb0cf4db2862e557a450bebaas.jpg" height="200px"
              cover></v-img>

            <v-card-title>
              คณะศิลปศาสตร์ จัดโครงการอบรมจริยธรรมการวิจัยในคนและพัฒนาศักยภาพนักวิจัย
            </v-card-title>

            <v-card-subtitle>
              วันที่ 10/02/2566
            </v-card-subtitle>

            <v-card-actions>
              <v-btn color="orange-lighten-2" variant="text" @click="show1 = !show1">
                อ่านเพิ่มเติม
              </v-btn>

              <v-spacer></v-spacer>

            </v-card-actions>

            <v-expand-transition>
              <div v-show="show1">
                <v-divider></v-divider>

                <v-card-text>
                  วันที่ 8 กุมภาพันธ์ 2566 คณะศิลปศาสตร์
                  ได้จัดกิจกรรมแลกเปลี่ยนเรียนรู้รูปแบบ/เทคนิคการเขียนเอกสารเพื่อเตรียมความพร้อมในการส่งแบบเสนอโครงการวิจัยเพื่อขอรับการพิจารณารับรองจริยธรรมการวิจัยในคน
                  ภายใต้โครงการอบรมจริยธรรมการวิจัยในคนและพัฒนาศักยภาพนักวิจัย
                  โดยมีวัตถุประสงค์เพื่อเตรียมความพร้อมสำหรับนักวิจัย
                  ให้เขียนเอกสารโครงการวิจัยได้อย่างถูกต้องในการยื่นขอรับรองจริยธรรมการวิจัยในคนมหาวิทยาลัยแม่โจ้
                  ภายในกิจกรรม ผู้ช่วยศาสตราจารย์ ดร.ชนาพร ขันธบุตร คณบดีคณะศิลปศาสตร์
                  ได้ให้เกียรติต้อนรับผู้เข้าร่วมกิจกรรม ดำเนินรายการโดย อาจารย์ ดร.อิทธิพงษ์ ทองศรีเกตุ
                  การบรรยายให้ความรู้ได้รับเกียรติจากวิทยากร 4 ท่าน จากคณะกรรมการจริยธรรมการวิจัยในคน มหาวิทยาลัยแม่โจ้
                  สาขาสังคมศาสตร์และมนุษยศาสตร์ มาแบ่งปันความรู้
                  เทคนิคในการเขียนข้อเสนอโครงการเพื่อรับรองจริยธรรมการวิจัย ในหลากหลายประเด็น อาทิ
                  - อาจารย์ ดร.ปารดา เดชะประทุมวัน ให้ความรู้เกี่ยวกับความสำคัญในการยื่นขอรับรองจริยธรรมการวิจัยในคน
                  และรูปแบบการเขียน/หลักการพิจารณาโครงการวิจัยที่เกี่ยวข้องกับงานวิจัยด้านมนุษยศาสตร์
                  - อาจารย์ ดร.จิรวัฒน์ รักชาติ ให้ความรู้
                  ประสบการณ์และแนะนำเทคนิคการเขียนโครงการวิจัยที่เกี่ยวข้องกับงานวิจัยในกลุ่มเปราะบาง ชาติพันธุ์
                  - ผู้ช่วยศาสตราจารย์ ดร.เมธี เมธาสิทธิ สุขสำเร็จ
                  ได้แนะนำเทคนิคการเขียนโครงการวิจัยที่ไม่เกี่ยวข้องกันคน
                  นอกจากนี้ ดร.อนุพันธุ์ สมบูรณ์วงศ์ เจ้าหน้าที่จากสำนักวิจัยและส่งเสริมวิชาการการเกษตร
                  มหาวิทยาลัยแม่โจ้ได้แนะนำช่องทางการยื่นเอกสาร กระบวนการพิจารณา
                  และแบบฟอร์มในการยื่นขอรับรองจริยธรรมการวิจัยในคน มหาวิทยาลัยแม่โจ้
                  เพื่อให้อาจารย์ได้ส่งเอกสารได้ครบถ้วนถูกต้องก่อนนำเข้าสู่กระบวนการพิจารณาจากคณะกรรมการจริยธรรมการวิจัยในคนต่อไป
                  ณ ห้องประชุม 105 อาคารประเสริฐ ณ นคร คณะศิลปศาสตร์ มหาวิทยาลัยแม่โจ้
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </v-sheet>
      </v-col>

      <v-col order="last">
        <v-sheet class="pa-2 ma-2">
          <v-card class="mx-auto" max-width="344">
            <v-img src="https://erp.mju.ac.th/picture/information/bcbcc7b16cc140e0ae7d1ece92959a57s.jpg" height="200px"
              cover></v-img>

            <v-card-title>
              ม.แม่โจ้ ได้จัดการประกวดสุนทรพจน์ภาษาอังกฤษ
            </v-card-title>

            <v-card-subtitle>
              MJU Liberal Arts English Speech Contest 2023 ภายใต้หัวข้อ 'Self-Improvement and Empowerment.'
            </v-card-subtitle>

            <v-card-actions>
              <v-btn color="orange-lighten-2" variant="text" @click="show2 = !show2">
                อ่านเพิ่มเติม
              </v-btn>

              <v-spacer></v-spacer>

            </v-card-actions>

            <v-expand-transition>
              <div v-show="show2">
                <v-divider></v-divider>

                <v-card-text>
                  วันพุธที่ 1 กุมภาพันธ์ 2566 คณะศิลปศาสตร์ มหาวิทยาลัยแม่โจ้ ได้จัดการประกวดสุนทรพจน์ภาษาอังกฤษ MJU
                  Liberal Arts English Speech Contest 2023 ภายใต้หัวข้อ 'Self-Improvement and Empowerment.'

                  โดยในงาน มีผู้เข้าร่วมประกวดทั้งหมด 11 คนจาก 4 มหาวิทยาลัยทั่วภาคเหนือของประเทศไทย ทั้งนี้
                  เรายังได้รับเกียรติการกรรมการทั้งหมดจาก 4 ประเทศ ได้แก่ อินเดีย ไทย อังกฤษ และเกาหลีใต้

                  ผู้ชนะการประกวดได้แก่: รางวัลที่ 1 นายทิชานนท์ กันยาประสิทธิ์ มหาวิทยาลัยแม่โจ้, รางวัลที่ 2
                  นางสาวธันยาพร จิตไมตรีกุล มหาวิทยาลัยราชภัฏเชียงราย, รางวัลที่ 3 นางสาววิภารดี วงษ์แปง
                  มหาวิทยาลัยราชภัฏเชียงใหม่ และรางวัลชมเชย 3 รางวัล ได้แก่ นายณัฐชนน เซ็งปี, นางสาวลลิตพรรณ สอนทรง
                  และนางสาววราลี ทองใส มหาวิทยาลัยแม่โจ้

                  ขอแสดงความยินดีกับผู้ได้รับรางวัลและผู้เข้าประกวดทุกคน
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </v-sheet>
      </v-col>

      <v-col order="last">
        <v-sheet class="pa-2 ma-2">
          <v-card class="mx-auto" max-width="344">
            <v-img src="https://erp.mju.ac.th/picture/information/847a5514f7cd44129b924d159bf9cd94s.JPG" height="200px"
              cover></v-img>

            <v-card-title>
              อพ.สธ.-มจ. จัด workshop งานฐานทรัพยากรท้องถิ่น หลักสูตร 6 งาน ฐานทรัพยากรท้องถิ่น รุ่นที่ 1/2566
            </v-card-title>

            <v-card-subtitle>
              วันที่ 06/02/2566
            </v-card-subtitle>

            <v-card-actions>
              <v-btn color="orange-lighten-2" variant="text" @click="show3 = !show3">
                อ่านเพิ่มเติม
              </v-btn>

              <v-spacer></v-spacer>

            </v-card-actions>

            <v-expand-transition>
              <div v-show="show3">
                <v-divider></v-divider>

                <v-card-text>
                  วันที่ 31 มกราคม - 2 กุมภาพันธ์ 2566 ที่ผ่านมา ศูนย์ประสานงาน อพ.สธ.-มจ. นำโดย อาจารย์ ดร.ทิพย์สุดา
                  ตั้งตระกูล ผู้อำนวยการศูนย์ฯ และ ผศ.ดร.เยาวนิตย์ ธาราฉาย รองผู้อำนวยการศูนย์ฯ
                  ได้จัดการฝึกอบรมปฏิบัติการงานฐานทรัพยากรท้องถิ่น หลักสูตร 6 งาน ฐานทรัพยากรท้องถิ่น รุ่นที่ 1/2566 ณ
                  ห้องประชุมข้าวหอมมะลิ ชั้น 1 อาคารเฉลิมพระเกียรติสมเด็จพระเทพรัตนราชสุดา มหาวิทยาลัยแม่โจ้
                  จังหวัดเชียงใหม่ โดยได้รับเกียรติจาก รองศาสตราจารย์ ดร.วีระพล ทองมา อธิการบดี เป็นประธานในพิธีเปิด
                  ผู้ช่วยศาสตราจารย์พาวิน มะโนชัย รองอธิการบดี ร่วมพิธีเปิดงาน และได้รับเกียรติจาก นายชนันต์ติณณ์
                  เทียนทอง วิทยากรจากโครงการอนุรักษ์พันธุกรรมพืชอันเนื่องมาจากพระราชดำริฯ
                  และองค์การบริการส่วนตำบลกึ้ดช้าง ร่วมเป็นวิทยากรปฏิบัติการ (แลกเปลี่ยนเรียนรู้) โดยมีผู้เข้าร่วมจำนวน
                  79 ท่าน จาก 42 หน่วยงาน
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>

  
</template>

<style scope>
h1 {
  text-align: center;
  font-size: 50px;
}
</style>


