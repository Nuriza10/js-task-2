let creditNum = prompt('Введите номер вашей кредитной карты');
let eq = `${creditNum.slice(0,0).concat("************")}${creditNum.slice(12, 16)}`;
console.log(`Номер вашей карты: ${eq}`);