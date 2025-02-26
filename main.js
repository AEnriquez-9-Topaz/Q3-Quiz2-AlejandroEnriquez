					function Personal (a, b) {
						var a = document.getElementById('fullname').value;
						window.alert ('We have accepted your submission, ' +  a + '!')
					}

					function mouseOver(){
						buy.style.background = "#C1121F";
						buy.sytle.color = "ghostwhite"

					}

					function mouseOut(){
						buy.style.background = "#FFB703"
						buy.style.color = "black"
					}

					// onchange js event
					document.getElementById("fullname").onchange = function() {ChangeToCapital()}
					function ChangeToCapital() {
						var fname = document.getElementById("fullname");
						fname.value = fname.value.toUpperCase();
					}
					
					function Price() {
						var p = document.getElementById("seat").value;
						var d = document.getElementById("option").value;

						if (p === "Economy") {Cost = 500;}
						if (p === "Regular") {Cost = 1000;}
						if (p === "Premium") {Cost = 2000;}

						if (d === "None") {Discount = 1;}
						if (d === "Student") {Discount = 0.8;}
						if (d === "Patron") {Discount = 0.7;}

						var r_ans = Cost*Discount

						window.alert('The Price for your Seat is ' + r_ans + ".")

					}

					function Buy() {
						window.alert('Your ticket has been sent to you email!')
					}


	
