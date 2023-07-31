// common-header.js
document.addEventListener("DOMContentLoaded", function () {
    const headerContainer = document.createElement("header");
    headerContainer.innerHTML = `
   
	<h1 style="color:brown ; text-align:center"> GoAbhi.online</h1>
	<link rel="icon" type="image/x-icon" href="image\Title_icon.jpg">

	<!-         this is navigation section   >
	<div class="topnav">
		<a class="active" href="http://goabhi.online/">Home</a>
		<a href="Educational.html">Educational</a>
		<a href="ContactUs.html">Contact</a>
		<a href="about.html">About</a>
		<a href="feedback.html">Feedback</a>

		<a href="mailto:abhishekcpj@gmail.com">mail me</a>
	</div>
  `;

    // Insert the header at the beginning of the body
	//Siksha4u.in, Siksha4lrn
    document.body.prepend(headerContainer);
});
