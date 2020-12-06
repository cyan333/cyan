function sendEmail(){
	var name = $('#name').val().trim();
	var email = $('#email').val().trim();
	var msg = $('#message').val().trim();
	if (msg == '') {
		alert('Please at least enter message');
		return false;
	}
	
	var content = 'Name: ' + name;
	content += '\n\nEmail: ' + email;
	content += '\n\nMessage: ' + msg;

	$('#submitBtn').prop('disabled', true);
	$.ajax({
		type: "POST",
		url: "https://www.fmning.com/tools/api/email/send",
		data: JSON.stringify({"subject": "New message", "content" : content, "senderType": "SEND_IN_BLUE", "to": "sxie@utexas.edu"}),
		contentType: "application/json",
		dataType: "json",
		success: function (data) {
			$('#name').val('');
			$('#email').val('');
			$('#contentField').val('');
			alert('Sent');
			$('#submitBtn').prop('disabled', false);
			return false;
		},
		error: function (xhr, textStatus, errorThrown) {
			alert('Something went wrong. Please contact sxie@utexas.edu directly.');
			console.log(xhr);
			console.log(textStatus);
			console.log(errorThrown);
			return false;
		}
	});

	return false;
}