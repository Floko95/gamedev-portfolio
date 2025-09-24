<template>
  <div style="margin-bottom: 80px;">
    <h1>Hello!</h1>

    <div class="paragraph">
      <div>
        I'm <strong>Kotecki Florian</strong>, a Gameplay programmer. with 5 years of experience. <br/>
        I'm also a passionate game developer (mostly gameplay programmer using Unity) and I love discussing, designing and developing apps and games in general. <br/>
        I've worked on games (either to release them, to showcase my capabilities using Unity, or just to play around), on non-games projects, and enjoyed some tech stacks at a few places. <br/>
      </div>

      <div style="margin-top: 20px;">I've worked on  <router-link to="/game-projects">stuff</router-link></div>

      <div style="margin-top: 40px;">I'm <strong>currently looking for a job</strong> <a href="mailto:flo.kotecki@gmail.com">flo.kotecki@gmail.com</a> or <router-link to="/contact">through here</router-link>.</div>
    </div>

    <div class="photo">
      <img src="img/avatar.jpg" alt="Avatar of Florian" /> 
    </div>

    <div style="clear:both"></div>

  </div>
</template>

<style scoped>
.paragraph {
  max-width: 700px;
  margin-bottom: 20px;
}

.photo {
  margin-top: 50px;
  text-align: center;
}

@media only screen and (min-width: 620px){
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 10px;
    padding-left: 80px;
  }
}

</style>