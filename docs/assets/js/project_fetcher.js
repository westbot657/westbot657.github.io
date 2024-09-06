
// backgrounds: 466x516
const project_data = {
    "Insert Dungeon Name Here": {
        "url": "https://raw.githubusercontent.com/westbot657/DungeonEngine/main/project_meta.json",
        "background": "/assets/content/dungeon_engine_bg.png",
        "github": "https://github.com/westbot657/DungeonEngine"
    },
    "Ethereal Enchanting": {
        "url": "https://raw.githubusercontent.com/westbot657/EtherealEnchanting/master/project_meta.json",
        "background": "/assets/content/ethereal_enchanting_bg.png",
        "github": "https://github.com/westbot657/EtherealEnchanting"
    },
    "UI Library": {
        "url": "https://raw.githubusercontent.com/westbot657/UILibrary/main/project_meta.json",
        "background": "/assets/content/ui_library_bg.png",
        "github": "https://github.com/westbot657/UILibrary"
    },
    "Blockbench SGA Font": {
        "url": "https://raw.githubusercontent.com/westbot657/westbot657.github.io/main/project_metas/blockbench_sga_meta.json",
        "background": "/assets/content/blockbench_sga.png",
        "github": "https://github.com/westbot657/MinecraftTitleGeneratorFork"
    },
    "Blockbench TitleGenExtra": {
        "url": "https://raw.githubusercontent.com/westbot657/BlockBenchTitleGenExtra/main/project_meta.json",
        "background": "/assets/content/blockbench_titlegenextra_bg.png",
        "github": "https://github.com/westbot657/BlockBenchTitleGenExtra"
    },
    "Pixelator (Unmaintained)": {
        "url": "https://raw.githubusercontent.com/westbot657/PixelArt/main/project_meta.json",
        "background": "/assets/content/pixelator_bg.png",
        "github": "https://github.com/westbot657/PixelArt"
    }
}

function main() {

    let section = document.getElementById("projects_section");

    (async() => {
        let docHtml = "";
        for (const [key, val] of Object.entries(project_data)) {
            try {
                let meta = await axios.get(val.url);
                
                let lang_images = ""
                meta.data["languages"].forEach(element => {
                    lang_images += "<img class='project-lang' src='/assets/content/lang_"+ element +".png' alt='"+ element +"'>"
                });

                let card =
                "<div onclick='window.open(\""+ val.github +"\", \"_blank\")' class='project-card' style=\"background-image:url('"+ val.background +"')\">\
                <h1>"+ key +"</h1>\
                <p>"+ meta.data.description +"</p>\
                <p class='project-version'>"+ meta.data.version +"</p>\
                <div class='project-langs'>"+ lang_images +"</div>\
                </div>";

                docHtml += card;

            } catch {
                // maybe make a "failed to load" card
                let card =
                "<div class='project-card'>\
                <h1>"+ key +"</h1>\
                <p>Failed to load project data</p>\
                </div>";

                docHtml += card;
            }
            
        }

        section.innerHTML = docHtml;

    })()
}



main();