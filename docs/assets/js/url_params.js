

function set(name, value) {
    const urlParams = new URLSearchParams(window.location.search);

    if (urlParams.has(name)) {
        urlParams.set(name, value);

        const newUrl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?' + urlParams.toString();
        window.history.pushState({ path: newUrl }, '', newUrl);
    } else {
        urlParams.append('new_param', 'value');

        // Update the URL
        const newUrl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?' + urlParams.toString();
        window.history.pushState({ path: newUrl }, '', newUrl);
    }
}


function get(name, default_val=null) {
    const urlParams = new URLSearchParams(window.location.search);

    const param = urlParams.get(name);

    if (param != null) {
        return param;
    }
    return default_val;

}

function remove(name) {
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.delete(name);

    // Update the URL
    const newUrl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?' + urlParams.toString();
    window.history.pushState({ path: newUrl }, '', newUrl);
}


function goto_url(location) {
    const urlParams = new URLSearchParams(window.location.search);

    window.open(url + "?" + urlParams.toString());
}
