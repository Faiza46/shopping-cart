//Get Input 
function getInput(Button, phone_input) {
    const phone_number = phone_input.value;
    if (Button == 'plus') {
        const phone_number_int = parseInt(phone_number) + 1;
        return phone_number_int;
    }

    else if (Button == 'minus') {

        const phone_number_int = parseInt(phone_number) - 1;
        return phone_number_int;

    }


}

//Phone Button
function getPhoneTotal(Button, phone_total_input) {
    const phone_total_text = phone_total_input.innerText;
    if (Button == 'plus') {
        const phone_total = parseInt(phone_total_text) + 1219;
        phone_total_input.innerText = phone_total;
    }

    else if (Button == 'minus') {

        const phone_total = parseInt(phone_total_text) - 1219;
        phone_total_input.innerText = phone_total;
    }

}



document.getElementById("phone-plus").addEventListener('click', function () {
    const phone_input = document.getElementById('phone-number');
    const phone_number_int = getInput('plus', phone_input);
    getTaxAmount('plus');
    phone_input.value = phone_number_int;


    const phone_total_input = document.getElementById('phone-total');
    getPhoneTotal('plus', phone_total_input);
    getSubTotal();
    getTotalPrice()





})

document.getElementById("phone-minus").addEventListener('click', function () {
    const phone_input_minus = document.getElementById('phone-number');
    const phone_number_minus_int = getInput('minus', phone_input_minus);
    getTaxAmount('minus');
    phone_input_minus.value = phone_number_minus_int;



    const minus_phone_total_input = document.getElementById('phone-total');
    getPhoneTotal('minus', minus_phone_total_input);
    getSubTotal();
    getTotalPrice()


})



//Case Button


function getCaseTotal(CaseButton, case_total_input) {
    const case_total_text = case_total_input.innerText;
    if (CaseButton == 'plus') {
        const case_total = parseInt(case_total_text) + 59;
        case_total_input.innerText = case_total;
    }

    else if (CaseButton == 'minus') {

        const case_total = parseInt(case_total_text) - 59;
        case_total_input.innerText = case_total;
    }

}
document.getElementById("case-plus").addEventListener('click', function () {

    const case_input_plus = document.getElementById("case-number");
    const case_number_plus_int = getInput('plus', case_input_plus);
    getTaxAmount('plus');

    case_input_plus.value = case_number_plus_int;


    const case_total_plus_input = document.getElementById("case-total");
    getCaseTotal('plus', case_total_plus_input);
    getSubTotal();
    getTotalPrice();


})


document.getElementById("case-minus").addEventListener('click', function () {
    const case_input_minus = document.getElementById("case-number");
    const case_number_minus_int = getInput('minus', case_input_minus);
    getTaxAmount('minus');

    case_input_minus.value = case_number_minus_int;


    const case_total_minus_input = document.getElementById("case-total");
    getCaseTotal('minus', case_total_minus_input);
    getSubTotal();
    getTotalPrice()



})


//Subtotal Calculation

function getSubTotal() {
    const subtotalInput = document.getElementById("sub-total");

    const TotalPhonePurchasedInput = document.getElementById('phone-total');
    const TotalPhonePurchased = parseInt(TotalPhonePurchasedInput.innerText);
    const TotalCasePurchasedInput = document.getElementById("case-total");
    const TotalCasePurchased = parseInt(TotalCasePurchasedInput.innerText);

    const subTotal = TotalPhonePurchased + TotalCasePurchased;
    subtotalInput.innerText = subTotal;
}
// Tax Amount Calculation
function getTaxAmount(Button) {
    const TaxAmountInput = document.getElementById("tax-ammount");
    const TaxAmounttext = TaxAmountInput.innerText;


    if (Button == 'plus') {
        const TaxAmount = parseInt(TaxAmounttext) + 100;
        if (TaxAmount >= 0) {
            TaxAmountInput.innerText = TaxAmount;


        }

    }

    else if (Button == 'minus') {

        const TaxAmount = parseInt(TaxAmounttext) - 100;
        if (TaxAmount >= 0) {
            TaxAmountInput.innerText = TaxAmount;

        }
    }

}

//Total Product Price Calculation

function getTotalPrice() {
    const SubtotalInput = document.getElementById("sub-total");
    const SubtotalText = SubtotalInput.innerHTML;
    const Subtotal = parseInt(SubtotalText);
    const TaxAmountInput = document.getElementById("tax-ammount");
    const TaxAmountText = TaxAmountInput.innerText;
    const TaxAmount = parseInt(TaxAmountText);

    const TotalPriceInput = document.getElementById("total-price");

    const TotalPrice = Subtotal + TaxAmount;
    TotalPriceInput.innerText = TotalPrice;



}







