function createElement(tag, class_name, inner, parent) {
    let temp = document.createElement(tag);
    temp.setAttribute('class', class_name);
    temp.innerHTML = inner;

    parent.appendChild(temp);

    return temp;
}

function norefAnchors() {
    let anchors = document.querySelectorAll('a');

    for (const i in anchors) {
        try {
            anchors[i].setAttribute('rel', 'noreferrer noopener');
            anchors[i].setAttribute('target', '_blank');
        }
        catch { }
    }
}