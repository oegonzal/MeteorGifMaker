describe('clicking on the reset button', function () {
	// Set app to inital state
	beforeEach(function () {
		$("#reset-btn").click();
	});

	it('should add a display div', function () {
		var divText = $('#gif-reminder').text();
		
		// click the reset button
		$("#reset-btn").click();

		// Assert the reminder shows up when the app is reset
		expect(divText).toEqual(' No GIF to Display ');
	});

	it('should display the right count', function () {
		var divText = $('#uploaded-amount').text();
		
		// click the reset button
		$("#reset-btn").click();

		// Assert the correct count is showing upon app is reset
		expect(divText).toEqual(' Uploaded: 0 / 5 ');
	});


	it('should show the the correct submit color ', function () {
		var color = $('#submit-btn').css('backgroundColor');

		// Assert create gif button color is correct
		expect(color).toEqual('rgb(255, 255, 255)');
	});

	it('should show the the correct reset color ', function () {
		var color = $('#reset-btn').css('backgroundColor');

		// Assert reset button color is correct
		expect(color).toEqual('rgb(217, 83, 79)');
	});

});