var index =1; 
activeSlide(index);


function moveSlides(n) { 
    displaySlide(index += n);
}

function activeSlide(n) { 
    displaySlide(index=n);
}

function displaySlide(n) { 
    var i;
    var totalSlides = document.getElementsByClassName("slide");
    var totalDots = document.getElementsByClassName("footerdot");

    if (n > totalSlides.length) { 
        index = 1;
    }

    if (n < 1) { 
        index = totalSlides.length;
    }

    for (i=0; i < totalSlides.length; i++) { 
        totalSlides[i].style.display = "none";
    }

    for (i=0; i < totalDots.length; i++) { 
        totalDots[i].className = totalDots[i].className.replace(" active", "");
    }
    totalSlides[index - 1].style.display = "block";
    totalSlides[index - 1].className += " active";
}

