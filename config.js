var color_active = "#a4de02";

function display_all() {
    document.getElementById("click_fru").style.borderBottomColor = "white";
    document.getElementById("click_nut").style.borderBottomColor = "white";
    document.getElementById("click_veg").style.borderBottomColor = "white";

    var elms = document.querySelectorAll("[id='fruits']");
    for (var i = 0; i < elms.length; i++) {
        if (elms[i].style.display == "none") elms[i].style.display = "block";
    }
    elms = document.querySelectorAll("[id='nuts']");
    for (var i = 0; i < elms.length; i++) {
        if (elms[i].style.display == "none") elms[i].style.display = "block";
    }
    elms = document.querySelectorAll("[id='vegetables']");
    for (var i = 0; i < elms.length; i++) {
        if (elms[i].style.display == "none") elms[i].style.display = "block";
    }
}

function display_vegetables() {
    var elms = document.querySelectorAll("[id='vegetables']");
    document.getElementById("click_fru").style.borderBottomColor = "white";
    document.getElementById("click_nut").style.borderBottomColor = "white";

    var btn = document.getElementById("click_veg");
    if (btn.style.borderBottomColor == color_active) {
        elms = document.querySelectorAll("[id='fruits']");
        btn.style.borderBottomColor = "white";
        for (var i = 0; i < elms.length; i++) {
            if (elms[i].style.display == "none") elms[i].style.display = "block";
        }
        elms = document.querySelectorAll("[id='nuts']");
        for (var i = 0; i < elms.length; i++) {
            if (elms[i].style.display == "none") elms[i].style.display = "block";
        }
    } else {
        btn.style.borderBottomColor = color_active;
        for (var i = 0; i < elms.length; i++) {
            if ((elms[i].style.display = "none")) elms[i].style.display = "block";
        }
        var elements = document.querySelectorAll("[id='fruits']");
        for (var i = 0; i < elements.length; i++) {
            if ((elements[i].style.display = "block"))
                elements[i].style.display = "none";
        }
        var elements_1 = document.querySelectorAll("[id='nuts']");
        for (var i = 0; i < elements_1.length; i++) {
            if ((elements_1[i].style.display = "block"))
                elements_1[i].style.display = "none";
        }
    }
}

function display_fruits() {
    document.getElementById("click_veg").style.borderBottomColor = "white";
    document.getElementById("click_nut").style.borderBottomColor = "white";
    var elms = document.querySelectorAll("[id='fruits']");
    var btn = document.getElementById("click_fru");
    if (btn.style.borderBottomColor == color_active) {
        btn.style.borderBottomColor = "white";
        elms = document.querySelectorAll("[id='vegetables']");
        for (var i = 0; i < elms.length; i++) {
            if (elms[i].style.display == "none") elms[i].style.display = "block";
        }
        elms = document.querySelectorAll("[id='nuts']");
        for (var i = 0; i < elms.length; i++) {
            if (elms[i].style.display == "none") elms[i].style.display = "block";
        }
    } else {
        btn.style.borderBottomColor = color_active;
        for (var i = 0; i < elms.length; i++) {
            if ((elms[i].style.display = "none")) elms[i].style.display = "block";
        }
        var elements = document.querySelectorAll("[id='vegetables']");
        for (var i = 0; i < elements.length; i++) {
            if ((elements[i].style.display = "block"))
                elements[i].style.display = "none";
        }
        var elements_1 = document.querySelectorAll("[id='nuts']");
        for (var i = 0; i < elements_1.length; i++) {
            if ((elements_1[i].style.display = "block"))
                elements_1[i].style.display = "none";
        }
    }
}

function display_nuts() {
    document.getElementById("click_fru").style.borderBottomColor = "white";
    document.getElementById("click_veg").style.borderBottomColor = "white";
    var elms = document.querySelectorAll("[id='nuts']");
    var btn = document.getElementById("click_nut");
    if (btn.style.borderBottomColor == color_active) {
        btn.style.borderBottomColor = "white";
        elms = document.querySelectorAll("[id='vegetables']");
        for (var i = 0; i < elms.length; i++) {
            if (elms[i].style.display == "none") elms[i].style.display = "block";
        }
        elms = document.querySelectorAll("[id='fruits']");
        for (var i = 0; i < elms.length; i++) {
            if (elms[i].style.display == "none") elms[i].style.display = "block";
        }
    } else {
        btn.style.borderBottomColor = color_active;
        for (var i = 0; i < elms.length; i++) {
            if ((elms[i].style.display = "none")) elms[i].style.display = "block";
        }
        var elements = document.querySelectorAll("[id='vegetables']");
        for (var i = 0; i < elements.length; i++) {
            if ((elements[i].style.display = "block"))
                elements[i].style.display = "none";
        }
        var elements_1 = document.querySelectorAll("[id='fruits']");
        for (var i = 0; i < elements_1.length; i++) {
            if ((elements_1[i].style.display = "block"))
                elements_1[i].style.display = "none";
        }
    }
}