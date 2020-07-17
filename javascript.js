"use strict";

function mn() {
	let menuButton = document.getElementById('menuButton')
	menuButton.setAttribute('class', 'nav-toggle active')

	let nav = document.getElementById('nav')
	nav.style.display = "block"

	menuButton.setAttribute("onclick", "mn2()")
}

function mn2() {
	if(document.body.clientWidth <= 661) {
		let menuButton = document.getElementById('menuButton')
		menuButton.setAttribute('class', 'nav-toggle')

		let nav = document.getElementById('nav')
		nav.style.display = "none"


		menuButton.setAttribute("onclick", "mn()")		
	}

}








function accordion(elim) {
	let accordion_item = document.getElementsByClassName('accordion_item')

	for (var i = 0; i < accordion_item.length; i++) {
		accordion_item[i].getElementsByClassName("accordion_icon_end")[0].src = "img/on.png"
		accordion_item[i].getElementsByClassName("accordion_content")[0].style.display = "none"
	}


	elim.getElementsByClassName("accordion_content")[0].style.cssText = "display: block; animation: animatetop 0.5s;"
	elim.getElementsByClassName("accordion_icon_end")[0].src = "img/off.png"
	elim.onclick = null

	setTimeout( () => {
		elim.setAttribute("onclick", "accordionClose(this)")
	},500)

}

function accordionClose(elim) {

	elim.getElementsByClassName("accordion_content")[0].style.animation = "animatetop2 0.5s"
	elim.getElementsByClassName("accordion_icon_end")[0].src = "img/on.png"
	elim.onclick = null

	setTimeout( () => {
		elim.getElementsByClassName("accordion_content")[0].style.display = ""
		elim.setAttribute("onclick", "accordion(this)")
	}, 500)
}















let i = 0;

let timerId = setInterval(slideInterval, 7000)

function slideInterval() {
	document.getElementById("slide_arrow").onclick = null
	document.getElementById("slide_arrow_end").onclick = null


	document.getElementById("jondoe_contant").style.animation = "jon 1.5s";
	setTimeout( () => {

		document.getElementById("jondoe_contant").style.animation = "jonBack 1.5s";
		i += 1;

		if(i>3) {
			let src = document.getElementById("photo").src = "img/jon.png"
			i = 0
		} else {
			let src = document.getElementById("photo").src = "img/jon" + i + ".png"
		};

	}, 1500)



	setTimeout( () => {
		document.getElementById("slide_arrow").onclick = slide
		document.getElementById("slide_arrow_end").onclick = slide2
	}, 1000)

}





function slide() {
	clearInterval(timerId)
	document.getElementById("slide_arrow").onclick = null
	document.getElementById("slide_arrow_end").onclick = null


	document.getElementById("jondoe_contant").style.animation = "jon 0.5s";
	setTimeout( () => {

		document.getElementById("jondoe_contant").style.animation = "jonBack 0.5s";
		i += 1;

		if(i>3) {
			let src = document.getElementById("photo").src = "img/jon.png"
			i = 0
		} else {
			let src = document.getElementById("photo").src = "img/jon" + i + ".png"
		};

	}, 500)



	setTimeout( () => {
		document.getElementById("slide_arrow").onclick = slide
		document.getElementById("slide_arrow_end").onclick = slide2
	}, 1000)

}


function slide2() {
	clearInterval(timerId)
	document.getElementById("slide_arrow_end").onclick = null
	document.getElementById("slide_arrow").onclick = null


	document.getElementById("jondoe_contant").style.animation = "jon2 0.5s";
	setTimeout( () => {

		document.getElementById("jondoe_contant").style.animation = "jonBack2 0.5s";
		i -= 1;

		if(i<1) {
			let src = document.getElementById("photo").src = "img/jon.png"
			i = 4
		} else {
			let src = document.getElementById("photo").src = "img/jon" + i + ".png"
		};

	}, 500)



	setTimeout( () => {
		document.getElementById("slide_arrow_end").onclick = slide2
		document.getElementById("slide_arrow").onclick = slide
	}, 1000)

}