<template>
  <div class="q-ma-none q-pa-lg bg-image3">
    <q-card class="transparent q-mb-md" flat>
      <q-card-section class="">
        <div class="text-h5 text-bold q-my-md text-center text-white">
          Skills
        </div>
        <div class="text-subtitle1 justify-center text-grey">
          <div class="column justify-center text-center">
            <SkillCard
              name="Languages"
              :technologies="['CSharp', 'C', 'Python', 'Java']"
              status="Good"
              :image="languagesImage"
              url=""
              class="q-ma-sm q-pa-sm flex flex-center"
            >
            </SkillCard>
            <SkillCard
              name="Frontend Technologies"
              :technologies="['HTML/CSS', 'JavaScript', 'Jquery', 'Ajax']"
              status="Good"
              :image="frontendImage"
              url=""
              class="q-ma-sm q-pa-sm flex flex-center"
            >
            </SkillCard>

            <SkillCard
              name="Javascript FrameWorks"
              :technologies="['VueJS 3', 'ViteJs']"
              status="Good"
              :image="jsframeworkImage"
              url=""
              class="q-ma-sm q-pa-sm flex flex-center"
            >
            </SkillCard>
            <SkillCard
              name="CSS FrameWorks"
              :technologies="['Quasar', 'BootStrap', 'Vuetify']"
              status="Good"
              :image="cssframeworkImage"
              url=""
              class="q-ma-sm q-pa-sm flex flex-center"
            >
            </SkillCard>
            <SkillCard
              name="Python Libraries"
              :technologies="[
                'Python3',
                'ScikitLearn',
                'NumPy',
                'Pandas',
                'Dash',
                'Plotly',
              ]"
              status="In Progress"
              :image="pythonImage"
              url=""
              class="q-ma-sm q-pa-sm flex flex-center"
            >
            </SkillCard>
            <SkillCard
              name="Backend Technologies"
              :technologies="[
                'ASP.Net',
                'DotNet Core',
                '.Net MVC',
                'WebApi',
                'Minimal Api',
              ]"
              status="Good"
              :image="backendImage"
              url=""
              class="q-ma-sm q-pa-sm flex flex-center"
            >
            </SkillCard>
            <SkillCard
              name="ORM"
              :technologies="['Dapper', 'Petapoco']"
              status="Good"
              :image="ormImage"
              url=""
              class="q-ma-sm q-pa-sm flex flex-center"
            >
            </SkillCard>
            <SkillCard
              name="Database"
              :technologies="['SQL Server']"
              status="Good"
              :image="databaseImage"
              url=""
              class="q-ma-sm q-pa-sm flex flex-center"
            >
            </SkillCard>
          </div>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>
<style>
</style>

<script>
// import { ref } from "vue";
import { useQuasar } from "quasar";
import SkillCard from "../components/SkillCard.vue";
import languagesImage from "../assets/backgrounds/developer4.png";
import frontendImage from "../assets/backgrounds/frontend6.png";
import jsframeworkImage from "../assets/backgrounds/vue3.png";
import cssframeworkImage from "../assets/backgrounds/quasar2.png";
import pythonImage from "../assets/backgrounds/python3.png";
import backendImage from "../assets/backgrounds/Backend-Developers_1.png";
import ormImage from "../assets/backgrounds/orm-slide.png";
import databaseImage from "../assets/backgrounds/db1.png";

export default {
  name: "Skills",
  components: {
    SkillCard,
  },
  methods: {},
  setup() {
    const q = useQuasar();

    return {
      q,
      languagesImage,
      frontendImage,
      jsframeworkImage,
      cssframeworkImage,
      pythonImage,
      backendImage,
      ormImage,
      databaseImage,
    };
  },
};
</script>
<style lang="sass">
.expand-border
  border: 1px solid white
</style>
