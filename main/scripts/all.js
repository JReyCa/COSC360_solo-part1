window.onload = function()
{
	document.getElementById("search-form").onsubmit = function(e)
	{
		var searchValue = document.querySelector("#search-form > input").value;
		if (searchValue == null || searchValue == "")
		{
			e.preventDefault();
			document.querySelector("#search-form > input").setAttribute("placeholder","Please enter a value");
		}
	}
}