function getnewcost() {
    let price = 0;
    let prices = gotcost();
    let costno = parseInt(choose.value) - 1;
    if (costno >= 0) {
        price = prices.prodTypes[costno];
    }
    let kolvo = Number(document.getElementById('armynum').value);
    let weapin = document.querySelectorAll('#weaponchoose input');
    weapin.forEach(function (checkbox) {
        if (checkbox.checked) {
            let propPrice = prices.prodProperties[checkbox.name];
            if (propPrice !== undefined) {price += propPrice;}
        }
    });
    let stp = document.getElementsByName('stp');
    stp.forEach(function (radio) {
        if (radio.checked) {
            let optcost = prices.prodOptions[radio.value];
            if (optcost !== undefined) {
                price += optcost;
            }
        }
    });
    let numar = document.getElementById('armynum');
    numar.addEventListener('input',function (){getnewcost();});
    let s = document.getElementsByName('type');
    s[0].addEventListener('change', function (event) {
        let choose = event.target;
        let upgchose = document.getElementById('upgchose');
        let weaponchoose = document.getElementById('weaponchoose');
        if (choose.value === '1') {
            upgchose.style.display = 'none';
            weaponchoose.style.display = 'none';
            setup();
            weaponchoosehide();
            document.getElementById('price').innerHTML =
                'Total cost: ' + prices.prodTypes[0]*kolvo + ' soulstones.';
        }
        else if (choose.value === '2') {
            weaponchoosehide();
            upgchose.style.display = 'block';
            weaponchoose.style.display = 'none';
            document.getElementById('price').innerHTML =
                'Total cost: ' + prices.prodTypes[1]*kolvo + ' soulstones.';
        }
        else if (choose.value === '3') {
            upgchose.style.display = 'none';
            weaponchoose.style.display = 'block';
            setup();
            document.getElementById('price').innerHTML =
                'Total cost: ' + prices.prodTypes[2]*kolvo + ' soulstones.';
        } else {
        }
    });
    let pricegt = document.getElementById('price');
    pricegt.innerHTML = 'Total cost: ' + price * kolvo + ' soulstones.';
}
function gotcost() {
    return {
        prodTypes: [315, 515, 915],
        prodOptions: {
            fullupg: 100,
            midupg: 75,
            lowupg: 40,
        },
        prodProperties: {
            soniclances: 100,
            ghostlances: 80,
        },
    };
}
let element = document.getElementById('setup');
element.style.display = 'none';
function setup() {
    element.checked = !element.checked;
}
function weaponchoosehide() {
    document.getElementById('soniclances').checked = false;
    document.getElementById('ghostlances').checked = false;
}
window.addEventListener('DOMContentLoaded', function () {
    let upgchose = document.getElementById('upgchose');
    upgchose.style.display = 'none';
    let weaponchoose = document.getElementById('weaponchoose');
    weaponchoose.style.display = 'none';
    let s = document.getElementsByName('type');
    let choose = s[0];
    choose.addEventListener('change', function () {getnewcost();});
    let stp = document.getElementsByName('stp');
    stp.forEach(function (radio) {
        radio.addEventListener('change', function () {getnewcost();});
    });
    let weapopt = document.querySelectorAll('#weaponchoose input');
    weapopt.forEach(function (checkbox) {
        checkbox.addEventListener('change', function () {getnewcost();});
    });
    getnewcost();
});
