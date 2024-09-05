
const project_data = {
    "Insert Dungeon Name Here": {
        "url": "https://raw.githubusercontent.com/westbot657/DungeonEngine/main/project_meta.json",
        "background": "/assets/content/dungeon_engine_bg.png"
    },
    "Ethereal Enchanting": {
        "url": "https://raw.githubusercontent.com/westbot657/EtherealEnchanting/master/project_meta.json",
        "background": ""
    },
    "UI Library": {
        "url": "https://raw.githubusercontent.com/westbot657/UILibrary/main/project_meta.json",
        "background": ""
    },
    "Blockbench TitleGenExtra": {
        "url": "https://raw.githubusercontent.com/westbot657/BlockBenchTitleGenExtra/main/project_meta.json",
        "background": ""
    }
}

function main() {

    let section = document.getElementById("projects_section");

    (async() => {
        for (const [key, val] of Object.entries(project_data)) {
            try {
                let meta = await axios.get(val.url);
                
                let lang_images = ""
                meta.data["languages"].forEach(element => {
                    lang_images += "<img class='project-lang' src='/assets/content/lang_"+ element +".png' alt='"+ element +"'>"
                });

                let card =
                "<div class='project-card' style=\"background-image:url('"+ val["background"] +"')\">\
                <h1>"+ key +"</h1>\
                <p>"+ meta.data.description +"</p>\
                <p class='project-version'>"+ meta.data.version +"</p>\
                <div class='project-langs'>"+ lang_images +"</div>\
                </div>";

                section.innerHTML += card;

            } catch {
                // maybe make a "failed to load" card
                let card =
                "<div class='project-card'>\
                <h1>"+ key +"</h1>\
                <p>Failed to load project data</p>\
                </div>";

                section.innerHTML += card;
            }
            
        }
    })()
}



main();