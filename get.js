function get(varname) {
	// First, we load the URL into a variable
	var url = window.location.href.replace(new RegExp("\\+", "g"), "%20")
		// Next, split the url by the ?
	var qparts = url.split("?");
	// Check that there is a querystring, return "" if not
	if (qparts.length == 0) return "";
	// Then find the querystring, everything after the ?
	var query = qparts[1];
	// Split the query string into variables (separates by &s)
	var vars = query.split("&");
	// Initialize the value with "" as default
	var value = "";
	// Iterate through vars, checking each one for varname
	for (i = 0; i < vars.length; i++) {
		// Split the variable by =, which splits name and value
		var parts = vars[i].split("=");
		// Check if the correct variable
		if (parts[0] == varname) {
			// Load value into variable
			value = parts[1];
			// End the loop
			break;
		}
	}
	// Convert escape code
	value = unescape(value);
	// Convert "+"s to " "s
	value.replace("+", " ");
	// Return the value
	return value;
}
