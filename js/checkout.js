document.getElementById("check-out").addEventListener('click', function () {
    const phoneInputField = document.getElementById("phone-number");
    const phoneInput = parseInt(phoneInputField.value);

    console.log();


    const caseInputField = document.getElementById("case-number");
    const caseInput = parseInt(caseInputField.value);

    if (phoneInput == 0 && caseInput == 0) {
        alert("Your Cart Is Empty");
    }

    else {
        alert('succesfully purchased'),
            refresh();
    }

})