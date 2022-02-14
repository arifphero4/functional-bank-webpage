document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    const depositInput = document.getElementById("deposit-input");

    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText);

    //get current deposit
    const depositTotal = document.getElementById("deposit-total");
    const depositTotalText = depositTotal.innerText;
    const previousDepositTotal = parseFloat(depositTotalText);

    depositTotal.innerText = previousDepositTotal + depositAmount;
    console.log(depositTotalText);

    // clear input field
    depositInput.value = "";
  });
