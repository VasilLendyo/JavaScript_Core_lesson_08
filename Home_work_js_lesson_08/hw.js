text.onclick = function() {
	this.classList.add('hidden');
}

hid.onclick = function() {
	this.classList.add('hidden');
}

menu.onclick = function() {
	var elem = document.querySelectorAll('ul>li');
	for (var i = 0; i < elem.length; i++) {
		elem[i].classList.toggle('hidden');
	}
}
