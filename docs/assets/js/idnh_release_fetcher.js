const version_file_url = "https://raw.githubusercontent.com/westbot657/DungeonEngine/main/version_file.json"

function fetch_releases() {
    let section = document.getElementById("version-listing")

    (async() => {
        docHtml = "";
        try {
            let version_data = (await axios.get(version_file_url)).data;

            let latest_url = version_data.latest.url
            let latest_ver = version_data.latest.version

            if (latest_url != "" && latest_url.startsWith("https://")) { // make sure the url is from my repository just in case

            }


        } catch {
            docHtml = "<li>Unable to load releases at this time. Please try again later.</li>"
        }

        if (docHtml != "") {
            section.innerHTML = docHtml;
        }
    })();
}


//fetch_releases()
