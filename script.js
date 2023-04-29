let cart = ['keyboard', 'sport bottle', 'headhpones', 'mouse', 'mousepad', 'monitor', 'desk'];

let slicedCart1 = cart.slice(0, 2);
console.log(slicedCart1);

let slicedCart2 = cart.slice(-3);
console.log(slicedCart2);

let slicedCart3 = cart.slice(3, 5);
console.log(slicedCart3);

let slicedCart4 = cart.slice(1, 3);
console.log(slicedCart4);

let slicedCart5 = cart.slice(1);
console.log(slicedCart5);

let movies = [
  'The Shawshank Redemption',
  'The Godfather',
  'The Dark Knight',
  'The Godfather Part II',
  '12 Angry Men',
  "Schindler's List",
  'The Lord of the Rings: The Return of the King',
  'Pulp Fiction',
  'The Lord of the Rings: The Fellowship of the Ring',
  'The Good, the Bad and the Ugly',
];

let list1 = movies.slice(0, 5);
console.log(list1);

let list2 = movies.slice(-4);
console.log(list2);

let list3 = movies.slice(2, 7);
console.log(list3);

let list4 = movies.slice(1, 3);
console.log(list4);

let list5 = movies.slice(1);
console.log(list5);

let list6 = movies.slice(3, 8);
console.log(list6);

let list7 = movies.slice(-4, -1);
console.log(list7);

movies.splice(4, 1, 'Filmas 1', 'Filmas 2');
console.log(movies);

movies.shift();
console.log(movies);
movies.unshift('Greenland');
console.log(movies);
console.log('1111111111111111111111111111');

let newArr1 = movies;

newArr1.splice(1, 4);
console.log(newArr1);

let newArr2 = movies;
newArr2.splice(-4, -1);
console.log(newArr2);

let newArr3 = [...newArr1, ...newArr2].reverse();
console.log(newArr3);

// Dirbti su šiuo masyvu:
// [4, 5, -5556, 155, 640, '15x', 6789, -5564, 478, 654, 'obuolys', 789, -51, 55, -222, 0, -357, -56, 'trylika', 444, 7778, 4154, 4751];

let extraTaskNewArr = [4, 5, -5556, 155, 640, '15x', 6789, -5564, 478, 654, 'obuolys', 789, -51, 55, -222, 0, -357, -56, 'trylika', 444, 7778, 4154, 4751];

function findMiddleIndex(array) {
  return Math.floor(array.length / 2);
}

// 1.1. Pašalinti pirmą masyvo narį.
extraTaskNewArr.shift();
// 1.2. Pašalinti paskutinį masyvo narį.
extraTaskNewArr.pop();
// 1.3. Rasti vidurinį masyvo narį ir jį pašalinti.
extraTaskNewArr.splice(findMiddleIndex(extraTaskNewArr), 1);
// 1.4. Pašalinti priešpaskutinį masyvo narį.
extraTaskNewArr.splice(-2, 1);
// 1.5. Pašalinti antrą masyvo narį.
extraTaskNewArr.splice(1, 1);
// 1.6. Pašalinti 7 ir 8 masyvo narius.
extraTaskNewArr.splice(6, 2);
// 1.7. Pašalinti 4, 5 ir 6 masyvo narius skaičiuojant nuo galo.
extraTaskNewArr.splice(-6, 3);
// 1.8. Pašalinti trečią masyvo narį ir į jo vietą įdėti skaičių 888.
extraTaskNewArr.splice(2, 1, 888);
// 1.9. Pašalinti dešimtą masyvo narį ir į jo vietą įdėti skaičius: 33, 789 ir 6543.
extraTaskNewArr.splice(9, 1, 33, 789, 6543);
// 1.10. Pašalinti paskutinį masyvo narį į jo vietą įdėti skaičius: 321, 654, 987.
extraTaskNewArr.splice(-1, 1, 321, 654, 987);
// 1.11. Tarp pirmo ir antro masyvo narių įdėti skaičių 11.
extraTaskNewArr.splice(1, 0, 11);
// 1.12. Tarp 13 ir 14 masyvo narių įdėti skaičių 1.
extraTaskNewArr.splice(13, 0, 1);
// 1.13. Tarp paskutinio ir priešpaskutinio masyvo narių įdėti skaičių -1.
extraTaskNewArr.splice(-1, 0, -1);
// 1.14. Į masyvo pradžią pridėti skaičius: 1, 2, 3.
extraTaskNewArr.unshift(1, 2, 3);
// 1.15. Į masyvo pabaigą pridėti skaičius: -333, -321, -312.
extraTaskNewArr.push(-333, -321, -312);
// 1.16. Į masyvo vidurį pridėti skaičių 0.
extraTaskNewArr.splice(findMiddleIndex(extraTaskNewArr), 0, 0);
// 1.17. Pašalinti pirmą masyvo narį.
extraTaskNewArr.shift();
// 1.18. Pašalinti paskutinį masyvo narį.
extraTaskNewArr.pop();
// 1.19. Į masyvo pradžią pridėti žodį "start".
extraTaskNewArr.unshift('start');
// 1.20. Į masyvo pabaigą pridėti žodį "end".
extraTaskNewArr.push('end');

console.log(extraTaskNewArr);

// Atlikus šias užduotis eilės tvarka masyvas turėtų atrodyti taip:
let = extraTaskAnsArr = [
  'start',
  2,
  3,
  5,
  11,
  155,
  888,
  '15x',
  6789,
  -5564,
  'obuolys',
  -51,
  55,
  0,
  33,
  789,
  6543,
  1,
  'trylika',
  444,
  321,
  654,
  -1,
  987,
  -333,
  -321,
  'end',
];

function compareArrays(taskArr, resultArr) {
  for (let i = 0; i < taskArr.length; i++) {
    if (taskArr[i] !== resultArr[i]) {
      return 'Did not match arrays';
    }
  }
  return 'Successfully compared';
}

console.log(compareArrays(extraTaskNewArr, extraTaskAnsArr));

// 2. Tęsiant darbą su šiuo masyvu atlikti šias užduotis naudojant slice metodą. Kiekvienai užduočiai sukurti naują kintamąjį, jame išsaugoti reikšmę, kurią grąžina slice metodas, ir šį kintamąjį išvesti į konsolę:

let secondArr = extraTaskNewArr;
// 2.1. Gauti pirmą masyvo narį.
let number1 = secondArr.slice(0, 1);
console.log(number1);
// 2.2. Gauti paskutinį masyvo narį.
let number2 = secondArr.slice(-1);
console.log(number2);
// 2.3. Gauti antrą masyvo narį.
let number3 = secondArr.slice(1, 2);
console.log(number3);
// 2.4. Gauti priešpaskutinį masyvo narį.
let number4 = secondArr.slice(-2, -1);
console.log(number4);
// 2.5. Gauti aštuntą masyvo narį.
let number5 = secondArr.slice(7, 8);
console.log(number5);
// 2.6. Gauti devintą masyvo narį skaičiuojant nuo galo.
let number6 = secondArr.slice(-9, -8);
console.log(number6);
// 2.7. Gauti vidurinį masyvo narį.
let number7 = secondArr.slice(findMiddleIndex(secondArr), findMiddleIndex(secondArr) + 1);
console.log(number7);
// 2.8. Gauti pirmus tris masyvo narius.
let number8 = secondArr.slice(0, 3);
console.log(number8);
// 2.9. Gauti paskutinius tris masyvo narius.
let number9 = secondArr.slice(-3);
console.log(number9);
// 2.10. Gauti pirmus 10 masyvo narius.
let number10 = secondArr.slice(0, 10);
console.log(number10);
// 2.11. Gauti paskutinius 10 masyvo narius.
let number11 = secondArr.slice(-10);
console.log(number11);
// 2.12. Gauti nuo 3 iki 8 masyvo nario (iš viso 6 nariai).
let number12 = secondArr.slice(2, 8);
console.log(number12);
// 2.13. Gauti nuo 5 iki 9 masyvo nario skaičiuojant nuo masyvo pabaigos (iš viso 5 nariai).
let number13 = secondArr.slice(-9, -4);
console.log(number13);
// 2.14. Gauti nuo 11 iki 19 masyvo nario (iš viso 9 nariai).
let number14 = secondArr.slice(10, 19);
console.log(number14);
// 2.15. Gauti nuo 9 iki 17 masyvo nario skaičiuojant nuo masyvo pabaigos (iš viso 9 nariai).
let number15 = secondArr.slice(-17, -8);
console.log(number15);
// 2.16. Gauti visus masyvo narius išskyrus pirmą.
let number16 = secondArr.slice(1);
console.log(number16);
// 2.17. Gauti visus masyvo narius išskyrus paskutinį.
let number17 = secondArr.slice(0, secondArr.length - 1);
console.log(number17);
// 2.18. Gauti visus masyvo narius išskyrus pirmus 5.
let number18 = secondArr.slice(5, secondArr.length);
console.log(number18);
// 2.19. Gauti visus masyvo narius išskyrus paskutinius 5.
let number19 = secondArr.slice(0, secondArr.length - 5);
console.log(number19);
// 2.20. Gauti visus masyvo narius iki vidurinio masyvo nario, vidurinio nario neįskaičiuojant (iš viso 13 narių).
let number20 = secondArr.slice(0, findMiddleIndex(secondArr));
console.log(number20);
// 2.21. Gauti visus masyvo narius nuo vidurinio masyvo nario, vidurinio nario neįskaičiuojant, iki pabaigos (iš viso 13 narių).
let number21 = secondArr.slice(findMiddleIndex(secondArr) + 1);
console.log(number21);
// 2.22. Gauti visus narius išskyrus pirmą ir paskutinį.
let number22 = secondArr.slice(1, secondArr.length - 1);
console.log(number22);
// 2.23. Gauti visus narius išskyrus pirmus penkis ir paskutinius tris.
let number23 = secondArr.slice(5, secondArr.length - 3);
console.log(number23);
// 2.24. Gauti visus narius išskyrus pirmą ir paskutinius 8.
let number24 = secondArr.slice(1, secondArr.length - 8);
console.log(number24);
// 2.25. Gauti visus narius išskyrus pirmus 7 ir paskutinį.
let number25 = secondArr.slice(7, secondArr.length - 1);
console.log(number25);
// 2.26. Gauti visus narius išskyrus pirmus 9 ir paskutinius 12.
let number26 = secondArr.slice(9, secondArr.length - 12);
console.log(number26);
// 2.27. Gauti 9 narius skaičiuojant nuo 11.
let number27 = secondArr.slice(10, 19);
console.log(number27);
// 2.28. Gauti 12 narių skaičiuojant nuo 8.
let number28 = secondArr.slice(7, 19);
console.log(number28);
// 2.29. Gauti pirmus penkis ir paskutinius šešis masyvo narius. Šiuos narius gauti viename masyve. Reikės atlikti daugiau veiksmų nei prieš tai uždaviniuose.
let number291 = secondArr.slice(0, 5);
let number292 = secondArr.slice(-6);
let number293 = [...number291, ...number292];
console.log(number293);
// 2.30. Gauti masyvo narius nuo 3 iki 5 ir nuo 15 iki 17. Šiuos narius gauti viename masyve. Reikės atlikti daugiau veiksmų nei prieš tai uždaviniuose.

let number301 = secondArr.slice(2, 5);
let number302 = secondArr.slice(14, 17);
let number303 = [...number301, ...number302];

console.log(number303);

// 3. Tęsiant darbą su ankstesniu masyvu atlikti šias užduotis naudojant filter metodą. Kiekvienai užduočiai sukurti naują kintamąjį, jame išsaugoti reikšmę, kurią grąžina filter metodas, ir šį kintamąjį išvesti į konsolę:

let thirdArr = extraTaskAnsArr;

// 3.1. Gauti tik teigiamus skaičius.
let number31 = thirdArr.filter(function (num) {
  if (Number(num)) return num > 0;
  return false;
});
console.log(number31);
// 3.2. Gauti tik neigiamus skaičius.
let number32 = thirdArr.filter(function (num) {
  if (Number(num)) return num < 0;
});
console.log(number32);
// 3.3. Gauti tik skaičius, kurie dalinasi iš 2.
let number33 = thirdArr.filter(function (num) {
  if (Number(num)) return num % 2 === 0 && Number(num);
});
console.log(number33);
// 3.4. Gauti tik skaičius, kurie dalinasi iš 3.
let number34 = thirdArr.filter(function (num) {
  if (Number(num)) return num % 3 === 0;
});
console.log(number34);
// 3.5. Gauti tik skaičius, kurie dalinasi iš 5.
let number35 = thirdArr.filter(function (num) {
  if (Number(num)) return num % 5 === 0;
});
console.log(number35);
// 3.6. Gauti tik skaičius, kurie dalinasi iš 11.
let number36 = thirdArr.filter(function (num) {
  if (Number(num)) return num % 11 === 0;
});
console.log(number36);
// 3.7. Gauti tik skaičius, kurie dalinasi iš 31.
let number37 = thirdArr.filter(function (num) {
  if (Number(num)) return num % 31 === 0;
});
console.log(number37);
// 3.8. Gauti tik skaičius, kurie dalinasi iš 2 ir iš 3.
let number38 = thirdArr.filter(function (num) {
  if (Number(num)) return num % 2 === 0 && num % 3 === 0;
});
console.log(number38);
// 3.9. Gauti tik skaičius, kurie dalinasi iš 3 ir iš 7.
let number39 = thirdArr.filter(function (num) {
  if (Number(num)) return num % 3 === 0 && num % 7 === 0;
});
console.log(number39);
// 3.10. Gauti tik skaičius, kurie dalinasi iš 5 ir iš 9.
let number40 = thirdArr.filter(function (num) {
  if (Number(num)) return num % 5 === 0 && num % 9 === 0;
});
console.log(number40);
// 3.11. Gauti tik skaičius, kurie dalinasi iš 5 ir iš 11.
let number41 = thirdArr.filter(function (num) {
  if (Number(num)) return num % 5 === 0 && num % 11 === 0;
});
console.log(number41);
// 3.12. Gauti tik skaičius, kurie dalinasi iš 2, 8 ir 12.
let number42 = thirdArr.filter(function (num) {
  if (Number(num)) return num % 2 === 0 && num % 8 === 0 && num % 12 === 0 && Number(num);
});
console.log(number42);
// 3.13. Gauti tik skaičius, kurie dalinasi iš 2 arba iš 3.
let number43 = thirdArr.filter(function (num) {
  if (Number(num)) return num % 2 === 0 || num % 3 === 0;
});
console.log(number43);
// 3.14. Gauti tik skaičius, kurie dalinasi iš 3 arba iš 5.
let number44 = thirdArr.filter(function (num) {
  if (Number(num)) return num % 3 === 0 || num % 5 === 0;
});
console.log(number44);
// 3.15. Gauti tik skaičius, kurie dalinasi iš 5 arba iš 6.
let number45 = thirdArr.filter(function (num) {
  if (Number(num)) return num % 5 === 0 || num % 6 === 0;
});
console.log(number45);
// 3.16. Gauti tik skaičius, kurie dalinasi iš 7 arba iš 8.
let number46 = thirdArr.filter(function (num) {
  if (Number(num)) return num % 7 === 0 || num % 8 === 0;
});
console.log(number46);
// 3.17. Gauti tik skaičius, kurie dalinasi iš 9 arba iš 13.
let number47 = thirdArr.filter(function (num) {
  if (Number(num)) return num % 9 === 0 || num % 13 === 0;
});
console.log(number47);
// 3.18. Gauti tik skaičius, kurie dalinasi iš 2, 3 arba iš 5.
let number48 = thirdArr.filter(function (num) {
  if (Number(num)) return num % 2 === 0 || num % 3 === 0 || num % 5 === 0;
});
console.log(number48);
// 3.19. Gauti tik skaičius, kurie dalinasi iš 5, 7 arba iš 9.
let number49 = thirdArr.filter(function (num) {
  if (Number(num)) return num % 5 === 0 || num % 7 === 0 || num % 9 === 0;
});
console.log(number49);
// 3.20. Gauti tik skaičius, kurie dalinasi iš 7, 8 arba iš 11.
let number50 = thirdArr.filter(function (num) {
  if (Number(num)) return num % 7 === 0 || num % 8 === 0 || num % 11 === 0;
});
console.log(number50);

// 3.21. Gauti tik skaičius, kurie dalinasi iš 9, 12 arba iš 13.
let number51 = thirdArr.filter(function (num) {
  if (Number(num)) return num % 9 === 0 || num % 12 === 0 || num % 13 === 0;
});
console.log(number51);
// 3.22. Gauti tik skaičius, kurie yra didesni už 100.
let number52 = thirdArr.filter(function (num) {
  if (Number(num)) return num > 100;
});
console.log(number52);
// 3.23. Gauti tik skaičius, kurie yra didesni už 555.
let number53 = thirdArr.filter(function (num) {
  if (Number(num)) return num > 555;
});
console.log(number53);
// 3.24. Gauti tik skaičius, kurie yra didesni arba lygūs 888.
let number54 = thirdArr.filter(function (num) {
  if (Number(num)) return num >= 888;
});
console.log(number54);
// 3.25. Gauti tik skaičius, kurie yra didesni arba lygūs 6789.
let number55 = thirdArr.filter(function (num) {
  if (Number(num)) return num >= 6789;
});
console.log(number55);
// 3.26. Gauti tik skaičius, kurie yra mažesni už 50.
let number56 = thirdArr.filter(function (num) {
  if (Number(num)) return num < 50;
});
console.log(number56);
// 3.27. Gauti tik skaičius, kurie yra mažesni už 1000.
let number57 = thirdArr.filter(function (num) {
  if (Number(num)) return num < 1000;
});
console.log(number57);
// 3.28. Gauti tik skaičius, kurie yra mažesni arba lygūs -1.
let number58 = thirdArr.filter(function (num) {
  if (Number(num)) return num <= -1;
});
console.log(number58);
// 3.29. Gauti tik skaičius, kurie yra mažesni arba lygūs -5564.
let number59 = thirdArr.filter(function (num) {
  if (Number(num)) return num <= -5564;
});
console.log(number59);
// 3.30. Gauti tik skaičius, kurie yra mažesni už 1000 ir didesni už 500.
let number60 = thirdArr.filter(function (num) {
  if (Number(num)) return num < 1000 && num > 500;
});
console.log(number60);
// 3.31. Gauti tik skaičius, kurie yra mažesni už 100 ir didesni už 0.
let number61 = thirdArr.filter(function (num) {
  if (Number(num)) return num < 100 && num > 0;
});
console.log(number61);
// 3.32. Gauti tik skaičius, kurie yra mažesni už 0 ir didesni už -50.
let number62 = thirdArr.filter(function (num) {
  if (Number(num)) return num < 0 && num > -50;
});
console.log(number62);
// 3.33. Gauti tik skaičius, kurie yra mažesni arba lygūs 0 ir didesni už -100.
let number63 = thirdArr.filter(function (num) {
  if (Number(num)) return num <= 0 && num > -100;
});
console.log(number63);
// 3.34. Gauti tik skaičius, kurie yra didesni arba lygūs 0 ir mažesni už 55.
let number64 = thirdArr.filter(function (num) {
  if (Number(num)) return num >= 0 && num < 55;
});
console.log(number64);
// 3.35. Gauti tik skaičius, kurie yra didesni arba lygūs 444 ir mažesni arba lygūs 654.
let number65 = thirdArr.filter(function (num) {
  if (Number(num)) return num >= 444 && num <= 654;
});
console.log(number65);
// 3.36. Gauti tik teigiamus skaičius, kurie dalinasi iš 2.
let number66 = thirdArr.filter(function (num) {
  if (Number(num)) return num % 2 === 0 && num >= 0;
});
console.log(number66);
// 3.37. Gauti tik teigiamus skaičius, kurie dalinasi iš 3.
let number67 = thirdArr.filter(function (num) {
  if (Number(num)) return num % 3 === 0 && num >= 0;
});
console.log(number67);
// 3.38. Gauti tik neigiamus skaičius, kurie dalinasi iš 4.
let number68 = thirdArr.filter(function (num) {
  if (Number(num)) return num % 4 === 0 && num < 0;
});
console.log(number68);
// 3.39. Gauti tik neigiamus skaičius, kurie dalinasi iš 111.
let number69 = thirdArr.filter(function (num) {
  if (Number(num)) return num % 111 === 0 && num < 0;
});
console.log(number69);

// 3.40. Gauti tik skaičius, kurie yra didesni už 500 ir kurie dalinasi iš 2.
let number340 = thirdArr.filter((num) => {
  if (Number(num)) return num % 2 === 0 && num > 500;
});
console.log(number340);
// 3.41. Gauti tik skaičius, kurie yra didesni už 1000 ir kurie dalinasi iš 3.
let number341 = thirdArr.filter((num) => {
  if (Number(num)) return num % 3 === 0 && num > 1000;
});
console.log(number341);
// 3.42. Gauti tik skaičius, kurie yra mažesni už 1000 ir kurie dalinasi iš 9.
let number342 = thirdArr.filter((num) => {
  if (Number(num)) return num % 9 === 0 && num < 1000;
});
console.log(number342);
// 3.43. Gauti tik skaičius, kurie yra mažesni už 500 ir kurie dalinasi iš 2.
let number343 = thirdArr.filter((num) => {
  if (Number(num)) return num % 2 === 0 && num < 500;
});
console.log(number343);
// 3.44. Gauti tik skaičius, kurie yra didesni arba lygūs 33 ir kurie dalinasi iš 3.
let number344 = thirdArr.filter((num) => {
  if (Number(num)) return num % 3 === 0 && num >= 33;
});
console.log(number344);
// 3.45. Gauti tik skaičius, kurie yra didesni arba lygūs 444 ir kurie dalinasi iš 12.
let number345 = thirdArr.filter((num) => {
  if (Number(num)) return num % 12 === 0 && num >= 444;
});
console.log(number345);
// 3.46. Gauti tik skaičius, kurie yra mažesni arba lygūs 155 ir kurie dalinasi iš 5.
let number346 = thirdArr.filter((num) => {
  if (Number(num)) return num % 5 === 0 && num <= 155;
});
console.log(number346);
// 3.47. Gauti tik skaičius, kurie yra mažesni arba lygūs -333 ir kurie dalinasi iš 9.
let number347 = thirdArr.filter((num) => {
  if (Number(num)) return num % 9 === 0 && num <= -333;
});
console.log(number347);
// 3.48. Gauti tik skaičius, kurie yra didesni už 100, mažesni už 500 ir kurie dalinasi iš 5.
let number348 = thirdArr.filter((num) => {
  if (Number(num)) return num % 5 === 0 && num > 100 && num < 500;
});
console.log(number348);
// 3.49. Gauti tik skaičius, kurie yra didesni arba lygūs 888, mažesni už 1000 ir kurie dalinasi iš 2.
let number349 = thirdArr.filter((num) => {
  if (Number(num)) return num % 2 === 0 && num >= 888 && num < 1000;
});
console.log(number349);
// 3.50. Gauti tik skaičius, kurie yra mažesni arba lygūs 888, didesni arba lygūs -333, dalinasi iš 3 ir nėra nulis.
let number350 = thirdArr.filter((num) => {
  if (Number(num)) return num % 3 === 0 && num <= 888 && num >= -333 && num !== 0;
});
console.log(number350);
// 3.51. Gauti tik skaičius.
let number351 = thirdArr.filter((num) => Number(num));
console.log(number351);

// 3.52. Gauti tik tekstus (string).
let number352 = thirdArr.filter((num) => isString(num));
console.log(number352);
// 3.53. Gauti tik tekstus (string), kurie turi daugiau nei 5 simbolius.
let number353 = thirdArr.filter((num) => {
  if (isString(num)) return num.length > 5;
});
console.log(number353);
// 3.54. Gauti tik tekstus (string), kurie turi mažiau arba lygiai 5 simbolius.
let number354 = thirdArr.filter((num) => {
  if (isString(num)) return num.length >= 5;
});
console.log(number354);
// 3.55. Gauti tik tekstus (string), kurie turi mažiau nei 7 simbolius.
let number355 = thirdArr.filter((num) => {
  if (isString(num)) return num.length < 7;
});
console.log(number355);
// 3.56. Gauti tik tekstus (string), kurie turi raidę t.
let number356 = thirdArr.filter((num) => {
  if (isString(num)) return num.includes('t');
});
console.log(number356);
// 3.57. Gauti tik tekstus (string), kurie turi raidę y.
let number357 = thirdArr.filter((num) => {
  if (isString(num)) return num.includes('y');
});
console.log(number357);
// 3.58. Gauti tik tekstus (string), kurie turi raides e arba a.
let number358 = thirdArr.filter((num) => {
  if (isString(num)) return num.includes('e') || num.includes('a');
});
console.log(number358);
// 3.59. Gauti tik tekstus (string), kurie turi raides t ir i.
let number359 = thirdArr.filter((num) => {
  if (isString(num)) return num.includes('e') || num.includes('a');
});
console.log(number359);
// 3.60. Gauti tik tekstus (string), kurie turi raide t, bet neturi raidės k.
let number360 = thirdArr.filter((num) => {
  if (isString(num)) return num.includes('t') && !num.includes('k');
});
console.log(number360);
// 3.61. Gauti tik tekstus (string), kurie turi raide a, bet neturi raidės s.
let number361 = thirdArr.filter((num) => {
  if (isString(num)) return num.includes('a') && !num.includes('s');
});
console.log(number361);
// 3.62. Gauti tik tekstus (string), kurie turi daugiau nei vieną raidę t.
let number362 = thirdArr.filter((num) => {
  if (isString(num)) return num.split('t').length - 1 > 1;
});
console.log(number362);

// 3.63. Gauti tik tekstus (string), kurie turi raidžių junginį st.
let number363 = thirdArr.filter((num) => {
  if (isString(num)) return num.includes('st');
});
console.log(number363);
// 3.64. Gauti tik tekstus (string), kurie turi raidžių junginį nd.
let number364 = thirdArr.filter((num) => {
  if (isString(num)) return num.includes('nd');
});
console.log(number364);
// 3.65. Gauti tik tekstus (string), kurie neturi raidės s.
let number365 = thirdArr.filter((num) => {
  if (isString(num)) return !num.includes('s');
});
console.log(number365);
// 3.66. Gauti tik tekstus (string), kurie neturi raidės t.
let number366 = thirdArr.filter((num) => {
  if (isString(num)) return !num.includes('t');
});
console.log(number366);
// 3.67. Gauti tik tekstus (string), kurie neturi raidės r ir l.
let number367 = thirdArr.filter((num) => {
  if (isString(num)) return !num.includes('r') && !num.includes('l');
});
console.log(number367);
// 3.68. Gauti tik tekstus (string), kurie prasideda skaičiumi.
let number368 = thirdArr.filter((num) => {
  if (isString(num)) return /^[0-9]/.test(num);
});
console.log(number368);
// 3.69. Gauti tik tekstus (string), kurie prasideda raide s.
let number369 = thirdArr.filter((num) => {
  if (isString(num)) return num.startsWith('s');
});
console.log(number369);
// 3.70. Gauti tik tekstus (string), kurie prasideda raide o.
let number370 = thirdArr.filter((num) => {
  if (isString(num)) return num.startsWith('o');
});
console.log(number370);
// 3.70. Gauti tik tekstus (string), kurie baigiasi raide d.
let number3700 = thirdArr.filter((num) => {
  if (isString(num)) return num.endsWith('d');
});
console.log(number3700);
// 3.71. Gauti tik tekstus (string), kurie baigiasi raide s.
let number371 = thirdArr.filter((num) => {
  if (isString(num)) return num.endsWith('s');
});
console.log(number371);
// 3.72. Gauti tik tekstus (string), kurie turi daugiau nei 4 simbolius ir turi raidę o.
let number372 = thirdArr.filter((num) => {
  if (isString(num)) return num.includes('o') && num.length > 4;
});
console.log(number372);
// 3.73. Gauti tik tekstus (string), kurie turi daugiau arba lygiai 5 simbolius ir turi raidę a.
let number373 = thirdArr.filter((num) => {
  if (isString(num)) return num.includes('a') && num.length >= 5;
});
console.log(number373);
// 3.74. Gauti tik tekstus (string), kurie turi daugiau arba lygiai 5 simbolius ir turi raidę a.
let number374 = thirdArr.filter((num) => {
  if (isString(num)) return num.includes('a') && num.length >= 5;
});
console.log(number374);
// 3.75. Gauti tik tekstus (string), kurie turi porinį simbolių skaičių.
let number375 = thirdArr.filter((num) => {
  if (isString(num)) return num.length % 2 === 0;
});
console.log(number375);
// // 3.76. Gauti tik tekstus (string), kurie turi neporinį simbolių skaičių ir turi raidę s.
let number376 = thirdArr.filter((num) => {
  if (isString(num)) return num.includes('s') && num.length % 2 !== 0;
});
console.log(number376);
// 3.77. Gauti tik tekstus (string), kurių trečias simbolis yra a.
let number377 = thirdArr.filter((num) => {
  if (isString(num)) return num.charAt(2) === 'a';
});
console.log(number377);
// 3.78. Gauti tik tekstus (string), kurių ketvirtas simbolis yra l.
let number378 = thirdArr.filter((num) => {
  if (isString(num)) return num.charAt(3) === 'l';
});
console.log(number378);
// 3.79. Gauti tik tekstus (string), kurių penktas simbolis nėra t ir kurie turi daugiau simbolių nei 4.
let number379 = thirdArr.filter((num) => {
  if (isString(num)) return num.charAt(4) !== 't' && num.length > 4;
});
console.log(number379);
// 3.80. Gauti tik tekstus (string), kurių pirmas simbolis nėra e, kurie turi mažiau simbolių nei 6 ir kurie neprasideda skaičiumi.

let number380 = thirdArr.filter((num) => {
  if (isString(num)) return num.charAt(0) !== 'e' && num.length < 6 && !/^[0-9]/.test(num);
});
console.log(number380);

function isString(str) {
  typeof str === 'string' ? true : false;
  if (typeof str === 'string') {
    return true;
  } else return false;
}

// 4. Tęsiant darbą su ankstesniu masyvu atlikti šias užduotis naudojant for ciklą ir map metodą. Kiekvieną užduotį atlikti abiem būdais (for ciklu ir map metodu). Visus narius išvesti į konsole pagal žemiau pateiktas sąlygas:
let fourthArr = extraTaskNewArr;

function getOnlyNumbers(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!isNaN(arr[i])) newArr.push(arr[i]);
  }
  return newArr;
}

function getOnlyStrings(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (isString(arr[i])) newArr.push(arr[i]);
  }
  return newArr;
}

function task41(arr) {
  let condition = '4.1. Tik skaičius (number tipo duomenis).';
  let newArr = getOnlyNumbers(arr);
  return [newArr, arr, condition];
}

function task42(arr) {
  let condition = '4.2. Tik tekstą (string tipo duomenis).';
  let newArr = getOnlyStrings(arr);
  return [newArr, arr, condition];
}

task42(fourthArr);

function task43(arr) {
  let condition = '4.3. Tik skaičius (number tipo duomenis) ir juos pakelti 4-tuoju laipsniu.';
  let tempArr = getOnlyNumbers(arr);
  let newArr = [];

  for (let i = 0; i < tempArr.length; i++) {
    newArr.push(tempArr[i] ** 4);
  }
  return [newArr, arr, condition];
}
console.log(task43(fourthArr));

function task44(arr) {
  let condition = '4.4. Tik skaičius (number tipo duomenis) ir prie jų pridėti 55.';

  let tempArr = getOnlyNumbers(arr);
  let newArr = [];
  for (let i = 0; i < tempArr.length; i++) {
    newArr.push(tempArr[i] + 55);
  }
  return [newArr, arr, condition];
}

task44(fourthArr);

function task45(arr) {
  let condition = '4.5. Tik skaičius (number tipo duomenis) ir juos padalinti iš 2.';

  let tempArr = getOnlyNumbers(arr);
  let newArr = [];
  for (let i = 0; i < tempArr.length; i++) {
    newArr.push(tempArr[i] / 2).toFixed(2);
  }
  return [newArr, arr, condition];
}

task45(fourthArr);

function task46(arr) {
  let condition = '4.6. Tik skaičius (number tipo duomenis) ir prieš juos pridėti teksta, tokiu formatu: "Number: 2".';

  let tempArr = getOnlyNumbers(arr);
  let newArr = [];
  for (let i = 0; i < tempArr.length; i++) {
    newArr.push('Number: ' + tempArr[i]);
  }
  return [newArr, arr, condition];
}

task46(fourthArr);

function task47(arr) {
  let condition =
    '4.7. Tik skaičius (number tipo duomenis) ir pridėti tekstą su jų pačių indeksais, pvz: \n "Index: 0, Number: 2" \n "Index: 1, Number: 3" \n "Index: 2, Number: 5" \n Ir t.t.';
  let tempArr = getOnlyNumbers(arr);
  let newArr = [];
  for (let i = 0; i < tempArr.length; i++) {
    newArr.push(`Index: ${[i]} Number: ${tempArr[i]}`);
  }
  return [newArr, arr, condition];
}

task47(fourthArr);

function task48(arr) {
  let condition = '4.8. Tik skaičius (number tipo duomenis) ir juos padauginti iš jų pačių indekso.';
  let tempArr = getOnlyNumbers(arr);
  let newArr = [];
  for (let i = 0; i < tempArr.length; i++) {
    newArr.push(`${tempArr[i]} * ${[i]} = ` + tempArr[i] * [i]);
  }
  return [newArr, arr, condition];
}

task48(fourthArr);

function task49(arr) {
  let condition =
    '4.9. Tik skaičius (number tipo duomenis) ir juos padauginti iš ankstesnio nario, pvz. \n - Pirmo skaičiaus dauginti nereikia., \n - Antrą skaičių dauginti iš pirmo. \n - Trečią skaičių dauginti iš antro. \n - Ketvirta skaičių dauginti iš trečio. \n - Penktą skaičių dauginti iš ketvirto. \n  Ir t.t.';

  let tempArr = getOnlyNumbers(arr);
  let newArr = [];
  for (let i = 0; i < tempArr.length; i++) {
    if ([i - 1] < 0 || i === tempArr.length - 1) {
      newArr.push(tempArr[i]);
    } else {
      newArr.push(tempArr[i] * tempArr[i + 1]);
    }
  }
  return [newArr, arr, condition];
}

task49(fourthArr);

function task50(arr) {
  let condition = '4.10. Tik tuos skaičius (number tipo duomenis), kuriuos padauginus iš 5, atsakymas gaunasi didesnis už 350.';
  let tempArr = getOnlyNumbers(arr);

  let newArr = [];
  for (let i = 0; i < tempArr.length; i++) {
    if (tempArr[i] * 5 > 350) {
      newArr.push(tempArr[i]);
    }
  }
  return [newArr, arr, condition];
}

task50(fourthArr);

function task51(arr) {
  let condition = '4.11. Tik tekstą (string tipo duomenis) ir prie kiekvieno teksto parašyti kiek simbolių jis turi, pvz. "Start has 5 symbols".';
  let tempArr = getOnlyStrings(arr);
  let newArr = [];
  for (let i = 0; i < tempArr.length; i++) {
    newArr.push(`${tempArr[i]}  has ${tempArr[i].length} symbols`);
  }
  return [newArr, arr, condition];
}

task51(fourthArr);

function task52(arr) {
  let condition =
    '4.12. Tik tekstą (string tipo duomenis), tačiau kiekviena žodžio raidę išskiriant brūkšniu ir paverčiant ją didžiąja raide, pvz.: "S-T-A-R-T".';
  let tempArr = getOnlyStrings(arr);

  let newArr = [];
  for (let i = 0; i < tempArr.length; i++) {
    newArr.push(tempArr[i].toUpperCase().split('').join('-'));
  }
  return [newArr, arr, condition];
}

task52(fourthArr);

function replaceSymbol(array, whichSymbol, symbol) {
  if (array.length >= whichSymbol) {
    array.splice(whichSymbol, 1, symbol);
  }
}

function task53(arr) {
  let condition = '4.13. Tik tekstą (string tipo duomenis), tačiau kiekviena žodžio pirmą ir trečią raidę pakeičiant brūkšniu (underscore), pvz.: "_t_rt";';
  let mainArr = getOnlyStrings(arr);
  let newArr = [];
  for (let i = 0; i < mainArr.length; i++) {
    let tempArr = mainArr[i].split('');
    tempArr.splice(0, 1, '_');
    tempArr.splice(2, 1, '_');
    newArr.push(`${mainArr[i]} = ` + tempArr.join(''));
  }
  return [newArr, arr, condition];
}

task53(fourthArr);

function task54(arr) {
  let condition = '4.14. Tik tekstą (string tipo duomenis), tačiau žodį parašant atvirkščiai, pvz.: vietoje "start" parašyti "trats";';
  let tempArr = getOnlyStrings(arr);
  let newArr = [];
  for (let i = 0; i < tempArr.length; i++) {
    newArr.push(tempArr[i].split('').reverse().join(''));
  }
  return [newArr, arr, condition];
}

task54(fourthArr);

function task55(arr) {
  let condition =
    '4.15. Tik tekstą (string tipo duomenis) ir prie kiekvieno teksto parašyti tarp kokių narių masyve jis yra, pvz.: "Word obuolys is between -5564 and -51 in the array"';
  let tempArr = getOnlyStrings(arr);
  let newArr = [];
  for (let i = 0; i < tempArr.length; i++) {
    if ([i] == 0) {
      newArr.push(`Word ${tempArr[i]} is the first element in the array.`);
    } else if ([i] == tempArr.length - 1) {
      newArr.push(`Word ${tempArr[i]} is the last element in the array.`);
    } else {
      newArr.push(`Word ${tempArr[i]} is between ${tempArr[i - 1]} and ${tempArr[i + 1]} in the array.`);
    }
  }
  return [newArr, arr, condition];
}

function openTask(taskId, resultAndOldAndConditionArrays) {
  const boxWrapper = document.querySelector('#task-box');
  const container = document.querySelector('#task-container');
  let task = 'task-' + taskId;
  let getListId = document.getElementById(task);
  if (!getListId) {
    while (boxWrapper.hasChildNodes()) {
      boxWrapper.removeChild(boxWrapper.firstChild);
    }
    const allCards = document.querySelectorAll('.card');
    allCards.forEach((card) => card.remove());

    let oldArray = resultAndOldAndConditionArrays[1].join('; ');
    let condition = resultAndOldAndConditionArrays[2];
    console.log(condition);

    // Create HTML elements

    let div = document.createElement('div');
    div.setAttribute('id', task);
    boxWrapper.appendChild(div);

    let cards = document.createElement('div');
    cards.setAttribute('class', 'card-wrapper');
    div.appendChild(cards);

    let card = document.createElement('div');
    card.setAttribute('class', 'card');
    cards.appendChild(card);

    let cardTitle = document.createElement('div');
    cardTitle.setAttribute('class', 'card-title');
    cardTitle.innerText = taskId + ' Užduotis';
    card.appendChild(cardTitle);

    let cardContent = document.createElement('div');
    cardContent.setAttribute('class', 'card-content');
    cardContent.innerText = condition;
    card.appendChild(cardContent);

    let card2 = document.createElement('div');
    card2.setAttribute('class', 'card');
    cards.appendChild(card2);

    let cardTitle2 = document.createElement('div');
    cardTitle2.setAttribute('class', 'card-title');
    cardTitle2.innerText = 'Pradinis masyvas';
    card2.appendChild(cardTitle2);

    let cardContent2 = document.createElement('div');
    cardContent2.setAttribute('class', 'card-content');
    cardContent2.innerText = oldArray;
    card2.appendChild(cardContent2);

    let ul = document.createElement('ol');
    // ul.setAttribute('id', task);
    div.appendChild(ul);

    // let getListId = document.getElementById(task);
    let resultArray = resultAndOldAndConditionArrays[0];

    // Insert data into elements
    resultArray.forEach((item) => {
      let li = document.createElement('li');
      li.innerText = item;
      ul.appendChild(li);
    });
  } else {
    // document.getElementById(task).remove();
    document.querySelector(`div[id=${task}]`).remove();
  }
}

function openTask41() {
  openTask(41, task41(fourthArr));
}

function openTask42() {
  openTask(42, task42(fourthArr));
}

function openTask43() {
  openTask(43, task43(fourthArr));
}

function openTask44() {
  openTask(44, task44(fourthArr));
}

function openTask45() {
  openTask(45, task45(fourthArr));
}

function openTask46() {
  openTask(46, task46(fourthArr));
}

function openTask47() {
  openTask(47, task47(fourthArr));
}

function openTask48() {
  openTask(48, task48(fourthArr));
}

function openTask49() {
  openTask(49, task49(fourthArr));
}

function openTask50() {
  openTask(50, task50(fourthArr));
}

function openTask51() {
  openTask(51, task51(fourthArr));
}

function openTask52() {
  openTask(52, task52(fourthArr));
}

function openTask53() {
  openTask(53, task53(fourthArr));
}

function openTask54() {
  openTask(54, task54(fourthArr));
}

function openTask55() {
  openTask(55, task55(fourthArr));
}

// task42(fourthArr);
// 4.3. Tik skaičius (number tipo duomenis) ir juos pakelti 4-tuoju laipsniu.
function taskMap43(arr) {
  let tempArr = getOnlyNumbers(arr);
  let newArr = tempArr.map((num) => num ** 4);
  return newArr;
}

console.log(taskMap43(fourthArr));

// console.log(task43(fourthArr));
// 4.4. Tik skaičius (number tipo duomenis) ir prie jų pridėti 55.
function taskMap44(arr) {
  let tempArr = getOnlyNumbers(arr);
  let newArr = tempArr.map((num) => num + 55);
  return newArr;
}

console.log(taskMap44(fourthArr));

// task44(fourthArr);
// 4.5. Tik skaičius (number tipo duomenis) ir juos padalinti iš 2.
function taskMap45(arr) {
  let tempArr = getOnlyNumbers(arr);
  let newArr = tempArr.map((num) => (num / 2).toFixed(2));
  return newArr;
}
console.log(taskMap45(fourthArr));

// task45(fourthArr);
// 4.6. Tik skaičius (number tipo duomenis) ir prieš juos pridėti teksta, tokiu formatu: "Number: 2".
function taskMap46(arr) {
  let tempArr = getOnlyNumbers(arr);
  let newArr = tempArr.map((num) => 'Number: ' + num);
  return newArr;
}

console.log(taskMap46(fourthArr));

// task46(fourthArr);
// 4.7. Tik skaičius (number tipo duomenis) ir pridėti tekstą su jų pačių indeksais, pvz.:
//   "Index: 0, Number: 2"
//   "Index: 1, Number: 3"
//   "Index: 2, Number: 5"
//   Ir t.t.

function taskMap47(arr) {
  let tempArr = getOnlyNumbers(arr);
  let newArr = tempArr.map((num, key) => `Index: ${[key]} Number: ${num}`);
  return newArr;
}

console.log(taskMap47(fourthArr));

// task47(fourthArr);
// 4.8. Tik skaičius (number tipo duomenis) ir juos padauginti iš jų pačių indekso.

function taskMap48(arr) {
  let tempArr = getOnlyNumbers(arr);
  let newArr = tempArr.map((num, key) => num * key);
  return newArr;
}
console.log(taskMap48(fourthArr));

// task48(fourthArr);
// 4.9. Tik skaičius (number tipo duomenis) ir juos padauginti iš ankstesnio nario, pvz.:
//   - Pirmo skaičiaus dauginti nereikia.
//   - Antrą skaičių dauginti iš pirmo.
//   - Trečią skaičių dauginti iš antro.
//   - Ketvirta skaičių dauginti iš trečio.
//   - Penktą skaičių dauginti iš ketvirto.
//   Ir t.t.

function taskMap49(arr) {
  let tempArr = getOnlyNumbers(arr);
  let newArr = tempArr.map((num, key, array) => (key - 1 < 0 ? num : num * array[key - 1]));
  return newArr;
}
console.log(taskMap49(fourthArr));
// task49(fourthArr);

// 4.10. Tik tuos skaičius (number tipo duomenis), kuriuos padauginus iš 5, atsakymas gaunasi didesnis už 350.

function taskMap50(arr) {
  let tempArr = getOnlyNumbers(arr);
  let newArr = tempArr.map((num) => (num * 5 > 350 ? num : false)).filter(Boolean);
  return newArr;
}
console.log(taskMap50(fourthArr));
// task50(fourthArr);

// 4.11. Tik tekstą (string tipo duomenis) ir prie kiekvieno teksto parašyti kiek simbolių jis turi, pvz. "Start has 5 symbols".

function taskMap51(arr) {
  let tempArr = getOnlyStrings(arr);
  let newArr = tempArr.map((num) => num + ' has ' + num.length + ' symbols');
  return newArr;
}
console.log(taskMap51(fourthArr));

// task51(fourthArr);

// 4.12. Tik tekstą (string tipo duomenis), tačiau kiekviena žodžio raidę išskiriant brūkšniu ir paverčiant ją didžiąja raide, pvz.: "S-T-A-R-T".

function taskMap52(arr) {
  let tempArr = getOnlyStrings(arr);
  let newArr = tempArr.map((num) => num.toUpperCase().split('').join('-'));
  return newArr;
}

console.log(taskMap52(fourthArr));

// task52(fourthArr);

// 4.13. Tik tekstą (string tipo duomenis), tačiau kiekviena žodžio pirmą ir trečią raidę pakeičiant brūkšniu (underscore), pvz.: "_t_rt";

function replaceSymbol(array, whichSymbol, symbol) {
  if (array.length >= whichSymbol) {
    array.splice(whichSymbol, 1, symbol);
  }
}

function taskMap53(arr) {
  let tempArr = getOnlyStrings(arr);

  let newArr = tempArr.map((num) => {
    let word = num.split('');
    replaceSymbol(word, 0, '_');
    replaceSymbol(word, 2, '_');

    let convertedWord = word.join('');
    return convertedWord;
  });

  return newArr;
}

console.log(taskMap53(fourthArr));

// task53(fourthArr);
// 4.14. Tik tekstą (string tipo duomenis), tačiau žodį parašant atvirkščiai, pvz.: vietoje "start" parašyti "trats";
function taskMap54(arr) {
  let tempArr = getOnlyStrings(arr);
  let newArr = tempArr.map((num) => num.split('').reverse().join(''));
  return newArr;
}

console.log(taskMap54(fourthArr));

// task54(fourthArr);

// 4.15. Tik tekstą (string tipo duomenis) ir prie kiekvieno teksto parašyti tarp kokių narių masyve jis yra, pvz.: "Word obuolys is between -5564 and -51 in the array".

function taskMap55(arr) {
  let tempArr = getOnlyStrings(arr);

  let newArr = tempArr.map((num, key, array) => {
    if (key === 0) {
      return 'Word ' + num + ' is the first element in the array.';
    } else if (key == array.length - 1) {
      return 'Word ' + num + ' is the last element in the array.';
    } else {
      return 'Word ' + num + ' is between ' + array[key - 1] + ' and ' + array[key + 1] + ' in the array';
    }
  });
  return newArr;
}
console.log(taskMap55(fourthArr));
