var link = document.querySelector(".form-feedback");

var popupFeedback = document.querySelector(".popup");

var close = popupFeedback.querySelector(".feedback-cancel");

var darkenBackground = document.querySelector(".popup-wrapper");


link.addEventListener("click", function(event) {
	event.preventDefault();
	popupFeedback.classList.add("popup-show");
	darkenBackground.classList.add("darken-bg");
});

close.addEventListener("click", function(event) {
	event.preventDefault();
	popupFeedback.classList.remove("popup-show");
	darkenBackground.classList.remove("darken-bg");
});