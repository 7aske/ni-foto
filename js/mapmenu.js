var menuOver = document.getElementById("map-menu").addEventListener("mouseover", dropdownVisible);
var menuOut = document.getElementById("map-menu").addEventListener("mouseout", dropdownInvisible);


var menu = document.getElementsByClassName('map-list-item');
var dropdown = document.getElementById('map-menu-dropdown');

function dropdownVisible() {
	var i;
	for(i=0; i<menu.length; i++) {
  	menu[i].style.display = "block";
}
	dropdown.style.transform = "scale(1)";
};

function dropdownInvisibleDelayed() {
	var i;
	for(i=0; i<menu.length; i++) {
  	menu[i].style.display = "none";
}};

function dropdownInvisible() {
	dropdown.style.transform = "scale(0.1)";
};

