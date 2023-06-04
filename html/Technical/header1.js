
 
/* JavaScript code to include the header
window.onload = function()  {
    //create and element
    let heading = document.createElement('a');
    // adding the id for the element
    heading.id = '#mnhading';
    heading.href = "../../index.html";
    heading.innerHTML = '<h1>Siksha4lrn.com</h1>';
      
    //To attach the div to the document, you use the appendChild() method:
    document.body.appendChild(heading);

};
*/



window.onload = function()  {
    //create and element
    let heading = document.createElement('h1');
    // adding the id for the element
    heading.id = '#mnhading';
  //  heading.textContent = "Siksha4lrn.com";
    //And add an HTML snippet to the div
    heading.innerHTML = '<a href="../../index.html">Siksha4lrn.com</a>';

    var header = document.createElement('header');
    header.appendChild(heading);
    document.body.insertBefore(header, document.body.firstChild);
    //To attach the div to the document, you use the appendChild() method:
    //document.body.appendChild(heading);

};
         