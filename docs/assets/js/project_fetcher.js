
// backgrounds: 466x516
const project_data = {
    "Turing-APIs": {
        "url": "https://raw.githubusercontent.com/westbot657/westbot657.github.io/main/project_metas/turing_apis.json",
        "background": "/assets/cointent/turing_apis.png",
        "github": "https://github.com/westbot657/Turing-APIs"
    },
    "RenderForge": {
        "url": "https://raw.githubusercontent.com/westbot657/westbot657.github.io/main/project_metas/render_forge.json",
        "background": "/assets/content/render_forge.png",
        "github": "https://github.com/westbot657/RenderForge"
    },
    "Pycrust": {
        "url": "https://raw.githubusercontent.com/westbot657/westbot657.github.io/main/project_metas/pycrust.json",
        "background": "/assets/content/pycrsut.png",
        "github": "https://github.com/westbot657/PyCrust"
    },
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
