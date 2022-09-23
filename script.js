function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

function calculatePrice() {
  let total = 0;
  const checkedValue = document.getElementsByName('radio');
  let miles = document.getElementById("miles").value;
  let num12 = document.getElementById("num12").value;
  let num18 = document.getElementById("num18").value;
  let num24 = document.getElementById("num24").value;
  let numAssistants = document.getElementById("numAssistants").value;
  let approxHours = document.getElementById("approxHours").value;
  
  if (checkedValue[0].checked){
    total += (num12 * miles * 0.6) + (num12 * 50);
    total += (num18 * miles * 0.8) + (num18 * 65);
    total += (num24 * miles * 0.9) + (num24 * 90);

    total += (numAssistants * 70 * approxHours);
  }
  else {
    if(num12 < 3 || num18 < 3 || num24 < 3)
    {
      alert("Must have a minimum of 3 trucks!");
    }
    else {
      total += (num12 * miles * 0.5) + (num12 * 30);
      total += (num18 * miles * 0.7) + (num18 * 40);
      total += (num24 * miles * 0.8) + (num24 * 70);
  
      total += (numAssistants * 70 * approxHours);
    }
    
  }
  
  document.getElementById("PicExtPrice").value = total.toFixed(2);
}

function myFunctionE() {
  document.getElementById("contactForm").submit();
  alert("Message sent, Thanks!")
}