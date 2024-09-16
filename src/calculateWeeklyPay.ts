function calculateWeeklyPay(overtime: boolean): number {
  const tenthRate: number = getTenthRate();
  const tenthsWorked: number = getTenthsWorked();
  const straightTime: number = Math.min(400, tenthsWorked);
  const overTime: number = Math.max(0, tenthsWorked - straightTime);
  const straightPay: number = straightTime * tenthRate;
  const overtimeRate: number = overtime ? 1.5 : 1.0 * tenthRate;
  const overtimePay: number = Math.round(overTime * overtimeRate);
  return straightPay + overtimePay;
}


// Что было плохо и почему?
// Магические числа
// Логика расчета overtimeRate не совсем ясна, так как она включает проверку условия и умножение на tenthRate в одном выражении.
// Отсутствие проверки входных данных

// const MAX_STRAIGHT_TIME = 400;
// const OVERTIME_MULTIPLIER = 1.5;
//
// function calculateWeeklyPay(overtime: boolean): number {
//   const tenthRate: number = getTenthRate();
//   const tenthsWorked: number = getTenthsWorked();
//
//   if (typeof tenthRate !== 'number' || tenthRate <= 0) {
//     throw new Error("Invalid tenth rate");
//   }
//
//   if (typeof tenthsWorked !== 'number' || tenthsWorked < 0) {
//     throw new Error("Invalid tenths worked");
//   }
//
//   const straightTime: number = Math.min(MAX_STRAIGHT_TIME, tenthsWorked);
//   const overTime: number = Math.max(0, tenthsWorked - straightTime);
//
//   const straightPay: number = straightTime * tenthRate;
//   const overtimeRate: number = overtime ? OVERTIME_MULTIPLIER : 1.0;
//   const overtimePay: number = Math.round(overTime * overtimeRate * tenthRate);
//
//   return straightPay + overtimePay;
// }

// Что стало лучше и почему?
// Код стал более читаемым благодаря вынесению "магических чисел" в константы и улучшению логики расчета ставки сверхурочных
// Добавлены проверки входных данных, что повышает надёжность и предотвращает потенциальные ошибки
// Константы с описательными именами и улучшенная проверка данных делают код легче для поддержки и модификации