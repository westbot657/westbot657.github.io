
const project_data = {
    "Insert Dungeon Name Here": {
        "url": "https://raw.githubusercontent.com/westbot657/DungeonEngine/main/project_meta.json"
    },
    "Ethereal Enchanting": {
        "url": "https://raw.githubusercontent.com/westbot657/EtherealEnchanting/main/project_meta.json"
    },
    "UI Library": {
        "url": "https://raw.githubusercontent.com/westbot657/UILibrary/main/project_meta.json"
    },
    "Blockbench TitleGenExtra": {
        "url": "https://raw.githubusercontent.com/westbot657/BlockBenchTitleGenExtra/main/project_meta.json"
    }
}


class Project {
    constructor(title, description, languages, version) {
        this.title = title;
        this.description = description
        this.languages = languages
        this.version = version
    }
}



(async() => {
    for (const [key, val] of Object.entries(project_data)) {
        const meta = await axios.get(val.url);
        
    }
})()
