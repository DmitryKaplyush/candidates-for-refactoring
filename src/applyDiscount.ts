
// Модуль 1
function calculateTotalPrice(items) {
  let totalPrice = 0;
  items.forEach((item) => {
    totalPrice += item.price;
  });
  return totalPrice;
}

// Модуль 2
function applyDiscount(totalPrice, discountPercentage) {
  return totalPrice * (1 - discountPercentage / 100);
}



//Что было плохо и почему?
// Меня смущает в calculateTotalPrice нет значения количества товара, соответственно если будет 1000 одинаковых позиций придет большой массив items,
// чтобы это исключить я бы добавил свойство quantity
// (но этого делать сейчас не стану, тк это затрагивает релизацию items, к которой у меня нет доступа, а только подсветил)
// Так же меня смущает что нет проверки на массив, и на существование значения price, что может привести к ошибке.
// Еще отсутствует обработка ошибок
// и можно заменить forEach на reduce
// В applyDiscount нет явной проверки аргументов, что может привести к ошибкам если в неё попадут некорректные данные

// // Модуль 1
// function calculateTotalPrice(items) {
//   if (!Array.isArray(items)) {
//     throw new Error("Invalid argument: items must be an array");
//   }
//   return items.reduce((totalPrice, item) => {
//     if (typeof item.price !== "number" || item.price < 0) {
//       throw new Error("Invalid item price");
//     }
//     return totalPrice + item.price;
//   }, 0);
// }
//
// // Модуль 2
// function applyDiscount(totalPrice, discountPercentage) {
//   if (typeof totalPrice !== "number" || totalPrice < 0) {
//     throw new Error("Invalid total price");
//   }
//   if (typeof discountPercentage !== "number" || discountPercentage < 0 || discountPercentage > 100) {
//     throw new Error("Invalid discount percentage");
//   }
//   return totalPrice * (1 - discountPercentage / 100);
// }


// Что стало лучше и почему?
// Использование reduce улучшило читаемость и производительность
// Добавление проверок повысит безопасность кода, защитив его от некорректных входных данных и возможных багов