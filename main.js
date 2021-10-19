function getnewcost() {
    let price = 0;
    let prices = gotcost();
    let priceIndex = parseInt(select.value) - 1;
    if (priceIndex >= 0) {
        price = prices.prodTypes[priceIndex];
    }
    let qua = Number(document.getElementById('pieceweap').value);
    let flayeroptions1 = document.querySelectorAll('#flayeroptions input');
    flayeroptions1.forEach(function (checkbox) {
        if (checkbox.checked) {
            let prpcost = prices.prodProperties[checkbox.name];
            if (prpcost !== undefined) {price += prpcost;}
        }
    });
    let st = document.getElementsByName('st');
    st.forEach(function (radio) {
        if (radio.checked) {
            let currcost = prices.prodOptions[radio.value];
            if (currcost !== undefined) {
                price += currcost;
            }
        }
    });
    let cpw = document.getElementById('pieceweap');
    cpw.addEventListener('input',function (){getnewcost();});
    let s = document.getElementsByName('form');
    s[0].addEventListener('change', function (event) {
        let choser = event.target;
        let skavenforce = document.getElementById('skavenforce');
        let flayeroptions = document.getElementById('flayeroptions');
        if (choser.value === '1') {
            skavenforce.style.display = 'none';
            flayeroptions.style.display = 'none';
          skaventech();
            flayeroptions_hidden();
            document.getElementById('price').innerHTML =
                'Final cost is: ' + prices.prodTypes[0]*qua + 'Warpstones.';
        }
        else if (choser.value === '2') {
            flayeroptions_hidden();
            skavenforce.style.display = 'block';
            flayeroptions.style.display = 'none';
            document.getElementById('price').innerHTML =
                'Final cost is: ' + prices.prodTypes[1]*qua + ' Warpstones.';
        }
        else if (choser.value === '3') {
            skavenforce.style.display = 'none';
          flayeroptions.style.display = 'block';
            skaventech();
            document.getElementById('price').innerHTML =
                'Final cost is: ' + prices.prodTypes[2]*qua + ' Warpstones.';
        } else {
        }
    });
    let costtot = document.getElementById('price');
    costtot.innerHTML = 'Final cost is: ' + price * quantity + ' Warpstones.';
}
function gotcost() {
    return {
        prodTypes: [1, 100, 1000],
        prodOptions: {
            overpowered: 1000,
            middlepower: 500,
            lowpower: 100,
        },
        prodProperties: {
            rapid: 30,
            single: 25,
        },
    };
}
let elem = document.getElementById('skaventech');
elem.style.display = 'none';
function skaventech() {
    elem.checked = !elem.checked;
}
function flayeroptions_hidden() {
    document.getElementById('rapid').checked = false;
    document.getElementById('single').checked = false;
}
window.addEventListener('DOMContentLoaded', function () {
    let raddiv = document.getElementById('skavenforce');
    raddiv.style.display = 'none';
    let flayeroptions = document.getElementById('flayeroptions');
    flayeroptions.style.display = 'none';
    let s = document.getElementsByName('form');
    let choser = s[0];
    choser.addEventListener('change', function () {getnewcost();});
    let st = document.getElementsByName('st');
    st.forEach(function (radio) {
        radio.addEventListener('change', function () {getnewcost();});
    });
    let flayeroptions = document.querySelectorAll('#flayeroptions input');
    flayeroptions.forEach(function (checkbox) {
        checkbox.addEventListener('change', function () {getnewcost();});
    });
    getnewcost();
