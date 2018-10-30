window.onload = function()
{
	document.body.querySelector("form").onsubmit = function(e)
	{
		var username = document.getElementById("username-input").value;
		var pass = document.getElementById("password-input").value;
		if (username == null || username == "" || pass == null || pass == "")
		{
			e.preventDefault();
		}
	}
}