<template>
  <div>
    <h1>Resume</h1>

    <div class="paragraph">
      I'm <strong>Florian Kotecki</strong>, a gameplay programmer with 5 years of experience.
      <br />After graduating from kindergarten, I've been enrolled in the army for 25 years, where I learned to destroy things in an amazing number of ways.
      <br />I joined the Delta Force because I thought it was Greek lessons, but I quickly adapted to this unexpected environment and became a key element.
      <br />I love teamwork, but I can also go in solo depending on the mission requirements.
      <br />
      <br />Right now I'm trying to find inner peace after I've read some personal development books. I'm looking for a job so if you have any opportunity feel free to 
      <router-link to="/contact">contact me</router-link>.
      <br />
      <br />Besides war, I'm passionate about firearms, martial arts, explosions, push-ups and flowers.

      <div style="margin-top:20px; margin-bottom:20px;">
        <a class="download-link" href="d/resume-en.pdf" target="_blank"><i class="fa fa-download fa-lg fa-fw"></i> Download as PDF 🇬🇧</a>
        <a class="download-link" href="d/cv-fr.pdf" target="_blank"><i class="fa fa-download fa-lg fa-fw"></i> Télécharger en PDF 🇫🇷</a>
        <div style="clear:both"></div>
      </div>
    </div>
    <div class="photo">
      <img src="img/resume-photo.jpg" alt="Photo of Florian" />
    </div>

    <div style="clear:both"></div>

    <div class="full-content">
      <h2>Work experience</h2>

      <h3>Gamedev - Voodoo</h3>
      <h4>January 2024 - April 2025</h4>

      <div>Joined a studio based on puzzle mobile casual games.</div>
      <div>With the aid of an artist and a game designer</div>

      <h3>Gamedev - YSO Corp</h3>
      <h4>January 2021 - November 2023</h4>

      <div>Design and development of mobile games, top to bottom, including art and analytics. Mostly in solo.</div>
      <div>Started with Hypercasual, followed by Hybrid Casual games.</div>
      <div>Also ported games from mobile to Nintendo Switch!</div>
      <div class="tech-stack">Even more Firearms, knives, grenades, Hummer vehicle, parachute,...</div>

      <h3>Fullstack developer internships</h3>
      <h4>2017 & 2019</h4>

      <div>Software development for remote control of a scientific instrument (Ion mass Spectometer)</div>
      <div class="tech-stack">C#, C++, Xaml, WPF, .NET,...</div>

      <h2>Skills</h2>

      <div class="skill-set">
        <h3>Lethal</h3>
        <SkillRate name="Handguns" :rate="5" />
        <SkillRate name="Rifles" :rate="5" />
        <SkillRate name="Shotguns" :rate="5" />
        <SkillRate name="Machineguns" :rate="5" />
        <SkillRate name="Missile launchers" :rate="5" />
        <SkillRate name="Knives" :rate="5" />
        <SkillRate name="Hand to hand combat" :rate="5" />
      </div>

      <div class="skill-set">
        <h3>Non-lethal</h3>
        <SkillRate name="Sneaking" :rate="1" />
        <SkillRate name="Negotiation" :rate="1" />
        <SkillRate name="Seduction" :rate="1" />
        <SkillRate name="Sense of humor" :rate="2" />
      </div>
      <div style="clear:both" />

      <h2>Education</h2>

      <h3>SUP Galilée: 2017 - 2020</h3>
      <h4>Master's Degree in IT Engineering</h4>
      <div>With this I can brag about having deep IT knowledge.</div>

      <h3>Paris 13 University : 2015 - 2017</h3>
      <h4>DUT INFO</h4>
      <div>Equivalent to a 2-year undergraduate degree, specialized in IT</div>
      <div>Gosh I had good teachers there. They gave me the love for Object Oriented Programming and so many IT stuff</div>

      <h2>Languages</h2>

      <h3>English</h3>
      <div>Fluent (C1 level in TOEIC) 
        <br />I swear I didn't use ChatGPT for this portoflio D:</div>

      <h3>French</h3>
      <div>My Native language. No merit here. </div>

      <h3>Japanese</h3>
      <div>Basic knowledge but I know lots of one-liners</div>

      <h2>Besides...</h2>
      <div>
        <h3>I ❤️ Video games</h3>
        <div>Solo or multiplayer, Old or recent, I have a large spectrum of personal favorites in their domain. Here are some of them among so many others:
          <br /> Solo : Hollow knight, Celeste, Ori, Dragon quest IX, Mystery dungeons, and recently Baldur's Gate 3 and Clair Obscur : Exepedition 33.
          <br /> Multiplayer : Monster Hunter, League of legends, Ravenswatch, Sea of thieves, even Patapon 3.

          <br /> Every game I played somehow played a part of who I am as of today.
        </div>

        <h3>I 🧡 Tabletop games</h3>
        <div>Dungeon and dragons or custom tabletop rules.. It gave me the love for good narratives.
          <br />Creating characters, making them grow, having complex confrontations where the villain is justified and not stereotypical.</div>
          <br />Also granted me an interest for voice acting.

        <h3>I 💛 To draw</h3>
        <div>I mostly draw on paper with good ol' pencils.
          <br />I have not enough talent to draw without a model tho. But I still love it.</div>

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SkillRate from "@/components/SkillRate.vue";

export default Vue.extend({
  name: "Resume",
  components: {
    SkillRate,
  },
});
</script>

<style scoped>
h2 {
  font-weight: 100;
  font-size: 2em;
  margin: 0px;
  padding: 0px;
  padding-top: 50px;
}
h3 {
  font-weight: 100;
  font-size: 1.6em;
  margin: 0px;
  padding: 0px;
  padding-top: 30px;
}
h4 {
  font-weight: 100;
  font-size: 1.3em;
  margin: 0px;
  padding: 0px;
  padding-top: 15px;
  font-style: italic;
}

.paragraph {
  max-width: 700px;
}

.download-link {
  float:left;
  margin-right: 50px;
}

.full-content div {
  max-width: 1500px;
}

.skill-set h3 {
  padding-bottom: 10px;
}

.photo img {
  height: 300px;
  width: 300px;
}

.tech-stack {
  font-style: italic;
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
    padding: 30px;
    padding-left: 80px;
  }

  .skill-set {
    float: left;
    padding-right: 60px; 
  }
}
</style>