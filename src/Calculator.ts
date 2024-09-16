class Calculator {
  public add(a: number, b: number): number {
    return a + b;
  }
  public subtract(a: number, b: number): number {
    return a - b;
  }
  public multiply(a: number, b: number): number {
    return a * b;
  }
  public divide(a: number, b: number): number {
    return a / b;
  }
}




// Что было плохо и почему?
// Метод divide не обрабатывает случай деления на ноль, что может привести к ошибке выполнения или непредсказуемым результатам
// Методы класса не содержат комментариев, которые могли бы объяснить их работу, что делает код менее понятным для других разработчиков

// class Calculator {
//   /**
//    * Возвращает сумму двух чисел
//    * @param a - Первое число
//    * @param b - Второе число
//    * @returns Сумма двух чисел
//    */
//   public add(a: number, b: number): number {
//     return a + b;
//   }
//
//   /**
//    * Возвращает разность двух чисел
//    * @param a - Первое число
//    * @param b - Второе число
//    * @returns Разность двух чисел
//    */
//   public subtract(a: number, b: number): number {
//     return a - b;
//   }
//
//   /**
//    * Возвращает произведение двух чисел
//    * @param a - Первое число
//    * @param b - Второе число
//    * @returns Произведение двух чисел
//    */
//   public multiply(a: number, b: number): number {
//     return a * b;
//   }
//
//   /**
//    * Возвращает частное двух чисел
//    * @param a - Делимое
//    * @param b - Делитель
//    * @returns Частное двух чисел
//    * @throws Ошибка, если делитель равен нулю
//    */
//   public divide(a: number, b: number): number {
//     if (b === 0) {
//       throw new Error("Division by zero is not allowed.");
//     }
//     return a / b;
//   }
// }

// Что стало лучше и почему?
// Добавлена проверка на деление на ноль в методе divide, что предотвращает ошибки выполнения и делает код более надёжным
// Комментарии к методам улучшают читаемость и поддерживаемость кода, делая его более понятным для других разработчиков