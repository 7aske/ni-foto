document.getElementById("next").addEventListener("click", imageNext);
document.getElementById("prev").addEventListener("click", imagePrev);

function imagePrev() {
    image(-1);
}
function imageNext() {
    image(1);
}	
var slideIndex = 1;
showDivs(slideIndex);

function image(n) {
	showDivs(slideIndex += n);
}

function showDivs(n) {
	var i;
	var display = document.getElementsByClassName("slide")
	if (n > display.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = display.length;
	}
	for (i =  0; i < display .length; i++) {
		display[i].style.display = "none";
	}
	display[slideIndex - 1].style.display = "block";
}