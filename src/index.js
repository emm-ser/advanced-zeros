module.exports = function getZerosCount(number, base) {
  var zeros = Number.MAX_VALUE;

    for (var i = 2; i <= base; i++) {
        if (base % i == 0) {
            amountOfBaseMultiplier = baseMultiplier(base, i);
            amountOfNumberMultiplier = numberMultiplier(number, i);
            zeros = Math.min(zeros, amountOfNumberMultiplier / amountOfBaseMultiplier) ^ 0;
        }
    }
    return zeros;
}

function baseMultiplier(base, i) {
    amount = 0;
    while (base % i == 0) {
        base = (base / i) ^ 0;
        amount++;
    }
    return amount;
}

function numberMultiplier(number, i) {
    amount = 0;
    var reminder = number;
    while (true) {
        reminder = (reminder / i) ^ 0;
        if (reminder >= 1) {
            amount += reminder;
        } else {
            break;
        }
    }
    return amount;
}
