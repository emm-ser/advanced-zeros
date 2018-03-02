// Решение состоит из 2 этапов.
// Количество нулей будет равняться наименьшему наименьшему часному от
// количества множителей (этап 2) и количества простых множителей (этап 1)

module.exports = function getZerosCount(number, base) {

    var zeros = number;
    var factors = findFactors(base);

    for(let i of factors.keys()) {
        var amountOfNumberMultiplier = numberMultiplier(number, i);
        zeros = Math.min(zeros, amountOfNumberMultiplier / factors.get(i)) ^ 0;
    }

    return zeros;
}

// Этап 1.
// Разложение системы счисления(base) на простые множители.
// Результатом будет Map, где key -- множитель, а value -- кол-во свхождений key.
function findFactors(number) {
    var factors = new Map();
    var count = 0;

    while (number % 2 == 0) {
        count++;
        number /= 2;
    }
    if (count > 0) {
        factors.set(2, count);
    }

    for (var i = 3; i*i <= number; i = i + 2) {
        count = 0;
        while(number % i == 0) {
            count++;
            number /= i;
        }
        if (count > 0) {
            factors.set(i, count);
        }
    }

    if(number > 1) {
        factors.set(number, 1);
    }

    return factors;
}

// Этап 2.
// Нахождение числа множителей числа i для факториала числа number
function numberMultiplier(number, i) {
    var amount = 0;
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


