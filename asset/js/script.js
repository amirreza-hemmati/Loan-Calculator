// txt get priceGetLoan
const priceGetLoan = document.getElementById("price-get-loan");
// txt get price-Profit-loan 
const priceProfitLoan = document.getElementById("price-Profit-loan");
// txt get Profit-set-loan
const ProfitSetLoan = document.getElementById("Profit-set-loan");
// btn get sum alls 
const btnGetSum = document.getElementById("btn-get-sum");
// class none-display
const noneDisplay = document.querySelectorAll(".none-display");
// img loader
const loaders = document.getElementById("loaders");
// result
const result = document.getElementById("div-show");
//getter1
const getter1 = document.getElementById("getter-1");
//getter2
const getter2 = document.getElementById("getter-2");
//getter3
const getter3 = document.getElementById("getter-3");

// method click

priceGetLoan.addEventListener("keyup",(event) => {
    if(event.keyCode === 13){
        priceProfitLoan.focus();
    }
})

priceProfitLoan.addEventListener("keyup",(event) => {
    if(event.keyCode === 13){
        ProfitSetLoan.focus();
    }
})

ProfitSetLoan.addEventListener("keyup",(event) => {
    if(event.keyCode === 13){
        btnGetSum.click();
    }
})

btnGetSum.addEventListener("click", (event) => {
    // create a class for add and remove => none-display
    let toggleClass = (event) => {
        noneDisplay[event].classList.remove("none-display");
        //remove class => none-display
        setTimeout(() => {
            noneDisplay[event].classList.add("none-display");
        }, 3000);
    };

    if (priceGetLoan.value == "" && priceProfitLoan.value == "" && ProfitSetLoan.value == "") {
        // true if => all value == ""
        priceGetLoan.focus();
        toggleClass(0);
        toggleClass(1);
        toggleClass(2);
    } else if(priceGetLoan.value == "" && priceProfitLoan.value == ""){
        // true if => (value 0 && value 1) == ""
        priceGetLoan.focus();
        toggleClass(0);
        toggleClass(1);
    }else if(priceGetLoan.value == "" && ProfitSetLoan.value == ""){
        // true if => (value0 && value2) == ""
        priceGetLoan.focus();
        toggleClass(0);
        toggleClass(2);
    }else if(priceProfitLoan.value == "" && ProfitSetLoan.value == ""){
        // true if => (value1 && value2)
        priceProfitLoan.focus();
        toggleClass(1);
        toggleClass(2);
    }else if(priceGetLoan.value == ""){
        // true if => value0 == ""
        priceGetLoan.focus();
        toggleClass(0);
    }else if(priceProfitLoan.value == ""){
        // true if => value1 == ""
        priceProfitLoan.focus();
        toggleClass(1);
    }else if(ProfitSetLoan.value == ""){
        // true if => value2 == ""
        ProfitSetLoan.focus();
        toggleClass(2);
    }else{
        // true if => value all != "";

        
        /*
            فرمول
            ___________________

            (mablagh vam * sood) / 100

            ___________________

            مبلغ وام
            priceGetLoan
            ___________________

            سود وام
            priceProfitLoan
            ___________________

            چند ماهه
            ProfitSetLoan

            خواسته
            ________________
            1: مبلغ پرداخت ماهیانه
            2: مبلغ کل سود
            3: مبلغ پول با سود 
        */
        const sood = ((priceGetLoan.value * priceProfitLoan.value) / 100);
        const allPrice = parseFloat(sood) + parseFloat(priceGetLoan.value);
        const setmoney = allPrice / parseFloat(ProfitSetLoan.value);

        getter1.innerText = `${setmoney} تومان`;
        getter2.innerText = `${sood} تومان`;
        getter3.innerText = `${allPrice} تومان`;
        //none a result
        result.classList.add("none-display");
        //show a loaders
        loaders.classList.remove("none-display");
            setTimeout(() => {
            //none a loaders
            loaders.classList.add("none-display");
            //show a result
            result.classList.remove("none-display");
        }, 3000);

        // input number value = "";
        priceGetLoan.value = "";
        priceProfitLoan.value = "";
        ProfitSetLoan.value = "";
    }
});