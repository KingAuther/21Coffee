$(document).ready(function()
	{console.log("document loaded!");
	
	var bgcolorForm = document.getElementById('invertcolor');
	var nav = document.getElementById('acess_nav'),
		body = document.body;

	//Animated transition
	// Add smooth scrolling to all links
  $("viewport").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash
        window.location.hash = hash;
      });
    } // End if
  });

  var bgcolorForm = document.getElementById('invertcolor');
  var nav = document.getElementById('acess_nav'),
    body = document.body;
  // Code for localStorage/sessionStorage.
  if(!localStorage.getItem('invertcolor')) {
    populateStorage();
  } else {
    setStyles();
  }
  //Animated transition
  $('#viewport').on('click', function(){
    const images = $('#images').position().top;

    $('html, body').animate(
    {
      scrollTop: images
    },
    900
    );
  });
  //get slides from memory
  function populateStorage() {
    localStorage.setItem('invertcolor', document.getElementById('invertcolor').value);
    
    setStyles();
  }
  //get slides
  function setStyles() {
    var currentColor = localStorage.getItem('invertcolor');
    
    document.getElementById('invertcolor').value = currentColor;
    
    htmlElem.style.backgroundColor = '#' + currentColor;
    htmlElem.style.Color = '#' + currentColor;


  }

  invertcolorForm.onchange = populateStorage;


});
