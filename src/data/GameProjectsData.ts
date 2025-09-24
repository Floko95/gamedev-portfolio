import ProjectData from '@/data/ProjectData.ts'

export default [
    new ProjectData("project-1", "Expedition 60/4", "img/projects/Exp60_4_Showcase_2.gif",
    `
    <div class="paragraph">
     <strong>Expedition 60/4</strong> is a solodev project I've worked on for two months after the release of </br>
     Clair Obscur : Expedition 33. My favorite project so far.
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/Cc2TdNXlTKo?si=g8LOADXbhnMRDtDh" frameborder="0" allowfullscreen></iframe>
    </div>
    

    <div class="paragraph">
        Inspired by this recent masterpiece which to me represents the 10th art in all its glory,</br>
I had to pay tribute to it and use my skillset Unity visual assets to solodev a demo showcasing similar gameplay mechanics.</br>
</br>
Three new members join the team of this Turn-Based RPG, each with a unique mechanic and a full set of synergistic abilities, all featuring their own cinematic sequences.</br>
</br>
On the technical side, includes:</br>
    <ul>
    <li>-State Machines (hierarchical & automated) for world exploration and turn-based management</li>
    <li>-Node-based logic for abilities and their effects</li>
    <li>-Additive scene management with animated transitions</li>
    <li>-A sprinkle of SOAP here and there</li>
    <li>-Dynamic Timelines with custom Playables for abilities and their visual feedback</li>
    </ul>

    </div>

    <div class="paragraph center">
        
    </div>

    `, "#23bd69", true, true),
    new ProjectData("project-2", "Casual Action/Arcade games", "img/projects/AAGames.gif", `
    <div class="paragraph">
        The following are games made during my time at <strong>Yso Corp</strong> while aiming to do bigger scopes than Hypercasual games. Each game took around 1 month to produce the coreloop.
    </div>
   
    

    `, "#5a78af",false, true),
    new ProjectData("project-3", "Casual Puzzle games", "img/projects/Puzzles.gif", `

    <div class="paragraph">
        The following are games made during my time at <strong>Voodoo</strong>, in a studio focused on <strong>Casual Puzzle games</strong>.
        Each game took around 1/1.5 month to produce the coreloop, Level design tools and infinite durability.
    </div>

    
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>
    </div>


    `, "#383838", true, false),
    new ProjectData("project-4", "Hypercasual games", "img/projects/SG_trailer.gif", `
    
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/bq5aXkLZ-Gw" frameborder="0" allowfullscreen></iframe>
    </div>
    <div class="paragraph center">
    <a href="https://play.google.com/store/apps/details?id=com.YsoCorp.StretchGuy&hl=fr" target="_blank"><img src="img/projects/play-store-logo.png" alt="Play Store badge" style="height:80px;"></a>
    <a href="https://apps.apple.com/fr/app/stretch-guy/id1535922800" target="_blank"><img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="Download on App Store" style="height:80px;"></a>
    </div>

    <hr>

    <div class="paragraph">
        <div class="hc-left">
            <div>
                <iframe class="youtube-hc"
                    src="https://www.youtube.com/embed/kJjkUEezuA4" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media;
                    gyroscope; picture-in-picture;
                     web-share"
                    allowfullscreen>
                </iframe>
            </div>
        </div>

        <div class="hc-right">
            <div class="hc-title">Blitz Army</div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <br> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            <br> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </div>
        </div>
    </div>

    <hr>

    <div class="paragraph center">
        <-------- Why are u like dis, tu peux pas être normal comme tout le monde jerôme BAHNON FALLAIT QUE TU CASSES LES COUILLES.
    </div>

    `, "#e80fb7", true, false),
    new ProjectData("project-5", "Nintendo Switch porting", "img/projects/Toonsters_Trailer.gif", `
    <div class="paragraph">
        <strong>Cloud Drew Land</strong> is a thing of beauty that I am so proud of. I could write about it for hours.
        <br/>Image by <a target="_blank" href="https://www.pexels.com/fr-fr/@cottonbro">cottonbro</a>.
    </div>
    
    <div class="paragraph">
        <iframe class="youtube" src="https://www.youtube.com/embed/bY0MDlcQR98?si=pkiLBm-Gg73ifUAc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
    `, "#f23427", false, true)
];