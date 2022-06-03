var color_active = "#a4de02";

function display_all() {
    document.getElementById("fru").style.borderBottomColor = "white";
    document.getElementById("nut").style.borderBottomColor = "white";
    document.getElementById("veg").style.borderBottomColor = "white";
}

function display_vegetables() {
    document.getElementById("fru").style.borderBottomColor = "white";
    document.getElementById("nut").style.borderBottomColor = "white";
    document.getElementById("veg".style.borderBottomColor = color_active);
}

function display_fruits() {
    document.getElementById("veg").style.borderBottomColor = "white";
    document.getElementById("nut").style.borderBottomColor = "white";
    document.getElementById("fru".style.borderBottomColor = color_active);

}

function display_nuts() {
    document.getElementById("fru").style.borderBottomColor = "white";
    document.getElementById("veg").style.borderBottomColor = "white";
    document.getElementById("nut".style.borderBottomColor = color_active);

}