$(document).ready(() => {

	// Variables
	const $shopNow = $('.shopNowDiv');
	const $shopNowBtn = $('.shopBtn');
	const $sumbitButton = $('#submitBtn');
	const $name = $('#nameOfUser'.value());
	const $email = $('#emailOfUser'.value());

	// This div will start as hidden when the page loads
	$shopNow.hide();

	// When clicked on shop button, toggles div that was hidden
	$($shopNowBtn).click(function () {
		$($shopNow).fadeToggle();
	});

	// When user clicks submit button, this will validate the form
	$($sumbitButton).click(function () {
		if($email != null && $name != null) {
			window.alert('Form was submitted successfully');
			window.location.replace('./submittedForm.html');
		}
		else {
			window.alert('Please fill in the form correctly!');
		}
	});

});