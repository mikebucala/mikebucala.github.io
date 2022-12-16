window.onload = function()
{
    document.getElementById("add_salary").onclick = addSalary;
    document.getElementById("display_results").onclick = displayResults;
    document.getElementById("display_salary").onclick = displaySalary;
    document.getElementById("person").focus;
};

var person = [];
var salary = [];

function addSalary()
{
    var enteredSalary = parseFloat(document.getElementById("salary").value);
    var enteredName = document.getElementById("person").value;

    enteredSalary = parseFloat(enteredSalary);
    person.push(enteredName);
    salary.push(enteredSalary);

    document.getElementById("salary").value = "";
    document.getElementById("person").focus();
}

function displayResults()
{
    var average = 0;
    var sum = 0;
    var personWithHighestSalary = "";
    var maxNumber = 0;

    for(i = 0; i < salary.length; i++)
    {
        sum += salary[i];
    }
    
    average = (sum / salary.length);

    for(i = 0; i < salary.length; i++)
    {
        if(salary[i] > maxNumber)
        {
            maxNumber = salary[i];
            personWithHighestSalary = person[i];
        }
    }

    document.getElementById("results").innerHTML = "The average salary is $" + average.toFixed(2) + ". " + personWithHighestSalary + " had the highest salary at $" + maxNumber.toFixed(2);
}

function displaySalary()
{
    var table;
    table = "<table><tr><th>Employee</th><th>Salary</th></tr>"

    for(i = 0; i < salary.length; i++)
    {
        table += "<tr><td>" + person[i] + "</td><td>" + salary[i] + "</td></tr>";
    }

    table += "</table>";

    document.getElementById("table_results").innerHTML = table;
}