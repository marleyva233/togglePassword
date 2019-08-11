function showPassword() {
	var password = document.getElementById("password");
	password.type = (password.type === "password") ? "text" : "password";
}