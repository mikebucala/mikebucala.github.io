function getPolygon() { 
    var num = prompt("The magnificent bear would like you to pick a number between 1-10 ");
    validateEntry(num);
}

function validateEntry(num) { 
    if(isNaN(num)) { 
        alert("Error: Invalid data type");
    } else { 
        number = Math.trunc(num);
        if(number > 11 || number < 1) { 
            alert("Error: Number is greater than 11 or less than 1");
            getPolygon();
        } else { 
            getShape(number);
        }
    }
}

function getShape(sides) { 
    var polygons = new Array(
        "monogon",
        "digon",
        "triangle",
        "quadrilateral",
        "pentagon",
        "hexagon",
        "heptagon",
        "octagon",
        "nonagon",
        "decagon"
    );
    var message = "A polygon with " + sides + " sides is called a " + polygons[sides-1] + ".";
    document.getElementById("polygonName").innerHTML = message;
}