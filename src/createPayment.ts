const createPayment = (isToken: Boolean) => {
  if (isToken) {
    const token = getUrl().slice();
    system.createTransaction(token).setTransaction();
  } else {
    const cardNumber = account.getCardNumber();
    userAccount.createCardPayment(cardNumber).postTransactionToServer();
  }
};


// Что было плохо и почему?
// Использование типа Boolean вместо boolean некорректно
// В текущем коде нет проверки на ошибки
// Без понимания назначения методов и функций их использование не совсем ясно, что усложняет поддержку и развитие кода

// /**
//  * Создаёт платеж в зависимости от типа (токен или карта)
//  * @param isToken - Флаг, указывающий, использовать ли токен для создания транзакции
//  * @throws Ошибка, если данные невалидны или операции не могут быть выполнены
//  */
// const createPayment = (isToken: boolean): void => {
//   try {
//     if (isToken) {
//       const url = getUrl();
//       if (!url) {
//         throw new Error("URL is invalid or not available.");
//       }
//       const token = url.slice();
//       if (!token) {
//         throw new Error("Failed to extract token.");
//       }
//       system.createTransaction(token).setTransaction();
//     } else {
//       const cardNumber = account.getCardNumber();
//       if (!cardNumber) {
//         throw new Error("Card number is invalid or not available.");
//       }
//       userAccount.createCardPayment(cardNumber).postTransactionToServer();
//     }
//   } catch (error) {
//     console.error("Payment creation failed:", error);
//   }
// };

// Что стало лучше и почему?
// Типизация
// Обработка ошибок
// Документация