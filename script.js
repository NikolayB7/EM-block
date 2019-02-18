
$(document).ready(function () {

//Подключение маски в input
$("#phone-input").mask("+380 (99) 999-9999");
// -------------


	// Подключение фреймворка mixitup
var mixer = mixitup('.wrapper');
var mixer = mixitup(wrapperEl);

var mixer = mixitup(wrapperEl, {
	selectors: {
			target: '.blog-item'
	},
	animation: {
			duration: 300
	}
});
// ---------


$("#form").submit(function () {
	$.ajax({
		type: "POST",
		url: "mail.php",
		data: $(this).serialize()
	}).done(function () {
		$(this).find("input").val("");
		alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
		$("#form").trigger("reset");
	});
	return false;
});


});



// Модальное окно
function OpenModal(){
	$('#modal').show('drop',500);
	$("body").addClass("modal-open");
	$('.overlay-modal').css('display', 'block');
}

function CloseModal(){
	$('#modal').hide('drop',500);
	$("body").removeClass("modal-open");
	$('.overlay-modal').css('display', 'none');
}
// ----------------

