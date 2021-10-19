window.addEventListener("DOMContentLoaded", function (event){});

function calculate() {
    let number = Number(document.getElementById("Warpstones_Count").value);
    let price = Number(document.getElementById("Warpstone_Price").value);


    let exp = new RegExp(/^[0-9]+$/i);//без условия в скобках не будет исключений
    if (
        !(
            exp.test(number) && exp.test(price)
        )
    ) {
        alert("You should input positive Number pieces/cost.Click  in this window to continue");
    } else if (number == "") {
        alert("You are not input number of warpstones");
    } else if (price == "") {
        alert("You are not input price of warpstones");
    } else {
        const tprice = number * price;
        document.getElementById("cost").innerHTML =
            "Total price of warpstone is: " + tprice;
    }
}
