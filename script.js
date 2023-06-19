		// Login button event handler
		const loginBtn = document.getElementById("loginButton");
		const loginArea = document.getElementById("login-area");
		const transactionArea = document.getElementById("transaction-area");

		loginBtn.addEventListener("click", function(){
			const email = document.getElementById("emailInput").value;
			const password = document.getElementById("passwordInput").value;
			
			// Perform matching check
			if (email === "example@gmail.com" && password === "password") {
					showMessage("Login successful!", "green", "login");

					setTimeout(function() {
						loginArea.style.display = "none";
						transactionArea.style.display = "block";
					}, 1000);
				// Perform further actions or redirect to another page
			} else {
				showMessage("Invalid email or password! Please try again.", "red", "login");
			}
		});

		// function to show message with color
		function showMessage(message, color, buttonId){
			const messageContainer = document.getElementById(`messageContainer-${buttonId}`);
			const allMessageContainers = document.querySelectorAll(".message-container");

			allMessageContainers.forEach(container => {
				container.style.display = container === messageContainer ? "block" : "none";
			});

			messageContainer.textContent = message;
			messageContainer.style.color = color;
		}

		// Deposit Button event handler
		const depositBtn = document.getElementById("addDeposit");
		depositBtn.addEventListener("click", function(){
		const depositNumber = getInputNumber("depositAmount");

		if (isNaN(depositNumber) || depositNumber <= 0) {
			showMessage("Please enter a valid amount for Deposit!","red", "deposit");
			return;
		}else{
			showMessage("Your deposit was Successful.", "green", "deposit");
		}

		updateSpanText("currentBalance", depositNumber);
		updateSpanText("currentDeposit", depositNumber);

		document.getElementById("depositAmount").value = "";
		});

		// Withdraw Button event handler
		const withdrawBtn = document.getElementById("addWithdraw");
		withdrawBtn.addEventListener("click", function(){
			const withdrawNumber = getInputNumber("withdrawAmount");
			const currentBalance = parseFloat(document.getElementById("currentBalance").innerText);

			if (isNaN(withdrawNumber) || withdrawNumber <= 0) {
				showMessage("Please enter a valid amount for Withdraw.", "red", "withdraw");
				return;
			}

			if (withdrawNumber > currentBalance ){
				showMessage("Insufficient funds! Cannot withdraw more than the current balance", "red", "withdraw");
				return;
			}
			showMessage("Your withdrawal was successful.", "green", "withdraw");
			updateSpanText("currentWithdraw", withdrawNumber);
			updateSpanText("currentBalance", -1* withdrawNumber);

			document.getElementById("withdrawAmount").value = "";
		});

		function getInputNumber(id){
			const amount = document.getElementById(id).value;
			const amountNumber = parseFloat(amount);
			return amountNumber;
		}

		function updateSpanText(id, addedNumber){
			const current = document.getElementById(id).innerText;
			const currentNumber = parseFloat(current);
			const totalAmount = addedNumber + currentNumber;
			document.getElementById(id).innerText = totalAmount;			
		}

	// Simulated login function
	function login() {
		// Stop the animation when the user is logged in
		document.getElementById("moving-text").style.animation = "none";
	}