"use strict";

function mn() {
	let menuButton = document.getElementById('menuButton')
	menuButton.setAttribute('class', 'nav-toggle active')

	let nav = document.getElementById('nav')
	nav.style.display = "block"

	menuButton.setAttribute("onclick", "mn2()")
}

function mn2() {
	let menuButton = document.getElementById('menuButton')
	menuButton.setAttribute('class', 'nav-toggle')

	let nav = document.getElementById('nav')
	nav.style.display = "none"


	menuButton.setAttribute("onclick", "mn()")
}








function accordion() {

	document.getElementById("accordion_text").style.display = "block"
	document.getElementById("accordion_text").style.animation = "animatetop 0.5s"
	document.getElementById("accordion_img").src = "img/off.png"
	document.getElementById("accordion_button").onclick = null

	setTimeout( () => {
		document.getElementById("accordion_button").onclick = accordionClose
	},500)
	



	document.getElementById("accordion_img2").src = "img/on.png"
	document.getElementById("accordion_text2").style.display = ""
	document.getElementById("accordion_button2").onclick = accordion2

	

	document.getElementById("accordion_img3").src = "img/on.png"
	document.getElementById("accordion_text3").style.display = ""
	document.getElementById("accordion_button3").onclick = accordion3
}

function accordionClose() {

	document.getElementById("accordion_text").style.animation = "animatetop2 0.5s"
	document.getElementById("accordion_img").src = "img/on.png"
	document.getElementById("accordion_button").onclick = null

	setTimeout( () => {
		document.getElementById("accordion_text").style.display = ""
		document.getElementById("accordion_button").onclick = accordion
	}, 500)
}





function accordion2() {
	document.getElementById("accordion_text2").style.display = "block"
	document.getElementById("accordion_text2").style.animation = "animatetop 0.5s"
	document.getElementById("accordion_img2").src = "img/off.png"
	document.getElementById("accordion_button2").onclick = null

	setTimeout( () => {
		document.getElementById("accordion_button2").onclick = accordionClose2
	},500)



	document.getElementById("accordion_img").src = "img/on.png"
	document.getElementById("accordion_text").style.display = ""
	document.getElementById("accordion_button").onclick = accordion

	document.getElementById("accordion_img3").src = "img/on.png"
	document.getElementById("accordion_text3").style.display = ""
	document.getElementById("accordion_button3").onclick = accordion3
}

function accordionClose2() {
	document.getElementById("accordion_text2").style.animation = "animatetop2 0.5s"
	document.getElementById("accordion_img2").src = "img/on.png"
	document.getElementById("accordion_button2").onclick = null

	setTimeout( () => {
		document.getElementById("accordion_text2").style.display = ""
		document.getElementById("accordion_button2").onclick = accordion2
	}, 500)
}




function accordion3() {
	document.getElementById("accordion_text3").style.display = "block"
	document.getElementById("accordion_text3").style.animation = "animatetop 0.5s"
	document.getElementById("accordion_img3").src = "img/off.png"
	document.getElementById("accordion_button3").onclick = null

	setTimeout( () => {
		document.getElementById("accordion_button3").onclick = accordionClose3
	},500)


	document.getElementById("accordion_img2").src = "img/on.png"
	document.getElementById("accordion_text2").style.display = ""
	document.getElementById("accordion_button2").onclick = accordion2

	document.getElementById("accordion_img").src = "img/on.png"
	document.getElementById("accordion_text").style.display = ""
	document.getElementById("accordion_button").onclick = accordion
}

function accordionClose3() {
	document.getElementById("accordion_text3").style.animation = "animatetop2 0.5s"
	document.getElementById("accordion_img3").src = "img/on.png"
	document.getElementById("accordion_button3").onclick = null

	setTimeout( () => {
		document.getElementById("accordion_text3").style.display = ""
		document.getElementById("accordion_button3").onclick = accordion3
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