<template>
  <div>
    <h1>Games I worked on</h1>

    <div style="margin-bottom: 30px;">
      The following are some games I've made or heavily contributed to.  Click for more details!
    </div>

    <ProjectsList v-bind:projects="projects" />

    <div style="margin-top: 20px;">
      I am still working to display more projects I worked on! <br>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProjectsList from "@/components/ProjectsList.vue";
import gameProjectsData from "@/data/GameProjectsData.ts";

export default Vue.extend({
  name: "GameProjects",
  components: {
    ProjectsList,
  },
  data: function () {
    return {
      projects: gameProjectsData,
    };
  },
});
</script>
