window.onresize = function() {
  
    var width = window.innerWidth;
  
    
    if (width < 768) {
      $('.navbar').collapse('show');
    } else {
      $('.navbar').collapse('hide');
    }
  };
  

