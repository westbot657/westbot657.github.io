

function load_gallery() {
    const elements = document.getElementsByClassName("gl")

    for (element of elements) {
        let div = document.createElement("div");

        let width = element.getAttribute("data-width");
        let desc = element.getAttribute("data-desc");
        let src = element.getAttribute("data-src");
        let alt = element.getAttribute("data-alt");
        let title = element.innerHTML;

        div.className = "gallery-card";

        div.innerHTML =
        "<h2>" + title + "</h2>" +
        "<div class='gallery-img-wrap'><img src='" + src + "&sz=w" + width + "' alt='" + alt +"' loading='lazy' /></div>" +
        "<p class='gallery-desc'>" + desc + "</p>"

        element.replaceWith(div);

    }

}

load_gallery();

