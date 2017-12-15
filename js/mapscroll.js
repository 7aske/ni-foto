var on = document.getElementById('map').addEventListener('click', scrollOn);
var off = document.getElementById('map-frame').addEventListener('mouseleave', scrollOff);

var enter = document.getElementById('map-frame');
var leave = document.getElementById('map-frame');


function scrollOn() {
	enter.classList.remove('scroll');
};
function scrollOff() {
	leave.classList.add('scroll');
};