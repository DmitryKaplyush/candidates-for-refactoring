if (
  user.age >= 18 &&
  user.age <= 65 &&
  user.employmentStatus === 'employed' &&
  user.criminalRecord === false
) {
  approveLoan();
}

//Что было плохо и почему?
// Магические числа
// Довольно длинное условие
// Нарушение принципа SRP проверка и вызов метода approveLoan() смешаны в одном месте. Это делает код менее тестируемым
// так как отдельно проверять условия становится сложнее
// нет типизации


// const MIN_AGE = 18;
// const MAX_AGE = 65;
//
// function isLoanEligible(user) {
//   const isValidAge = user.age >= MIN_AGE && user.age <= MAX_AGE;
//   const isEmployed = user.employmentStatus === 'employed';
//   const hasNoCriminalRecord = user.criminalRecord === false;
//
//   return isValidAge && isEmployed && hasNoCriminalRecord;
// }
//
// if (isLoanEligible(user)) {
//   approveLoan();
// }


// Что стало лучше и почему?
// Код стал более читаемым, поддерживаемым и тестируемым потому что вынесли проверку в отдельную функцию и избавились от магических чисел