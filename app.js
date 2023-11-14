// Declaramos una función con el nombre exacto "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
};

// Tenemos que incluir la función en el exports para que sea exportada a otros archivos como test.js
// module.exports = { fromEuroToDollar };

const fromDollarToYen = function(valueInDollar) {
    // Convertimos el valor a Yenes
    let valueInYen = valueInDollar * 151.08;
    // Retornamos el valor en Yenes
    return valueInYen;
}

// module.exports = { fromDollarToYen };   

const fromYenToPound = function(valueInYen) {
    // Convertimos el valor a Libras Esterlinas
    let valueInPound = valueInYen * 0.0054;
    // Retornamos el valor en Libras Esterlinas
    return valueInPound;
};

    module.exports = { fromYenToPound, fromDollarToYen, fromEuroToDollar }; 