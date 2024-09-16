function calculateTotalPrice(quantity, price) {
  return quantity * price;
}

function formatPhoneNumber(number) {
  return `(${number.slice(0, 3)}) ${number.slice(3, 6)}-${number.slice(6)}`;
}


// Что было плохо и почему?
// Отсутствие типизации
// Отсутствие проверки значений

// function calculateTotalPrice(quantity: number, price: number): number {
//   if (quantity < 0 || price < 0) {
//     throw new Error("Quantity and price must be non-negative numbers.");
//   }
//   return quantity * price;
// }

// function formatPhoneNumber(number: string): string {
//   if (number.length !== 10 || !/^\d{10}$/.test(number)) {
//     throw new Error("Phone number must be a string of 10 digits.");
//   }
//   return `(${number.slice(0, 3)}) ${number.slice(3, 6)}-${number.slice(6)}`;
// }

// Что стало лучше и почему?
// Типизация
// Проверка значений