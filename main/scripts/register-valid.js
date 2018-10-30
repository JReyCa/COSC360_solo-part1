window.onload = function()
{
	document.body.querySelector("form").onsubmit = function(e)
	{
		var username = document.getElementById("username-input").value;
		var pass = document.getElementById("password-input").value;
		var email = document.getElementById("email-input").value;
		var first = document.getElementById("first-input").value;
		var last = document.getElementById("last-input").value;
		
		if (username == null || username == "" || pass == null || pass == "" ||
			email == null || email == "" || first == null || first == "" ||
			last == null || last == "")
		{
			e.preventDefault();
		}
	}
}